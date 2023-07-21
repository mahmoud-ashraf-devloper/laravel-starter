<?php

namespace App\Http\Controllers\Site;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        foreach ($product->categories as $category) {
            $category = Category::where('id', $category->id)->with(['products' => function ($q) {
                $q->with(['images', 'categories'])->take(5);
            }])->first();
            $products = $category->products->toArray();
            array_push($relatedProducts, ...$products);
        }

        return Inertia::render('Product', ['product' => $product, 'related' => $relatedProducts]);
    }


    public function search(Request $request)
    {
        $products = Product::select('*')
            ->when($request->has('to') && $request->has('from'), function ($q) use ($request) {
                $q->whereBetween('price', [Helper::getPriceInInt((int)$request->input('from')), Helper::getPriceInInt((int)$request->input('to'))]);
            })

            ->when($request->has('title'),  function ($q) use ($request) {
                $q->where('title', 'LIKE', '%' . $request->input('title') . '%');
            })

            ->when($request->has('categories'),  function ($q) use ($request) {
                foreach ($request->input('categories') as $category) {
                    $q->whereRelation('categories', 'id', '=', $category);
                }
            })
            ->with(['categories', 'images'])
            ->withAvg('reviews as reviews_avg_stars', 'stars')
            ->paginate(20);

        $data = json_decode(json_encode($products), true);
        $products = $data;

        if ($request->has('rating')) {
            $products = [...$data];
            $products['data']  = [];
            foreach ($data['data']  as $key => $product) {
                if ($request->input('rating') == floor($product['reviews_avg_stars'])) {
                    array_push($products['data'], $product);
                }
            }
        }

        return response()->json(['success' => true, 'data' =>  $products]);
    }
}
