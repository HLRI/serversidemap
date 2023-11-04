@extends('admin.layouts.main')
@section('title', 'New User')

@section('content')

    @include('admin.partials.alerts')
    <div class="row clearfix">
        <form action="{{ route('users.store') }}" method="post">
            @csrf
            <div class="row clearfix">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="header">
                            <h2>User information</h2>
                        </div>
                        <div class="body">
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}"
                                        id="name" placeholder="First name and last name">
                                </div>
                                @if ($errors->has('name'))
                                    <span class="help-block">{{ $errors->first('name') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="username" class="form-control" name="username"
                                        value="{{ old('username') }}" id="username" placeholder="Username">
                                </div>
                                @if ($errors->has('username'))
                                    <span class="help-block">{{ $errors->first('username') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="email" class="form-control" name="email" id="email"
                                        value="{{ old('email') }}" placeholder="email">
                                </div>
                                @if ($errors->has('email'))
                                    <span class="help-block">{{ $errors->first('email') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" class="form-control" name="phone" id="phone"
                                        value="{{ old('phone') }}" placeholder="Phone">
                                </div>
                                @if ($errors->has('phone'))
                                    <span class="help-block">{{ $errors->first('phone') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="password" class="form-control" name="password" id="password"
                                        placeholder="Password">
                                </div>
                                @if ($errors->has('password'))
                                    <span class="help-block">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="password" class="form-control" name="password_confirmation"
                                        id="password_confirmation" placeholder="Password Confirmation">
                                </div>
                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">{{ $errors->first('password_confirmation') }}</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="header">
                            <h2>Adding a Role to a User</h2>
                        </div>
                        <div class="body">
                            <div class="row">
                                @forelse ($roles as $role)
                                    <div class="col-lg-3">
                                        <div class="form-group">
                                            <input type="checkbox" id="md_checkbox_{{ $role->id }}"
                                                class="filled-in chk-col-deep-orange" name="roles[]"
                                                value="{{ $role->name }}" />
                                            <label for="md_checkbox_{{ $role->id }}">{{ $role->display_name }}</label>
                                        </div>
                                    </div>
                                @empty
                                    <div class="col-lg-12">
                                        No result
                                    </div>
                                @endforelse
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="header">
                            <h2>Add User Access</h2>
                        </div>
                        <div class="body">
                            <div class="row">
                                @forelse ($permissions as $permission)
                                    <div class="col-lg-3">
                                        <div class="form-group">
                                            <input type="checkbox" id="md_checkbox_permissions_{{ $permission->id }}"
                                                class="filled-in chk-col-deep-orange" name="permissions[]"
                                                value="{{ $permission->name }}" />
                                            <label
                                                for="md_checkbox_permissions_{{ $permission->id }}">{{ $permission->display_name }}</label>

                                        </div>
                                    </div>
                                @empty
                                    <div class="col-lg-12">
                                        No result
                                    </div>
                                @endforelse
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn bg-green waves-effect">Create</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection


@section('js')
    <script>
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        })
        //Red color scheme for iCheck
        $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
            checkboxClass: 'icheckbox_minimal-red',
            radioClass: 'iradio_minimal-red'
        })
        //Flat red color scheme for iCheck
        $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green'
        })
    </script>
@endsection
