<?php

namespace App\Jobs;

use App\Helpers\Helper;
use App\Http\Controllers\Dashboard\ProductController;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProductImportProcessJob implements ShouldQueue
{
    use Dispatchable, Batchable, InteractsWithQueue, Queueable, SerializesModels;

    private $chunk;

    /**
     * Create a new job instance.
     */
    public function __construct($chunk)
    {
        $this->chunk = $chunk;
    }

    public function handleCategories($categories)
    {
        $categoriesIds = [];
        $parent = null;
        foreach ($categories as $key => $category) {
            $category = trim($category);
            $categoryExists = Category::where(['name' => $category, 'parent_id' => $parent])->first();


            if (!$categoryExists) {
                $categoryExists = Category::create(['name' => $category, 'parent_id' => $parent]);
            }
            $parent = $categoryExists->id;
            $categoriesIds = [...$categoriesIds, $categoryExists->id];
        }

        return $categoriesIds;
    }


    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // just for me to know the index of ecah coulomn in the excel
        $fieldMap = [
            "Id" => 0,
            "SKU" => 1,
            "Name" => 2,
            "Short description" => 3,
            "Meta description" => 4,
            "Description" => 5,
            "Tax status" => 6,
            "In Stock" => 7,
            "Weight" => 8,
            "Price" => 9,
            "Categories" => 10,
            "Images" => 11,
            "Meta Title" => 12,
            "Meta Keywords" => 13,
        ];

        foreach ($this->chunk as $row) {

            DB::transaction(function () use ($row) {
                $productData = [
                    'title' => $row[2],
                    'desc' => $row[5],
                    'price' => Helper::getPriceInInt($row[9]),
                    'weight' => $row[8] ?? 0,
                    'tax_status' => $row[6] === 'taxable' ? true : false,
                    'in_stock' => $row[7] === 1 ? true : false,
                    'sku' => $row[0] .  $row[1],
                    'short_desc' => $row[3] ?? '',
                ];

                $product = Product::updateOrCreate([
                    'sku' => $row[0] . $row[1],
                ], $productData);

                $imagesUrls = array_values(explode(',', $row[11]));
                $imagesData = [];
                foreach ($imagesUrls as $imageUrl) {
                    $imagesData = [...$imagesData, ['url' => $imageUrl]];
                }
                $metaData = [
                    'meta_desc' => $row[4] ?? '',
                    'meta_keywords' => $row[13] ?? '',
                    'meta_title' => $row[12] ?? '',
                ];

                $categoriesIds = $this->handleCategories(explode('>', $row[10]));
                $product->categories()->sync($categoriesIds);
                ProductController::saveOrUpdateMetaTags($metaData, $product);
                ProductController::insertImages($imagesData , $product);
            });
        }
    }
}
