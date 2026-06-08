<?php

namespace App\Services;

use App\Models\Media;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    public function createFromUploadFile(UploadedFile $file)
    {
        $name = $file->hashName();
        $disk = config('app.uploads.disk');
        $path = "/$name";

        $storage = Storage::disk($disk);

        $storage->put($path, $file->getContent());


        return Media::create([
            'name' => $file->hashName(),
            'file_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getClientMimeType(),
            'path' => "{$name}",
            'disk' => $disk,
            'file_hash' => hash_file(
                config('app.uploads.hash'),
                $storage->path($name)
            ),
            'size' => $file->getSize(),
        ]);
    }
}
