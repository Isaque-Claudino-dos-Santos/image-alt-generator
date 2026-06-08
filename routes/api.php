<?php

use App\Http\Controllers\ImageAltGenerateController;
use App\Http\Controllers\UploadImageController;
use Illuminate\Support\Facades\Route;


Route::post('/generate-alt-text', ImageAltGenerateController::class);

Route::controller(UploadImageController::class)
    ->group(function () {
        Route::post('/upload-one-image', 'uploadOneImage');
        Route::post('/upload-many-image', 'uploadManyImages');
    });