<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index()
    {
        $orders = Order::where('payment_status', true)->get(['discount', 'total_price']);
        return Inertia::render('Dashboard/Home', [
            'data' => [
                'products' => Product::count(),
                'categories' => Category::count(),
                'orders' => [
                    'count' => Order::count(),
                    'total_payments' => round($orders->sum('total_price'), 2),
                    'discounts' => round($orders->sum('discount'), 2),
                ],
                'users' => User::count(),
            ]
        ]);
    }
    public function users()
    {
        $data = User::with(['profile', 'roles' => fn ($q) => $q->select('name')->pluck('name')])->paginate(15);
        $roles = Role::all(['name', 'id']);
        $permissions = Permission::all(['name', 'id']);
        return Inertia::render('Dashboard/Users', [
            'users' => $data,
            'permissions' => $permissions,
            'roles' => $roles,
        ]);
    }

    public function categories()
    {
        $data = Category::with('subCategories')->latest()->get();
        return Inertia::render('Dashboard/Categories', [
            'categories' => $data,
        ]);
    }

    public function orders()
    {
        $orders = Order::with(['products.images', 'products.categories'])->paginate(15);
        return Inertia::render('Dashboard/Orders', ['orders' => $orders]);
    }

    public function products()
    {
        $data = Product::with(['categories', 'images', 'meta'])->latest()->paginate(15);
        $categories = Category::latest()->get(['id', 'name']);
        return Inertia::render('Dashboard/Products', [
            'products' => $data,
            'categories' => $categories,
        ]);
    }

    public function payments()
    {
        return Inertia::render('Dashboard/Payments');
    }

    public function offlinePayments()
    {
        return Inertia::render('Dashboard/OfflinePayments');
    }
}
