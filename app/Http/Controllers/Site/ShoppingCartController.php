<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShoppingCartController extends Controller
{
    public function updateCart()
    {
        // dd(['id' => session()->get('cart_id'), 'user_id' => auth()->id()]);
        return Cart::where(['user_id' => auth()->id()])->with(['items.product.images'])->first();
    }

    public function getAll()
    {
        return response()->json(['success' => true, 'data' => $this->updateCart()]);
    }


    public function add(Request $request)
    {
        $cart = [];

        if (!$request->session()->get('cart_id') && !auth()->check()) {
            $cart = Cart::create([]);
            session(['cart_id' => $cart->id]);
        }

        // he might has a cart
        if (auth()->check()) {
            $hasCart = Cart::where('user_id', auth()->id())->first();

            if ($hasCart) {
                $cart = $hasCart;
            } else {
                $cart = Cart::create(['user_id' => auth()->id()]);
                session(['cart_id' => $cart->id]);
            }
        }

        if (!auth()->check()) {
            $hasCart = Cart::find(session()->get('cart_id'));

            if ($hasCart) {
                $cart = $hasCart->first();
            } else {
                $cart = Cart::create([]);
                session(['cart_id' => $cart->id]);
            }

            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
            ]);
            return response()->json(['success' => true, 'data' => $this->updateCart()]);
        } else {
            // if product exists just increase the qty
            $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->session()->get('cart_id')])->first();
            if ($product) {
                $product->update(['qty', ++$product->qty]);
                return response()->json(['success' => true, 'data' => $this->updateCart()]);
            }

            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $request->product_id,
            ]);

            return response()->json(['success' => true, 'data' => $this->updateCart()]);
        }
    }

    public function remove(Request $request)
    {
        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->session()->get('cart_id')])->first();
        if ($product) {
            $product->delete();
            return response()->json(['success' => true, 'data' => $this->updateCart()]);
        }
    }

    public function increase(Request $request)
    {

        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->session()->get('cart_id')])->first();


        if ($product) {
            $product->update(['qty', ++$product->qty]);
            return response()->json(['success' => true, 'data' => $this->updateCart()]);
        }
    }
    public function decrease(Request $request)
    {
        // if product exists just increase the qty
        $product = CartItem::where(['product_id' => $request->product_id, 'cart_id' => $request->session()->get('cart_id')])->first();
        if ($product && $product->qty > 1) {
            $product->update(['qty', --$product->qty]);
            return response()->json(['success' => true, 'data' => $this->updateCart()]);
        }
    }
}
