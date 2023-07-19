<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class Helper
{
    
    
    private static function currencyConverter($to)
    {

        $baseUrl = 'https://api.freecurrencyapi.com/v1';
        $apiKey = config('services.currency_convertor.key');
        $base_currency = 'USD';
        
        $parameters = [
            'apikey' => $apiKey,
            'base_currency'   => $base_currency,
            'currencies' =>  $to,
        ];

        $cacheKey = 'CURRENCY_RATE_FOR_'. $to;

        $rate = Cache::get($cacheKey, 0);

        if(!$rate){
            $rate = Http::baseUrl($baseUrl)
            ->get('latest', $parameters)['data'][$to];
            Cache::put($cacheKey, $rate, now()->addMinutes(30));
        }
        
        return $rate;
    }

    public static function getPrice($price)
    {
        $price = $price / 100;
        $prefered_currency = session()->get('currency') ?? 'USD';
        $rate = static::currencyConverter($prefered_currency);
        $coverted = round($price * $rate, 2);
        // $coverted = round($price, 2); //only ofline
        return $coverted;
    }
    public static function getPriceInInt($price)
    {
        $price = $price * 100;
        return $price;
    }
    
    public static function getCurrency($currency)
    {
        $baseUrl = 'https://api.freecurrencyapi.com/v1';
        $apiKey = config('services.currency_convertor.key');
        $base_currency = 'USD';
        
        $parameters = [
            'apikey' => $apiKey,
            'base_currency'   => $base_currency,
            'currencies' =>  $currency,
        ];

        $cacheKey = $currency;

        $exists = Cache::get($cacheKey, 0);

        if(!$exists){
            $res = Http::baseUrl($baseUrl)
            ->get('currencies', $parameters)->json();
            Cache::put($cacheKey, $res['data'][$currency]);
        }

        return Cache::get($cacheKey, 0);
    }
}
