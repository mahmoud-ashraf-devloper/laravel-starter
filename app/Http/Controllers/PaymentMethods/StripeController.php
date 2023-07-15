<?php

namespace App\Http\Controllers\PaymentMethods;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StripeController extends Controller
{
    
    public function createCoupon($amount_off)
    {
        try {
            // Connect to your stripe account

            $stripe_account = Config('constants.Stripe_account');
            $stripe_secret = env('STRIPE_SECRET');

            $stripe = new \Stripe\StripeClient(
                $stripe_secret
            );
            // create coupon
            $coupon = $stripe->coupons->create([
                'amount_off' =>  $amount_off * 100,
                'duration' => 'once',
                'currency' => 'US'
            ]);

            return $coupon;
        } catch (\Exception $e) {
            Log::error(
                'Failed to create coupon',
                ['message' => $e->getMessage(), 'trace' => $e->getTraceAsString()]
            );
            return false;
        }
    }

    public static function payment(Order $order)
    {
        $order->load(['products']);

        $items = [];
        foreach ($order->products as $product) {
            array_push($items, [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->title,
                        'description' => $product->desc,
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => $product->pivot->quantity,
            ]);
        }

        // adding shipping fee
        array_push($items, [
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => 'Shipping Cost',
                    'description' => 'Products Shipping Cost',
                ],
                'unit_amount' => $order->shipping_cost * 100,
            ],
            'quantity' => 1,
        ]);

        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

        $checkout = [
            'success_url' =>  route('user.orders', ['message' => 'order created successfully']),
            'cancel_url' =>   route('user.orders', ['message' => 'something went wrong']),
            'line_items' => $items,
            'mode' => 'payment',
        ];

        if ($order->coupon_id) {
            // create coupon
            $coupon = $stripe->coupons->create([
                'amount_off' =>  $order->discount * 100,
                'duration' => 'once',
                'currency' => 'USD'
            ]);

            $checkout = [
                ...$checkout,
                'discounts' => [[
                    'coupon' => $coupon->id,
                ]]
            ];
        }
        $stripe = $stripe->checkout->sessions->create($checkout);
        $order->payment_method = 'stripe';
        $order->transaction_id = $stripe->id;
        $order->save();

        return redirect($stripe->url);
    }



    public function webhook()
    {
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');
        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            return response('un expected value', 400);
            exit();
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            return response('in valid signature', 400);
            exit();
        }

        if ($event->type == 'checkout.session.completed') {

            $order = Order::where('transaction_id', $event->data->object->id)->first();
            $order->payment_status = true;


            $order->save();
            return response($order);
        }
    }
}
