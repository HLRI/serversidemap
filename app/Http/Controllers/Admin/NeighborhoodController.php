<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Neighborhood;
use Illuminate\Http\Request;

class NeighborhoodController extends Controller
{
    public function create()
    {
        $neighborhoods = Neighborhood::orderby('id', 'desc')->get();
        return view('admin.neighborhood.create', compact(['neighborhoods']));
    }

    public function store(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $neighborhood = new Neighborhood();
        $neighborhood->title = $request->title;
        $neighborhood->slug = $request->slug;
        $neighborhood->content = $request->content;
        $neighborhood->neighborhood_link = $request->neighborhood_link;
        $neighborhood->neighborhood_appson = $request->neighborhood_appson;
        $neighborhood->thumbnail = $request->thumbnail;
        $neighborhood->save();
        return back()->with('success', 'Saved successfully');
    }
}
