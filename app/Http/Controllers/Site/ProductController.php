<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\View\View
     */
    public function show(Product $product)
    {
        $product = $product->load(['images', 'categories']);
        $relatedProducts = [];
        foreach($product->categories as $category){
            $products = $category->products->load(['images','categories'])->take(5)->toArray();
            
            array_push($relatedProducts, ...$products);
        }

        return Inertia::render('Product', ['product' => $product, 'related' => $relatedProducts]);
    }


}
