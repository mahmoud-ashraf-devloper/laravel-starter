<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaData extends Model
{
    use HasFactory;


    protected $fillable = [
        'meta_desc',
        'meta_title',
        'meta_keywords',
    ];
}
