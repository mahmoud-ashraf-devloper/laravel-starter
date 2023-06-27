<?php

namespace App\Traits;
use App\Models\Cart;
trait PointShoppingCartToUserTrait
{
    public static function PointShoppingCartToUser()
    {
         // move the cart items to the logged in user
         if(session()->get('cart_id') && auth()->check()){
            $cart = Cart::find(session()->get('cart_id'))->where(['user_id' => null])->first();
            if($cart){
                $cart->first()->update(['user_id' => auth()->id()]);
                session()->forget('cart_id');
            }
        }
    }
}
