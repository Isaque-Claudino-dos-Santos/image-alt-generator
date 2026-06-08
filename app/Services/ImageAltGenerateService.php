<?php

namespace App\Services;

use App\Ai\Agents\ImageAltGeneratorAgent;
use Laravel\Ai\Enums\Lab;

class ImageAltGenerateService
{
    private const string AGENT_MODEL = 'gemini-3.5-flash';
    private const string AGENT_PROVIDER = Lab::Gemini;

    public function __construct(
        private readonly ImageAltGeneratorAgent $agent
    ) {
    }

    public function generateAltText(array $imagePath)
    {
        $agentResponse = $this->agent->prompt(
            prompt: 'Analise os anexos...',
            attachments: $imagePath,
            model: self::AGENT_MODEL,
            provider: self::AGENT_PROVIDER
        );

        dd($agentResponse);

        return $agentResponse;
    }
}