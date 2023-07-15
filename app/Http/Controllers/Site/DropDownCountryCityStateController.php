<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\Request;

class DropDownCountryCityStateController extends Controller
{
    public function getCountries()
    {
        $data['countries'] = Country::all(['name', 'id']);
        return response()->json($data);
    }

    public function getStates(Country $country)
    {
        $data['states'] = State::where('country_id', $country->id)->get(['name', 'id']);
        return response()->json($data);
    }

    public function getCities(State $state)
    {
        $data['cities'] = City::where('state_id', $state->id)->get(['name', 'id']);
        return response()->json($data);
    }
}
