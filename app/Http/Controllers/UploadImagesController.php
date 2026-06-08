<?php

namespace App\Http\Controllers;

use App\DTOs\UploadImageDTO;
use App\Http\Requests\UploadImageRequest;
use App\Http\Resources\MediaResource;
use App\Models\Media;
use App\Services\MediaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UploadImagesController extends Controller
{
    public function __construct(
        private readonly MediaService $mediaService
    ) {
    }

    public function index()
    {
        return response()->json([
            'data' => MediaResource::collection(Media::all())
        ]);
    }

    public function store(UploadImageRequest $request)
    {
        $data = UploadImageDTO::make($request->validated());

        $images = DB::transaction(function () use ($data) {
            return $data->images->map(function ($image) {
                return $this->mediaService->createFromUploadFile($image);
            });
        });

        return response()->json([
            'data' => MediaResource::collection($images)
        ]);
    }
}
