<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;


    protected $fillable = [
        'user_id',
        'parent_id',
        'stars',
        'review',
    ];




    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subReviews()
    {
        return $this->belongsTo(Review::class, 'parent_id');
    }
}
