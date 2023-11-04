<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class Rolecontroller extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return view('admin.role.index', compact(['roles']));
    }

    public function edit(Role $role)
    {
        $permissions = Permission::all();
        $role->load('permissions');
        return view('admin.role.edit', compact(['role', 'permissions']));
    }

    public function store(Request $request)
    {
        $this->validateForm($request);
        Role::create($request->only('name', 'display_name'));
        return back()->with('success', true);
    }

    public function update(Request $request, Role $role)
    {
        $this->validateForm($request);
        $role->update($request->only('display_name'));
        $role->refreshPermissions($request->permissions);
        return back()->with('success', true);
    }

    protected function validateForm($request)
    {
        return $this->validate(
            $request,
            [
                'display_name' => 'required',
            ],
            [
                'name.required'    => 'نام نقش الزامی است',
                'display_name.required'    => 'نام فارسی نقش الزامی است',
            ]
        );
    }
}
