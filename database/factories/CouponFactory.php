<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coupon>
 */
class CouponFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'coupon' => 'test-coupon',
            'enabled' => true,
            'usage_number' => 10,
            'discount_precent' => 20,
            'expires_at' => Carbon::now()->addDays(3),
        ];
    }
}
