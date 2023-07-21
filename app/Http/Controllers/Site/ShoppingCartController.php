<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    public function getAll()
    {
        $cart = [];
        if (auth()->check()) {
            $hasCart = Cart::where('user_id', auth()->id())->first();
            if ($hasCart) {
                $cart = $hasCart->load('items.product.images');
            }
        } else {
            $hasCart = Cart::where('id', session()->get('cart_id'))->first();
            if ($hasCart) {
                $cart = $hasCart->load('items.product.images');
            }
        }
        return response()->json(['success' => true, 'data' => $cart]);
    }


    public function add(Request $request)
    {
        try {
            DB::transaction(function () use ($request) {
                $cart = [];
                if (auth()->check()) {
                    $hasCart = Cart::where('user_id', auth()->id())->first();
                    if ($hasCart) {
                        $cart = $hasCart;
                    } else {
                        $cart = Cart::create(['user_id' => auth()->id()]);
                    }
                }

                // if not auth
                if (!auth()->check()) {
                    if (!session()->get('cart_id')) {
                        $cart = Cart::create([]);
                        session()->put('cart_id', $cart->id);
                    } else {
                        $hasCart = Cart::where('id', session()->get('cart_id'))->first();
                        if ($hasCart) {
                            $cart = $hasCart;
                        }
                    }
                }

                $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $cart->id])->first();
                if ($product) {
                    $product->update(['qty', ++$product->qty]);
                    return response()->json(['success' => true, 'data' => $this->refreshCartItems($cart->id)]);
                }

                CartItem::create([
                    'cart_id' => $cart->id,
                    'product_id' => $request->product_id,
                ]);

                return response()->json(['success' => true, 'data' => $this->refreshCartItems($cart->id)]);
            });
        } catch (\Throwable $th) {
            return response()->json(['success' => false, 'data' => []]);
        }
    }

    public function remove(Request $request)
    {
        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->cart_id])->first();
        if ($product) {
            $product->delete();
            return response()->json(['success' => true, 'data' => $this->refreshCartItems($request->cart_id)]);
        }
    }


    public function refreshCartItems($cart_id)
    {
        return Cart::find($cart_id)->load(['items.product.images']);
    }

    public function increase(Request $request)
    {
        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->cart_id])->first();
        if ($product) {
            $product->update(['qty', ++$product->qty]);
            return response()->json(['success' => true, 'data' => $this->refreshCartItems($request->cart_id)]);
        }
    }
    public function decrease(Request $request)
    {
        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->cart_id])->first();
        if ($product && $product->qty > 1) {
            $product->update(['qty', --$product->qty]);
            return response()->json(['success' => true, 'data' => $this->refreshCartItems($request->cart_id)]);
        }
    }
}
