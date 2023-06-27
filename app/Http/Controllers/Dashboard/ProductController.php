<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function add(Request $request)
    {
        // dd($request->all());
        $data = Validator::make($request->all(), [
            "title" =>  'required|string',
            "price" => 'required|numeric',
            "weight" =>  'required|numeric',
            "desc" => 'required|string',
            "short_desc" =>  'required|string',
            "tax_status" =>  'required|string',
            "sku" =>  'required|string',
            "in_stock" =>  'required|boolean',
            "visible" =>  'required|boolean',
            "featured" => 'required|boolean',
            'categories.*.value' => 'required|exists:categories,id',
            "images.*" =>  'required|image|max:2048',
        ]);
        
        if ($data->fails()) {
            return response()->json(['success' => false, 'errors' => $data->errors()]);
        }
        
        $data = $data->validated();


        $images = $data['images'];
        $categories = $data['categories'];
        array_pop($data);
        array_pop($data);
        $product = Product::create($data);

        if (isset($images)) {
            $this->saveImages($images, $product);
            array_pop($data);
        }
        
        if (isset($categories)) {
            $this->syncCategories($categories, $product);
            array_pop($data);
        }

        $data = Product::with(['categories', 'images'])->latest()->paginate(15);

        return response()->json([
            'success' => true,
            'products' => $data,
        ]);
    }

    public function uploadImages(Request $request, Product $product)
    {
        $data = Validator::make($request->all(), [
            "images.*" =>  'required|image|max:2048',
        ]);

        if ($data->fails()) {
            return response()->json(['success' => false, 'errors' => $data->errors()]);
        }

        $data = $data->validated();

        if ($this->saveImages($data['images'], $product)) {
            $data = Product::with(['categories', 'images'])->latest()->paginate(15);

            return response()->json([
                'success' => true,
                'products' => $data,
                'product' => $product->load(['images', 'categories'])
            ]);
        }
    }

    public function saveImages($images, $product)
    {
        DB::transaction(function () use ($images, $product) {
            $imagesNames = [];

            foreach ($images as $image) {
                # moving images..
                $imageName = date('YmdHi') . $image->getClientOriginalName();
                $image->move(public_path('images/products'), $imageName);
                // http://127.0.0.1:8000/images/products/2.jpg

                array_push($imagesNames, ['url' => env('APP_URL') . '/images/products/' . $imageName, 'product_id' => $product->id]);
            }

            $product->images()->insert($imagesNames);
        });
        return true;
    }


    public function update(Request $request, Product $product)
    {

        $data = Validator::make($request->all(), [
            "title" =>  'string',
            "price" => 'numeric',
            "weight" =>  'numeric',
            "desc" => 'string',
            "short_desc" =>  'string',
            "tax_status" =>  'string',
            "sku" =>  'string',
            "in_stock" =>  'boolean',
            "visible" =>  'boolean',
            "featured" => 'boolean',
            'categories.*.value' => 'exists:categories,id',
            "images.*" =>  'image|max:2048',
        ]);

        
        if ($data->fails()) {
            return response()->json(['success' => false, 'errors' => $data->errors()]);
        }
        
        $data = $data->validated();



        if (isset($data['images'])) {
            $this->saveImages($data['images'], $product);
            array_pop($data);
        }
        
        if (isset($data['categories'])) {
            $this->syncCategories($data['categories'], $product);
            array_pop($data);
        }

        $product->update($data);

        $data = Product::with(['categories', 'images'])->latest()->paginate(15);

        return response()->json([
            'success' => true,
            'products' => $data,
            'product' => $product->load(['images', 'categories'])
        ]);
    }

    public function syncCategories($categories, $product) {
        $categoriesIds = [];
        foreach ($categories as $key => $value) {
            array_push($categoriesIds, $value['value']);
        }
        $product->categories()->sync($categoriesIds);
    }

    public function delete(Product $product)
    {
        $product->load(['images', 'categories']);

        $imagesUrls = [];

        foreach ($product->images as $image) {
            // explode('images/', $image->url)[1];
            unlink(public_path('/images/' . explode('images/', $image->url)[1]));
        }

        $product->delete();
        $data = Product::with(['categories', 'images'])->latest()->paginate(15);

        return response()->json([
            'success' => true,
            'products' => $data,
        ]);
    }

    public function deleteImage(Product $product, ProductImage $image)
    {
        if ($product->id != $image->product_id) {
            return;
        }
        unlink(public_path('/images/' . explode('images/', $image->url)[1]));
        $image->delete();

        $data = Product::with(['categories', 'images'])->latest()->paginate(15);

        return response()->json([
            'success' => true,
            'products' => $data,
            'product' => $product->load(['images', 'categories'])
        ]);
    }
}
