<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        $billing_address_validations = [
            "billing_first_name" => "required|string",
            "billing_last_name" => "required|string",
            "billing_company_named" => "string",
            "billing_email" => "required|string",
            "billing_address_1" => "required|string",
            "billing_address_2" => "string",
            "billing_appartment_suit_unit" => "string",
            "billing_country" => "required|string",
            "billing_state" => "required|string",
            "billing_city" => "string",
            "billing_zip_code" => "required|string",
            "billing_phone" => "required|string",

        ];
        $shipping_address_validations = [
            "shipping_first_name" => "required|string",
            "shipping_last_name" => "required|string",
            "shipping_company_name" => "string",
            "shipping_email" => "required|string",
            "shipping_address_1" => "required|string",
            "shipping_address_2" => "string",
            "shipping_appartment_suit_unit" => "string",
            "shipping_country" => "required|string",
            "shipping_state" => "required|string",
            "shipping_city" => "string",
            "shipping_zip_code" => "required|string",
            "shipping_phone" => "required|string",
            "coupon" => 'json'
        ];

        $validations = $request->billing_address_same_as_shipping_address ? [...$shipping_address_validations] : [...$billing_address_validations, ...$shipping_address_validations];


        $validator = Validator::make($request->all(), $validations)->validate();



        $user = auth()->user()->load('cart.items.product');

        $shipping_address = $user->addresses()->create([
            'first_name' => $validator['shipping_first_name'],
            'last_name' => $validator['shipping_last_name'],
            'company' => $validator['shipping_company_name'],
            'email' => $validator['shipping_email'],
            'phone' => $validator['shipping_phone'],
            'country_id' => $validator['shipping_country'],
            'city' => $validator['shipping_city'],
            'state_id' => $validator['shipping_state'],
            'address_1' => $validator['shipping_address_1'],
            'address_2' => $validator['shipping_address_2'],
            'zip_code' => $validator['shipping_zip_code'],
            "appartment_suit_unit" => $validator['shipping_appartment_suit_unit'],
        ]);

        if (!$request->billing_address_same_as_shipping_address) {
            $billing_address = $user->addresses()->create([
                'first_name' => $validator['billing_first_name'],
                'last_name' => $validator['billing_last_name'],
                'company' => $validator['billing_company_named'],
                'email' => $validator['billing_email'],
                'phone' => $validator['billing_phone'],
                'country_id' => $validator['billing_country'],
                'city' => $validator['billing_city'],
                'state_id' => $validator['billing_state'],
                'address_1' => $validator['billing_address_1'],
                'address_2' => $validator['billing_address_2'],
                'zip_code' => $validator['billing_zip_code'],
                "appartment_suit_unit" => $validator['billing_appartment_suit_unit'],
            ]);
        }

        $total_price = 0;
        $shipping_cost = 0;


        //  calc total price
        foreach ($user->cart->items as $item) {
            $total_price += $item->product->price * $item->qty;
        }

        $orderData = [
            'user_id' => $user->id,

            'shipping_address_id' => $shipping_address->id,
            'billing_address_id' => $request->billing_address_same_as_shipping_address ? $shipping_address->id : $billing_address->id,
        ];

        // has a coupon
        if (isset($validator['coupon'])) {
            // get the discount money
            $coupon = json_decode($validator['coupon']);
            if(isset($coupon->discount_precent) && isset($coupon->limit)){
                $discountAmmount = $total_price * $coupon->discount_precent / 100;
                
                if ($coupon->limit < $discountAmmount) {
                    $discountAmmount = $coupon->limit;
                }
                
                $orderData = [
                    ...$orderData,
                    'discount' => $discountAmmount,
                    'coupon_id' => $coupon->coupon_id,
                ];
            }
        }
        
        // calc shipping cost
        if ($total_price <= 24) {
            $shipping_cost = 15;
        } else if ($total_price <= 149) {
            $shipping_cost = 21;
        } else if ($total_price <= 299) {
            $shipping_cost = 26;
        } else if ($total_price <= 499) {
            $shipping_cost = 31;
        } else if ($total_price <= 599) {
            $shipping_cost = 35;
        } else {
            $shipping_cost = 35;
        }
        
        // adding shipping cost
        
        
        // creating order with its addresses
        
        $orderData = [
            ...$orderData,
            'total_price' => $total_price,
            'shipping_cost' => $shipping_cost,
        ];
        
        $order = Order::create($orderData);

        // attaching products to order
        foreach ($user->cart->items as $item) {
            $order->products()->attach($item->product->id, ['quantity' => $item->qty]);
        }

        $user->cart->delete();
        return response()->json([
            "success" => true,
            "message" => 'order created Successfully you will be redirected in 2 seconds',
            "data" => $order,
        ]);
    }
}
