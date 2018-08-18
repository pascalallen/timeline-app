<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class TwitterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $authString = base64_encode(urlencode(env('TWITTER_API_KEY')).":".urlencode(env('TWITTER_API_SECRET')));

        $client = new Client();
        $res = $client->request('POST', env('TWITTER_API_URL').'oauth2/token', [
            'headers' => [
                'User-Agent' => 'pascal allen timeline app',
                'Authorization' => 'Basic '.$authString,
                'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
                'Content-Length' => '29',
                'Accept-Encoding' => 'gzip',
            ],
            'body' => 'grant_type=client_credentials'
        ]);

        $body = $res->getBody();
        $bodyObject = json_decode($body->getContents());
        $accessToken = null;
        if($bodyObject->token_type === 'bearer'){
            $res = $client->request('GET', env('TWITTER_API_URL').'1.1/statuses/user_timeline.json', [
                'headers' => [
                    'Authorization' => 'Bearer '.$bodyObject->access_token,
                    'Accept-Encoding' => 'gzip',
                ],
                'query' => ['screen_name' => $request->screen_name]
            ]);
            $body = $res->getBody();
            $bodyObject = $body->getContents();
            return $bodyObject;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
