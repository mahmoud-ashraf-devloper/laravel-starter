<?php

namespace App\Imports;

use App\Models\Category;
use App\Models\InvalidProduct;
use App\Models\Product;
use Illuminate\Bus\Batch;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Row;
use Illuminate\Contracts\Queue\ShouldQueue;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Validators\Failure;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\RemembersRowNumber;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Maatwebsite\Excel\Concerns\ToCollection;
use Throwable;

class ProductImport implements ToCollection, WithHeadingRow,  WithChunkReading,  ShouldQueue
{
    use Importable, RemembersRowNumber;

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



    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $productData = [
                'title' => $row['name'],
                'desc' => $row['description'],
                'images' => $row['images'],
                'price' => $row['price'] ?? 0,
                'weight' => $row['weight'] ?? 0,
                'tax_status' => $row['tax_status'] === 'taxable' ? true : false,
                'in_stock' => $row['in_stock'] === 1 ? true : false,
                'sku' => $row['id'] .  $row['sku'],
                'short_desc' => $row['short_description'] ?? '',
                'meta_desc' => $row['meta_description'] ?? '',
                'meta_keywords' => $row['meta_keywords'] ?? '',
                'meta_title' => $row['meta_title'] ?? '',
            ];

            $categoriesIds = $this->handleCategories(explode('>', $row['categories']));


            try {
                $product = Product::updateOrCreate([
                    'sku' => $row['id'] . $row['sku'],
                ], $productData);
                $product->categories()->sync($categoriesIds);
            } catch (\Throwable $th) {

                //  InvalidProduct::updateOrCreate(['sku' =>  $productData['sku']],[
                //     'title' =>  $productData['title'],
                //     'sku' =>  $productData['sku'],
                //     'row' => $this->getRowNumber() ?? 0,
                //     'message' => $th->getMessage(),
                // ]);
            }
        }
    }




    public function chunkSize(): int
    {
        return 100;
    }
}

