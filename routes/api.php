<?php

if (version_compare(PHP_VERSION, '7.1.10', '>=')) {
    // Ignores notices and reports all other kinds... and warnings
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
    // error_reporting(E_ALL ^ E_WARNING); // Maybe this is enough
}

use Illuminate\Http\Request;

use Dingo\Api\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app(Router::class);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

$api->version('v1', function (Router $api) {
    // $api->post('dologin', 'App\Http\Controllers\ApiController@dologin');


    $api->post('login', 'App\Http\Controllers\LoginController@login');


    $api->group(['middleware' => 'jwt.auth'], function (Router $api) {

        //$api->post('register', 'App\Http\Controllers\ApiController@register');
        //$api->post('', 'App\Http\Controllers\ApiController@getUser');
        $api->post('getcompany', 'App\Http\Controllers\AccessController@getcompany');
        $api->post('getcontact', 'App\Http\Controllers\AccessController@getcontact');
        $api->post('savecontact', 'App\Http\Controllers\AccessController@savecontact');

    });
});