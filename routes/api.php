<?php

use App\Http\Controllers\ImageAltGenerateController;
use App\Http\Controllers\UploadImagesController;
use Illuminate\Support\Facades\Route;


Route::post('/generate-alt-text', ImageAltGenerateController::class);

Route::resource('/upload-images', UploadImagesController::class);
