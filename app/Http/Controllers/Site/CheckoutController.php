<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        if(!auth()->check()){
            Session::flash('message', 'Loging To Proceed To Checkout');
            return redirect()->route('login')->with('message', 'Loging To Proceed To Checkout');
        }
        return Inertia::render('Checkout');
    }

    
}
