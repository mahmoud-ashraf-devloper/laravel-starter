<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    use HasFactory;


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'expires_at' => 'datetime',
    ];


    protected $fillable = [
        'coupon',
        'usage_number',
        'limit',
        'enabled',
        'discount_precent',
        'expires_at',
    ];
}
