<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_id',
        'payment_method',
        'payment_status',
        'shipping_cost',
        'discount',
        'total_price',
        'coupon_id',
        'user_id',
        'shipping_address_id',
        'billing_address_id',
        'tracking_number_id',
    ];

    public function getCreatedAtAttribute()
    {
        
        return Carbon::make($this->attributes['created_at'])->diffForHumans();
    }
    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_product')->withPivot(['quantity']);
    }


    public function trackingNumber()
    {
        return $this->hasOne(TrackingNumber::class, 'order_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function shipping_address()
    {
        return $this->belongsTo(Address::class, 'shipping_address_id', 'id');
    }

    public function billing_address()
    {
        return $this->belongsTo(Address::class, 'billing_address_id', 'id');
    }
}
