<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    private $data = [
        'products' => [],
        'mainCategories' => []
    ];

    function __construct()
    {
        $this->data['mainCategories'] = Category::where('parent_id', null)->take(5)->get();
    }

    public function index()
    {
        $products = Product::with('images', 'categories.category')->paginate(20);
        $this->data['products'] = $products;
        return Inertia::render('Shop', $this->data);
    }


    public function categoryProducts(Category $category)
    {
        $products = $category->products()->with(['images', 'categories.category'])->paginate(20);
        $this->data['products'] = $products;
        return Inertia::render('Shop', $this->data);
    }
}