<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Api;
use Illuminate\Support\Facades\Hash;

class AuthController
{
    use Api;
    public function login(LoginRequest $request){
        $user = User::where('correo',$request->correo)->first();

        if($user){
           if(Hash::check($request->contraseña,$user->contraseña) && $user->email_verified_at){
              $token = $user->createToken('authorizing')->plainTextToken;
              return $this->Response(['token'=>$token],'usuario encontrado',200,null);
           }
           return $this->Response(null,'contraseñas incorrectas o email no verificado',404,'el usuario no esta autorizado');
        }
        return $this->Response(null,'El correo o la contraseña son incorrectos',404,'usuario no encontrado');
    }
}
