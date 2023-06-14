<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words(6, true),
            'price' => $this->faker->numberBetween(10_0, 100_00),
            'weight' => $this->faker->numberBetween(10, 20),
            'desc' => $this->faker->sentences(4, true),
            'short_desc' => $this->faker->sentence(6),
            'meta_desc' => "meta desc",
            'meta_title' => "meta title",
            'meta_keywords' => "meta keywords",
            'tax_status' => false,
            'sku' => $this->faker->uuid(),
            'in_stock' => $this->faker->numberBetween(0,1),
            'visible' => $this->faker->numberBetween(0,1),
            'featured' => $this->faker->numberBetween(0,1),
        ];
    }
}
