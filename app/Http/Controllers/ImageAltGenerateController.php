<?php

namespace App\Http\Controllers;

use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Services\ImageAltGenerateService;
use Illuminate\Http\Request;

class ImageAltGenerateController extends Controller
{
    public function __construct(private readonly ImageAltGenerateService $imageAltGenerateService)
    {
    }

    public function __invoke(Request $request)
    {
        $image = Media::findOrFail($request->input('id'));
        $altText = $this->imageAltGenerateService->generateAltText($image);

        $image->update([
            'alt' => $altText
        ]);

        return response()->json([
            'data' => MediaResource::make($image),
        ]);
    }
}
