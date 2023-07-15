<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        return Inertia::render('Blog');
    }
}
