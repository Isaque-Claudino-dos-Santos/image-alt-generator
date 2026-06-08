<?php

namespace App\Services;

use App\Ai\Agents\ImageAltGeneratorAgent;
use App\Models\Media;
use Illuminate\Support\Facades\Storage;
use Laravel\Ai\Enums\Lab;

class ImageAltGenerateService
{
    private const string AGENT_MODEL = 'gemini-3.5-flash';
    private const string AGENT_PROVIDER = Lab::Gemini;

    public function __construct(
        private readonly ImageAltGeneratorAgent $agent
    ) {
    }

    public function generateAltText(Media $image)
    {
        $agentResponse = $this->agent->prompt(
            prompt: 'Analise os anexos...',
            attachments: [Storage::disk($image->disk)->path($image->path)],
            model: self::AGENT_MODEL,
            provider: self::AGENT_PROVIDER
        );

        dd($agentResponse);

        return $agentResponse;
    }
}
