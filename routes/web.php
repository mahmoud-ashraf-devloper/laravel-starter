<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\ProductController;
use App\Http\Controllers\Dashboard\ProfileController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\Site\BlogController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

$products = [
    [
        "id" => '1232asccas523sc',
        "numberOfUnits" => 1,
        "title" => "Product Title",
        "price" => 202,
        "images" => [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',
            'http://127.0.0.1:8000/images/products/4.jpg',

        ]
    ],
    [
        "id" => '1232casca523sc',
        "numberOfUnits" => 1,
        "title" => "Product Title",
        "price" => 202,
        "images" => [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',
            'http://127.0.0.1:8000/images/products/4.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',

        ]
    ],
    [
        "id" => '1232saca523sc',
        "numberOfUnits" => 1,
        "title" => "Product Title",
        "price" => 202,
        "images" => [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',
            'http://127.0.0.1:8000/images/products/4.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',

        ]
    ],
    [
        "id" => '1232sasac523sc',
        "numberOfUnits" => 1,
        "title" => "Product Title",
        "price" => 202,
        "images" => [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',
            'http://127.0.0.1:8000/images/products/4.jpg',

        ]
    ],
    [
        "id" => '123252asc',
        "numberOfUnits" => 1,
        "title" => "Product Title",
        "price" => 202,
        "images" => [
            'http://127.0.0.1:8000/images/products/1.jpg',
            'http://127.0.0.1:8000/images/products/2.jpg',
            'http://127.0.0.1:8000/images/products/3.jpg',
            'http://127.0.0.1:8000/images/products/4.jpg',

        ]
    ],
];

Route::get('/', function () {
    return view('site.views.home');
})->name('home');

Route::get('/cart', function () {
    return view('site.views.cart');
})->name('cart');


Route::get('/blog', [BlogController::class, 'index'])->name('blog');
Route::get('/checkout', function () {
    return view('site.views.checkout');
})->name('checkout');
Route::get('/payment', function () {
    return view('site.views.payment');
})->name('payment');
Route::get('/shop', function () use ($products) {

    return view('site.views.shop', ['products' => $products]);
})->name('shop');
Route::get('/shop/product', function () use ($products){
    
    
    return view('site.views.product', ['products' => $products, 'product' => $products[1]]);
})->name('product');

Route::get('/dashboard', function () {
    return view('dashboard.views.home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// dashboard 
Route::group([
    'middleware' => ['auth', 'verified'],
    'prefix' => 'user',
    'as' => 'user.'
], function () {
    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('orders', [ProfileController::class, 'orders'])->name('orders');
});

// dashboard 
Route::group([
    'middleware' => ['auth', 'verified'],
    'prefix' => 'dashboard',
    'as' => 'dashboard.'
], function () {
    Route::get('products', [ProductController::class, 'index'])->name('products');
    Route::get('categories', [CategoryController::class, 'index'])->name('categories');


    // Users
    Route::get('users', [UserController::class, 'index'])->name('users');
    Route::post('users/sync/permissions', [UserController::class, 'givePermissions'])->name('users.sync.permissions');
    
});


require __DIR__ . '/auth.php';
