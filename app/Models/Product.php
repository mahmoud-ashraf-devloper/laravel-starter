<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Cviebrock\EloquentSluggable\Sluggable;


class Product extends Model
{
    use HasFactory, Sluggable;
    protected $fillable = [
        'title',
        'price',
        'weight',
        'desc',
        'short_desc',
        'meta_id',
        'tax_status',
        'sku',
        'in_stock',
        'visible',
        'featured',
        'images',
        'slug',
    ];
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }



    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function meta()
    {
        return $this->belongsTo(MetaData::class, 'meta_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_products');
    }


    public function carts()
    {
        return $this->belongsToMany(Cart::class);
    }

    public function reviews()
    {
        return $this->belongsToMany(Review::class, 'product_reviews');
    }



}
