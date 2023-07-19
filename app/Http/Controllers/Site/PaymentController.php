<?php

namespace App\Http\Controllers\Site;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Order;

use Illuminate\Http\Request;

use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $order = Order::where('id', $request->order)->firstOrfail();
        // making sure that u pay only for ur orders
        if ($order->user_id != auth()->id() || $order->payment_status) {
            abort(404);
        }

        $order->load(['products.images', 'products.categories']);

        return Inertia::render('Payment', [
            'order' => $order
        ]);
    }
}
