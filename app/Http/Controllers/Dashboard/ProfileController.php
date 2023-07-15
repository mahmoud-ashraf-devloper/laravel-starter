<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('Profile');
    }

    public function upload(Request $request)
    {
        if ($request->files->has('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images/profiles'), $filename);
            $data['image'] = $filename;

            $profile = Profile::where('user_id', auth()->id())->first();
            if ($profile) {
                if($profile->image_url){
                    unlink(public_path('images/profiles/').$profile->image_url);
                }
                $profile->update(['image_url' => $filename]);
            } else {
                $profile = Profile::create(['user_id' => auth()->id()]);
            }

            return $profile;
        }
    }


    public function orders()
    {
        $orders = Order::where('user_id' , auth()->id())->get()->each(function($order){
            $order->load(['products.images', 'products.categories']);
        });

        return Inertia::render('Orders', ['orders' =>  $orders ]);
    }
}
