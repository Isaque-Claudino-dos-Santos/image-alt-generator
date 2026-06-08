<?php

namespace App\Http\Controllers;

use App\Services\ImageAltGenerateService;
use Illuminate\Http\Request;

class ImageAltGenerateController extends Controller
{
    public function __construct(private readonly ImageAltGenerateService $imageAltGenerateService)
    {
    }

    public function __invoke()
    {
        $images = [];

        $altText = $this->imageAltGenerateService->generateAltText($images);

        return response()->json([
            'alt_text' => $altText,
        ]);
    }
}
