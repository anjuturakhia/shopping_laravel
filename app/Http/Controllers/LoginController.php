<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class LoginController extends Controller
{

    //
    public function login(Request $request, JWTAuth $JWTAuth){


       // \Log::info(var_export($request->all(),true));
       // dd($request->all());

        $credentials = [];
        $credentials['email'] = strtolower($request->name);
        $credentials['password'] = $request->password;


        $token = $JWTAuth->attempt($credentials);

        if (!$token)
        {
            return response()
                ->json([
                    'status' => 'fail',
                    'token' => '',
                    'status_code' => 403,
                    'message' =>'Username or password invalid!',
                ]);



        }else{

            return response()
                ->json([
                    'status' => 'success',
                    'token' => $token,
                    'status_code' => 200,
                    'message' =>'Logged in successfully!'

                ]);

        }


        }
}
