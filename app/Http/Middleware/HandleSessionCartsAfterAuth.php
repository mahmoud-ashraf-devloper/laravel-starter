<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\CartItem;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleSessionCartsAfterAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && session()->get('cart_id')) {

            $hasOldCart = Cart::where('user_id', auth()->id())->first();

            $sessionCartNewCart = Cart::where('id', session()->get('cart_id'))->first();
            if ($hasOldCart) {
                $sessionCartNewCart->load('items.product');
                $sessionCartNewCart->items->each(function ($item) use ($hasOldCart) {
                    $product = CartItem::where(['product_id' => $item->product->id, 'cart_id' => $hasOldCart->id])->first();
                    if($product){
                        $product->update(['qty' => ++$product->qty]);
                    }else{
                        CartItem::create([
                            'product_id' => $item->product->id,
                            'qty' => $item->qty,
                            'cart_id' => $hasOldCart->id,
                        ]);
                    }
                });
                $sessionCartNewCart->delete();
                session()->forget('cart_id');
                $cart = $hasOldCart->load('items.product.images');
            } else {
                $sessionCartNewCart = Cart::where('id', session()->get('cart_id'))->first();
                if ($hasOldCart) {
                    $sessionCartNewCart->update(['user_id' => auth()->id()]);
                    session()->forget('cart_id');
                }
            }
        }
        return $next($request);
    }
}
