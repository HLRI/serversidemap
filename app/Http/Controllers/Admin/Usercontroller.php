<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class Usercontroller extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get();
        return view('admin.user.index', compact(['users']));
    }

    public function create()
    {
        $permissions = Permission::all();
        $roles = Role::all();
        return view('admin.user.create', compact(['permissions', 'roles']));
    }

    public function store(Request $request)
    {
        $this->validateFormCreate($request);
        $user = User::create($request->only('name', 'username', 'email', 'phone', 'password'));
        $user->givePermissionsTo($request->permissions);
        $user->giveRolesTo($request->roles);
        return back()->with('success', true);
    }

    public function edit(User $user)
    {
        $permissions = Permission::all();
        $roles = Role::all();
        $user->load('roles', 'permissions');
        return view('admin.user.edit', compact(['user', 'permissions', 'roles']));
    }

    public function update(Request $request, User $user)
    {
        $this->validateFormUpdate($request, $user);
        if (empty($request->password)) {
            $user->update($request->only('name', 'username', 'email', 'phone'));
        } else {
            $user->update($request->only('name', 'username', 'email', 'phone', 'password'));
        }
        $user->refreshPermissions($request->permissions);
        $user->refreshRoles($request->roles);
        return back()->with('success', true);
    }

    protected function validateFormUpdate($request, $user)
    {
        return $this->validate(
            $request,
            [
                'name' => ['required', 'string', 'min:3'],
                'username' => ['required', 'string', 'max:255', 'unique:users,username,' . $user->id],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
                'phone' => ['required', 'numeric', 'digits:11', 'unique:users,phone,' . $user->id],
                'password' => ['nullable', 'string', 'min:8', 'confirmed'],
            ],
            [
                'name.required' => 'Name and surname are required',
                'password.confirmed' => 'The entered password is not the same',
                'password.min' => 'The entered password must be at least 8 characters long',
                'phone.required' => 'Phone number is required',
                'phone.digits' => 'Phone number must be 10 digits',
                'phone.unique' => 'The phone number is already registered',
                'username.required' => 'username is required',
                'username.unique' => 'username is already registered',
                'email.required' => 'email is required',
                'email.email' => 'email is not valid',
                'email.unique' => 'Email is already registered',
            ]
        );
    }

    protected function validateFormCreate($request)
    {
        return $this->validate(
            $request,
            [
                'name' => ['required', 'string', 'min:3'],
                'username' => ['required', 'string', 'max:255', 'unique:users'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'phone' => ['required', 'numeric', 'digits:11', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ],
            [
                'name.required' => 'Name and surname are required',
                'password.confirmed' => 'The entered password is not the same',
                'password.min' => 'The entered password must be at least 8 characters long',
                'password.required' => 'password is required',
                'phone.required' => 'Phone number is required',
                'phone.digits' => 'Phone number must be 10 digits',
                'phone.unique' => 'The phone number is already registered',
                'username.required' => 'username is required',
                'username.unique' => 'username is already registered',
                'email.required' => 'email is required',
                'email.email' => 'email is not valid',
                'email.unique' => 'Email is already registered',
            ]
        );
    }
}
