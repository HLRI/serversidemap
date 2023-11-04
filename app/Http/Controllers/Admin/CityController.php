<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function create(){
        $cities = City::orderby('id', 'desc')->get();
        return view('admin.city.create', compact(['cities']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $city = new City();
        $city->title = $request->title;
        $city->slug = $request->slug;
        $city->content = $request->content;
        $city->city_appsoc = $request->city_appsoc;
        $city->save();
        return back()->with('success', 'Saved successfully');
    }
}
