<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Site\ProductController;
use App\Http\Controllers\Dashboard\ProfileController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\Site\BlogController;
use App\Http\Controllers\Site\ShopController;
use App\Http\Controllers\Site\ShoppingCartController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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



Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Route::get('/', function () {
//     return view('site.views.home');
// })->name('home');

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


// products routes
Route::get('/products/{product}', [ProductController::class, 'show'])->name('product');



// shopping cart routes
Route::group([
    'as' => 'shopping.cart.',
    'prefix' => 'carts',
], function(){
    Route::post('/add', [ShoppingCartController::class, 'add'])->name('add');
    Route::get('/', [ShoppingCartController::class, 'getAll'])->name('all');
    Route::post('/remove', [ShoppingCartController::class, 'remove'])->name('remove');
    Route::post('/increase', [ShoppingCartController::class, 'increase'])->name('increase');
    Route::post('/decrease', [ShoppingCartController::class, 'decrease'])->name('decrease');
});

// shop routes
Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/shop/{category}', [ShopController::class, 'categoryProducts'])->name('category.products');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

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
