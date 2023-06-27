<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MetaData>
 */
class MetaDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'meta_desc' => 'meta_desc',
            'meta_title' => 'meta_title',
            'meta_keywords' => 'meta_keywords',
        ];
    }
}
