<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadImageController extends Controller
{

    public function uploadManyImages(Request $request)
    {
        //
    }
    
    public function uploadOneImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image',
        ]);

        $image = $request->file('image');


        dd($image);


        return response()->json(['message' => 'Image uploaded successfully']);
    }
}
