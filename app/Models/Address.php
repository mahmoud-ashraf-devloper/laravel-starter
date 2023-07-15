<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'company',
        'email',
        'phone',
        'country_id',
        'city',
        'state_id',
        'address_1',
        'address_2',
        'zip_code',
        'appartment_suit_unit',
    ];


    public function state()
    {
        return $this->belongsTo(State::class);
    }
    
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
