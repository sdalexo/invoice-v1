<?php

namespace App;

trait Api
{
    public function Response($data,string $message,int $code,$error){
        
        return response()->json([
            'data'=>$data,
            'message'=>$message,
            'error'=>$error
        ],$code); 
    }
}
