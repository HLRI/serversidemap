<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Stage;
use Illuminate\Http\Request;

class StageController extends Controller
{
    public function create(){
        $stages = Stage::orderby('id', 'desc')->get();
        return view('admin.stage.create', compact(['stages']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $stage = new Stage();
        $stage->title = $request->title;
        $stage->slug = $request->slug;
        $stage->save();
        return back()->with('success', 'Saved successfully');
    }
}
