<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductReviewTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {  
        $numOfReviews = 30_000;
        for ($i=0; $i <= $numOfReviews ; $i++) { 
           \DB::table('product_reviews')->insert([
            'product_id' => rand(1, 10_000),
            'review_id' => rand(1, 30_000),
           ]);
        }
    }
}