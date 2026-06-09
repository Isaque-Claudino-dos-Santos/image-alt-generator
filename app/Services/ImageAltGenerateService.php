<?php

namespace App\Services;

use App\Ai\Agents\ImageAltGeneratorAgent;
use App\Models\Media;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Enums\Lab;
use Laravel\Ai\Files;
use Laravel\Ai\Image;

class ImageAltGenerateService
{
    public function generateAltText(Media $image)
    {
        $agentResponse = (new ImageAltGeneratorAgent)->prompt(
            prompt: 'Imagem em anexos',
            attachments: [
                Files\Image::fromStorage($image->path, $image->disk)
            ],
            model: 'gemini-3.5-flash',
            provider: Lab::Gemini
        );

        return $agentResponse['alt'];
    }
}
