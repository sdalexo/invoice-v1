<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'correo'=>['required','email'],
            'contraseña'=>['required','min:8']
        ];
    }

    public function messages():array
    {
        return [
            'correo.required'=>'el correo es obligatorio',
            'correo.email'=>'el correo debe de tener un formato valido',
            'contraseña.required'=>'la contraseña es obligatoria',
            'contraseña.min'=>'la contraseña debe de tener por lo menos 8 caracteres'  
        ];
    }
}
