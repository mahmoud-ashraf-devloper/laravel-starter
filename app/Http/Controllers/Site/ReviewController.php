<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Review;
use Carbon\Carbon;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\each;

class ReviewController extends Controller
{


    public function addReview(Request $request)
    {

        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'product_id' => 'required|exists:products,id',
            'review' => 'required|string',
            'rate' => 'required|int|min:1|max:5',
        ]);

        $review = Review::create([
            'user_id' => auth()->id(),
            'product_id' => $validated['product_id'],
            'review' => $validated['review'],
            'stars' => $validated['rate'],
        ]);

        $product = Product::find($validated['product_id']);
        $product->reviews()->attach($review);
    }


    public function allReviews(Product $product)
    {
        return response()->json($product->reviews->load('user'));
    }
}
