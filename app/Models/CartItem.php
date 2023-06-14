<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'qty',
        'product_id',
        'cart_id'
    ];


    public function product() {
        return $this->belongsTo(Product::class);
    }
}
