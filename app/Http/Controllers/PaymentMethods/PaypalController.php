<?php

namespace App\Http\Controllers\PaymentMethods;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class PaypalController extends Controller
{
    public function creaeteOrder(Order $order)
    {
        $order->load(['products']);
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        $items = [];
        foreach ($order->products as $product) {
            array_push($items, [
                "name" => $product->title,
                "quantity" => $product->pivot->quantity,
                "unit_amount" => $product->price,
                "description" => $product->desc,
                "sku" => $product->sku,
            ]);
        }

        array_push($items, [
            "name"=> "Shipping Cost",
            "price"=> $order->shipping_cost,
            "currency"=> "USD",
            "quantity"=> "1",
        ]);

        if ($order->coupon_id) {
            $items = [
                ...$items,
                [
                    "name"=> "Discount",
                    "price"=>  -$order->discount,
                    "currency"=> "USD",
                    "quantity"=> "1"
                ],
            ];
        }


        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('payment.paypal.success'),
                "cancel_url" => route('payment.paypal.cancel'),
            ],
            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $order->total_price + $order->shipping_cost - $order->discount, // total price of the order
                        "items" => $items
                    ]
                ]
            ]
        ]);

        if (isset($response['id']) && $response['id'] != null) {

            // redirect to approve href
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    $order->transaction_id = $response['id'];
                    $order->payment_method = 'paypal';
                    $order->save();
                    return redirect()->away($links['href']);
                }
            }
        }

        Session::flash('error', 'Something went Wrong');

        return redirect()
            ->route('user.orders');
    }

    public function cancel()
    {
        Session::flash('error', 'Order Canceled');

        return redirect()
            ->route('user.orders');
    }

    public function success(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();

        $response = $provider->capturePaymentOrder($request['token']);


        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
            $order = Order::where('transaction_id', $response['id'])->first();
            $order->payment_status = true;
            $order->payment_method = 'paypal';
            $order->save();
            Session::flash('message', 'Order Completed Successfully');

            return redirect()
                ->route('user.orders');
        } else {
            Session::flash('error', 'Something went Wrong');

            return redirect()
                ->route('user.orders');
        }
    }
}
