<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function create(){
        $types = Type::orderby('id', 'desc')->get();
        return view('admin.type.create', compact(['types']));
    }

    public function store(Request $request){

        $validated = $request->validate([
            'title' => 'required',
            'slug' => 'required|unique:properties',
        ]);

        $type = new Type();
        $type->title = $request->title;
        $type->slug = $request->slug;
        $type->save();
        return back()->with('success', 'Saved successfully');
    }
}
