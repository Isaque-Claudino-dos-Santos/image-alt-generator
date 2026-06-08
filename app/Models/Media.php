<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

#[Fillable([
    'name',
    'file_name',
    'mime_type',
    'path',
    'disk',
    'file_hash',
    'collection',
    'size',
    'alt'
])]
#[Table('medias')]
class Media extends Model
{
    /** @use HasFactory<\Database\Factories\MediaFactory> */
    use HasFactory;


}
