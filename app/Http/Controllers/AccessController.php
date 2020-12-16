<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class AccessController extends Controller
{
    //
    public function getcompany(Request $request ,JWTAuth $JWTAuth){

       // dd($request->all());

        $data = "We believe in high quality, optimised and sophisticated code while keeping the UI clean and user-friendly.
            We believe in constant development of ourself by learning new technologies and tricks every day.
            We provide quality web & IT support & development to businesses around the world. So you can get on with running your business without worrying about websites and technology";

        if($request->lang == "en"){
            $data = "We believe in high quality, optimised and sophisticated code while keeping the UI clean and user-friendly.
            We believe in constant development of ourself by learning new technologies and tricks every day.
            We provide quality web & IT support & development to businesses around the world. So you can get on with running your business without worrying about websites and technology";

        }

        if($request->lang == "hi"){
            $data = "हम यूआई को साफ और उपयोगकर्ता के अनुकूल रखते हुए उच्च गुणवत्ता, अनुकूलित और परिष्कृत कोड में विश्वास करते हैं।

हम हर दिन नई तकनीकों और तरकीबों को सीखकर अपने आप के निरंतर विकास में विश्वास करते हैं।

हम दुनिया भर के व्यवसायों को गुणवत्ता वेब और आईटी समर्थन और विकास प्रदान करते हैं। तो आप वेबसाइटों और प्रौद्योगिकी की चिंता किए बिना अपना व्यवसाय चलाने के साथ मिल सकते हैं";


        }


        return response()
            ->json([
                'status' => 'success',
                'message' => $data,
                'status_code' => 200,

            ]);

    }


    public function savecontact(Request $res,JWTAuth $JWTAuth){

        $user_id= auth()->user()->id;
        $data = \DB::table('contact')
            ->insert([
                'name'=>$res->name,
                'email'=>$res->email,
                'telephone'=>$res->telephone,
                'comment'=>$res->comment,
                'user_id'=>$user_id,

            ]);


        return response()
            ->json([
                'status' => 'success',
                'message' => 'Contact details saved successfully!!',
                'status_code' => 200,

            ]);

    }
}
