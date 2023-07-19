<?php

namespace App\Http\Controllers\Currency;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{
    public function changeCurrency(Request $request)
    {
        $request->validate([
            'currency' => 'required|string|size:3'
        ]);

        session()->put('currency', $request->currency);

        return redirect()->back();
    }
}
