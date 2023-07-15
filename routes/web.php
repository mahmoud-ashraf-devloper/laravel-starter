<?php

use App\Http\Controllers\Dashboard\CategoryController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\ProductController as DashboardProductController;
use App\Http\Controllers\Site\ProductController;
use App\Http\Controllers\Dashboard\ProfileController;
use App\Http\Controllers\Dashboard\UserController;
use App\Http\Controllers\Site\BlogController;
use App\Http\Controllers\Site\CartController;
use App\Http\Controllers\Site\CheckoutController;
use App\Http\Controllers\Site\CouponController;
use App\Http\Controllers\Site\DropDownCountryCityStateController;
use App\Http\Controllers\Site\OrderController;
use App\Http\Controllers\Site\PaymentController;
use App\Http\Controllers\Site\ReviewController;
use App\Http\Controllers\Site\ShopController;
use App\Http\Controllers\Site\ShoppingCartController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\PaymentMethods\PaypalController;
use App\Http\Controllers\PaymentMethods\StripeController;

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

require __DIR__ . '/auth.php';




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


// checkout routes 
Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout');

// payment
Route::get('/payment', [PaymentController::class, 'index'])->name('payment')->middleware('auth');

// cart Route
Route::get('/cart', [CartController::class, 'index'])->name('cart')->middleware('auth');

// products routes
Route::get('/products/{product}', [ProductController::class, 'show'])->name('product');

// User Profile
Route::group([
    'prefix' => 'user',
    'as' => 'user.',
], function () {
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::post('/upload', [ProfileController::class, 'upload'])->name('upload.profile.picture');
});

// shopping cart routes
Route::group([
    'as' => 'shopping.cart.',
    'prefix' => 'carts',
    'middleware' => ['handdleSessionCartsAfterAuthentication']
], function () {
    Route::post('/add', [ShoppingCartController::class, 'add'])->name('add');
    Route::get('/', [ShoppingCartController::class, 'getAll'])->name('all');
    Route::post('/remove', [ShoppingCartController::class, 'remove'])->name('remove');
    Route::post('/increase', [ShoppingCartController::class, 'increase'])->name('increase');
    Route::post('/decrease', [ShoppingCartController::class, 'decrease'])->name('decrease');
});

// shopping cart routes
Route::group([
    'as' => 'reviews.',
    'prefix' => 'reviews',
], function () {
    Route::post('/add', [ReviewController::class, 'addReview'])->name('add')->middleware('auth');
    Route::get('/{product}', [ReviewController::class, 'allReviews'])->name('all');
});

// shop routes
Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/shop/{category}', [ShopController::class, 'categoryProducts'])->name('category.products');




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
    'middleware' => ['auth', 'verified', 'role:Admin|Editor'],
    'prefix' => 'dashboard',
    'as' => 'dashboard'
], function () {
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('/products', [DashboardController::class, 'products'])->name('.products');
    // Route::get('/categories', [DashboardController::class, 'categories'])->name('.categories');
    Route::get('/payments', [DashboardController::class, 'payments'])->name('.payments');
    Route::get('/payments/offline', [DashboardController::class, 'offlinePayments'])->name('.offlinePayments');
    Route::get('/users', [DashboardController::class, 'users'])->name('.users');

    // Users
    Route::post('users/sync/permissions', [UserController::class, 'givePermissions'])->name('.users.sync.permissions');
});

// dashboard Routes




// admin exclosive routes
Route::group([
    'middleware' => ['auth', 'role:Admin'],
    'as' => 'admin.'
], function () {
    Route::post('products/add', [DashboardProductController::class, 'add'])->name('products.add');
    Route::post('products/{product}/update', [DashboardProductController::class, 'update'])->name('products.update');
    Route::get('products/add-new-product', [DashboardProductController::class, 'index'])->name('products.add.new');
    Route::post('products/{product}/delete', [DashboardProductController::class, 'delete'])->name('products.delete');
    Route::post('products/{product}/image/{image}/delete', [DashboardProductController::class, 'deleteImage'])->name('products.image.delete');
    Route::post('products/{product}/images/upload', [DashboardProductController::class, 'uploadImages'])->name('products.images.upload');



    // categories
    Route::get('/categories', [DashboardController::class, 'categories'])->name('categories');
    Route::post('/categories/add', [CategoryController::class, 'add'])->name('categories.add');
    Route::post('/categories/{category}/delete', [CategoryController::class, 'delete'])->name('categories.delete');
    Route::post('/categories/{category}/update', [CategoryController::class, 'update'])->name('categories.update');

    // orders
    Route::get('/orders', [DashboardController::class, 'orders'])->name('orders');
});



// authenticated users 

Route::group([
    'middleware' => ['auth'],
    'as' => 'user.'
], function () {



    Route::post('coupon/apply', [CouponController::class, 'applyCoupon'])->name('coupon.apply');


    // country state city dropdown
    Route::get('countries', [DropDownCountryCityStateController::class, 'getCountries'])->name('get-countries');
    Route::get('country/{country}/get-states', [DropDownCountryCityStateController::class, 'getStates'])->name('get-states');
    Route::get('state/{state}/get-cities', [DropDownCountryCityStateController::class, 'getCities'])->name('get-cities');


    // checkout 
    Route::post('order', [OrderController::class, 'create'])->name('order.create');
});


Route::group([
    'middleware' => ['auth'],
    'as' => 'payment.'
], function () {


    // paypal payments
    Route::get('payment-paypal/{order}', [PaypalController::class, 'creaeteOrder'])->name('paypal.create.order');
    Route::get('cancel-paypal', [PaypalController::class, 'cancel'])->name('paypal.cancel');
    Route::get('payment/success', [PaypalController::class, 'success'])->name('paypal.success');
    
    
    Route::get('payment/status', function () {
        dd('payment_status');
    })->name('status');
    

    // stripe payments and the webhook route is in api.php
    Route::get('payment-stripe/{order}', [StripeController::class, 'payment'])->name('stripe');
});
