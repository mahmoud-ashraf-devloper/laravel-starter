<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;

use App\Models\Product;
use App\Http\Requests\ProductRequest;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        $products= Product::all();
        return view('products.index', ['products'=>$products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('products.create');
    }

    /**++++++++++++
     * Store a newly created resource in storage.
     *
     * @param  ProductRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(ProductRequest $request)
    {
        $product = new Product;
		$product->title = $request->input('title');
		$product->description = $request->input('description');
		$product->is_featured = $request->input('is_featured');
		$product->is_visable = $request->input('is_visable');
		$product->short_desc = $request->input('short_desc');
		$product->meta_desc = $request->input('meta_desc');
		$product->meta_title = $request->input('meta_title');
		$product->price = $request->input('price');
		$product->sku = $request->input('sku');
		$product->in_stock = $request->input('in_stock');
		$product->slug = $request->input('slug');
        $product->save();

        return to_route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\View\View
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return view('products.show',['product'=>$product]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\View\View
     */
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return view('products.edit',['product'=>$product]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  ProductRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);
		$product->title = $request->input('title');
		$product->description = $request->input('description');
		$product->is_featured = $request->input('is_featured');
		$product->is_visable = $request->input('is_visable');
		$product->short_desc = $request->input('short_desc');
		$product->meta_desc = $request->input('meta_desc');
		$product->meta_title = $request->input('meta_title');
		$product->price = $request->input('price');
		$product->sku = $request->input('sku');
		$product->in_stock = $request->input('in_stock');
		$product->slug = $request->input('slug');
        $product->save();

        return to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return to_route('products.index');
    }
}
