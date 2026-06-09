<?php

namespace App\Ai\Agents;

use Illuminate\Contracts\JsonSchema\JsonSchema;
use Laravel\Ai\Contracts\Agent;
use Laravel\Ai\Contracts\Conversational;
use Laravel\Ai\Contracts\HasStructuredOutput;
use Laravel\Ai\Contracts\HasTools;
use Laravel\Ai\Contracts\Tool;
use Laravel\Ai\Messages\Message;
use Laravel\Ai\Promptable;
use Stringable;

class ImageAltGeneratorAgent implements Agent, Conversational, HasStructuredOutput, HasTools
{
    use Promptable;

    /**
     * Get the instructions that the agent should follow.
     */
    public function instructions(): Stringable|string
    {
        return 'Gere um texto ALT em português do Brasil a partir da imagem disponível na imagem em anexo fornecida. Descreva de forma objetiva o que aparece na imagem, incluindo ações e contexto quando relevantes. Siga as melhores práticas de SEO e acessibilidade, utilize linguagem natural, destaque os elementos principais, evite keyword stuffing, não faça suposições e retorne apenas o texto ALT final, sem explicações, títulos, aspas ou formatação.';
        // return '!IMPORTANTE vou lher passar uma imagem em anexo. quero que atue como especialista em acessibilidade web e SEO e crie o texto do atributo "alt" e a tag HTML <img> para uma imagem em um(a) [tipo de site/página] que mostra [o que está na imagem] dentro de uma página sobre [contexto do texto]. Siga as regras da WCAG: seja conciso, direto, não use "imagem de" ou "foto de", descreva o conteúdo essencial e foque na função.';
        // return 'Você receberá uma imagem anexada. Sua tarefa é gerar um texto alternativo (atributo alt de HTML) seguindo as melhores práticas de acessibilidade. Retorne apenas o texto do alt, sem explicações, comentários, formatação, aspas ou código HTML. Descreva de forma objetiva o conteúdo essencial da imagem. Priorize as informações mais importantes para compreensão da imagem. Seja conciso, mas informativo. Não comece com expressões como "imagem de", "foto de" ou "figura de", a menos que seja relevante. Inclua textos visíveis quando forem importantes para o contexto. Identifique pessoas, objetos, ações, locais, gráficos ou elementos relevantes quando possível. Evite interpretações subjetivas, opiniões ou informações não visíveis. Se a imagem contiver apenas texto, retorne o texto de forma legível e resumida quando necessário. Se for um gráfico ou infográfico, descreva a informação principal transmitida. Se a imagem for puramente decorativa e não transmitir informação relevante, retorne uma string vazia. Analise a imagem enviada e retorne somente o texto alternativo gerado.';
    }

    /**
     * Get the list of messages comprising the conversation so far.
     *
     * @return Message[]
     */
    public function messages(): iterable
    {
        return [];
    }

    /**
     * Get the tools available to the agent.
     *
     * @return Tool[]
     */
    public function tools(): iterable
    {
        return [];
    }

    /**
     * Get the agent's structured output schema definition.
     */
    public function schema(JsonSchema $schema): array
    {
        return [
            'alt' => $schema->string()->required(),
        ];
    }
}
