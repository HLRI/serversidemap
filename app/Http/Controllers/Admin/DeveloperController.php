<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Developer;
use Illuminate\Http\Request;

class DeveloperController extends Controller
{
    public function create(){
        $developers = Developer::orderby('id', 'desc')->get();
        return view('admin.developer.create', compact(['developers']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $developer = new Developer();
        $developer->title = $request->title;
        $developer->slug = $request->slug;
        $developer->save();
        return back()->with('success', 'Saved successfully');
    }
}
