<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index()
    {
        return view('site.views.profile');
    }
    public function orders()
    {
        return view('site.views.orders');
    }
}
