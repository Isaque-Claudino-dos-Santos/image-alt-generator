<?php

namespace App\DTOs;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use ISQ\MAIO\Attributes\Call;

class UploadImageDTO extends BaseDTO
{
    /**
     * @var Collection<UploadedFile>
     */
    #[Call('collect')]
    public Collection $images;
}
