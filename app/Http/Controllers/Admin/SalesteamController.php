<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Salesteam;
use Illuminate\Http\Request;

class SalesteamController extends Controller
{
    public function create(){
        $salesteams = Salesteam::orderby('id', 'desc')->get();
        return view('admin.salesteam.create', compact(['salesteams']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $salesteam = new Salesteam();
        $salesteam->title = $request->title;
        $salesteam->slug = $request->slug;
        $salesteam->save();
        return back()->with('success', 'Saved successfully');
    }
}
