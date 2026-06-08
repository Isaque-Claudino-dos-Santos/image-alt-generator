<?php


namespace App\DTOs;

use ISQ\MAIO\MergeArrayIntoObject;

class BaseDTO
{
    public static function make(array $data): static
    {
        return (new MergeArrayIntoObject())->merge(new static(), $data);
    }
}
