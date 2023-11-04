<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    public function create(){
        $groups = Group::orderby('id', 'desc')->get();
        return view('admin.group.create', compact(['groups']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $group = new Group();
        $group->title = $request->title;
        $group->slug = $request->slug;
        $group->save();
        return back()->with('success', 'Saved successfully');
    }
}
