<?php

namespace App\Http\Resources;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

/**
 * @mixin Media
 */
class MediaResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'file_name' => $this->file_name,
            'mime_type' => $this->mime_type,
            'path' => $this->path,
            'disk' => $this->disk,
            'file_hash' => $this->file_hash,
            'collection' => $this->collection,
            'size' => $this->size,
            'alt' => $this->alt,
            'link' => Storage::url($this->path)
        ];
    }
}
