<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Developer;
use App\Models\Floorplan;
use App\Models\Group;
use App\Models\Neighborhood;
use App\Models\Property;
use App\Models\Salesteam;
use App\Models\Stage;
use App\Models\Type;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function create()
    {
        $floorplans = Floorplan::orderby('id', 'desc')->get();
        $cities = City::orderby('id', 'desc')->get();
        $neighborhoods = Neighborhood::orderby('id', 'desc')->get();
        $groups = Group::orderby('id', 'desc')->get();
        $developers = Developer::orderby('id', 'desc')->get();
        $salesteams = Salesteam::orderby('id', 'desc')->get();
        $types = Type::orderby('id', 'desc')->get();
        $stages = Stage::orderby('id', 'desc')->get();
        return view('admin.property.create', compact(['floorplans', 'cities', 'neighborhoods', 'groups', 'developers', 'salesteams', 'types', 'stages']));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $property = new Property();
        $property->title = $request->title;
        $property->slug =  $request->slug;
        $property->excerpt = $request->excerpt;
        $property->content = $request->content;
        $property->thumbnail = $request->thumbnail;
        $property->available_floorplans = $request->available_floorplans;
        $property->address = $request->address;
        $property->street_address = $request->street_address;
        $property->pricepersqft = $request->pricepersqft;
        $property->price = $request->price;
        $property->price_min = $request->price_min;
        $property->price_max = $request->price_max;
        $property->size_min = $request->size_min;
        $property->size_max = $request->size_max;
        $property->min_bed = $request->min_bed;
        $property->max_bed = $request->max_bed;
        $property->min_bath = $request->min_bath;
        $property->max_bath = $request->max_bath;
        $property->min_price_sqft = $request->min_price_sqft;
        $property->max_price_sqft = $request->max_price_sqft;
        $property->sqft_avg = $request->sqft_avg;
        $property->occupancy = $request->occupancy;
        $property->coming_soon = $request->coming_soon;
        $property->incentives = serialize($request->incentives);
        $property->comission_by_percent = $request->comission_by_percent;
        $property->comission_by_flatfee = $request->comission_by_flatfee;
        $property->studio = $request->studio;
        $property->sales_status = $request->sales_status;
        $property->project_status = $request->project_status;
        $property->coords = $request->coords;
        $property->map_link = $request->map_link;
        $property->architect = $request->architect;
        $property->interior_designer = $request->interior_designer;
        $property->floors = $request->floors;
        $property->suites = $request->suites;
        $property->parking = $request->parking;
        $property->locker = $request->locker;
        $property->parking_price = $request->parking_price;
        $property->locker_price = $request->locker_price;
        $property->mt_fees = $request->mt_fees;
        $property->deposit_structure = $request->deposit_structure;
        $property->substage = $request->substage;
        $property->apps = $request->apps;
        $property->pdf_files = serialize($request->pdf_files);
        $property->externalid = $request->externalid;
        $property->publish_status = $request->publish_status;
        $property->city_id = $request->city;
        $property->neighborhood_id = $request->neighborhood;
        $property->group_id = $request->group;
        $property->salesteam_id = $request->salesteam;
        $property->stage_id = $request->stage;
        $property->save();
        $property->floorplans()->attach($request->floorplans);
        $property->developers()->attach($request->developers);
        $property->types()->attach($request->types);

        return back()->with('success', 'Saved successfully');
    }
}
