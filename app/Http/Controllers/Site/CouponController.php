<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class CouponController extends Controller
{
    public function applyCoupon(Request $request)
    {
        $coupon = Coupon::where('coupon', $request->coupon)->firstOrFail();
        if (!$coupon->enabled) {  // make sure it's enabled
            dd($coupon->enabled);
            return response()->json(['success' => false, 'message' => 'coupon is invalid']);
        }

        if (Carbon::now()->gt($coupon->expires_at)) {  // make sure it's not expired
            return response()->json(['success' => false, 'message' => 'coupon is expired']);
        }

        if (!$coupon->usage_number > 0) { // making sure the coupon is still avilable to be used
            return response()->json(['success' => false, 'message' => 'coupon reached the maximum number of usage']);
        }


        // I came to conclution where i have to store this coupon data in a cookie in order to be accessable by both server an front
        return response()->json(['success' => true,'coupon' => [
            'coupon_id' => $coupon->id,
            'coupon' => $coupon->coupon,
            'usage_number' => $coupon->usage_number,
            'limit' => $coupon->limit,
            'enabled' => $coupon->enabled,
            'discount_precent' => $coupon->discount_precent,
            'expires_at' => $coupon->expires_at,
        ]]);
    }
}
