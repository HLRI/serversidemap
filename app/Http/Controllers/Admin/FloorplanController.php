<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Floorplan;
use Illuminate\Http\Request;

class FloorplanController extends Controller
{
    public function index()
    {
        $floorplans = Floorplan::orderby('id', 'desc')->get();
        return view('admin.floorplan.index', compact(['floorplans']));
    }

    public function create()
    {
        return view('admin.floorplan.create');
    }

    public function store(Request $request)
    {
        
        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $floorplan = new Floorplan();
        $floorplan->title = $request->title;
        $floorplan->slug =  $request->slug;
        $floorplan->thumbnail = $request->thumbnail;
        $floorplan->status = $request->status;
        $floorplan->suite_name = $request->suite_name;
        $floorplan->beds = $request->beds;
        $floorplan->baths = $request->baths;
        $floorplan->size = $request->size;
        $floorplan->studio = $request->studio;
        $floorplan->view = $request->view;
        $floorplan->interior_size = $request->interior_size;
        $floorplan->floor_range = $request->floor_range;
        $floorplan->price_from = $request->price_from;
        $floorplan->price_per = $request->price_per;
        $floorplan->mt_fees_per_month = $request->mt_fees_per_month;
        $floorplan->parking = $request->parking;
        $floorplan->ev_parking = $request->ev_parking;
        $floorplan->balcony_sqft = $request->balcony_sqft;
        $floorplan->locker = $request->locker;
        $floorplan->deposit_structure = $request->deposit_structure;
        $floorplan->publish_status = $request->publish_status;
        $floorplan->save();
        return back()->with('success', 'Saved successfully');
    }
}
