@extends('admin.layouts.main')
@section('title', 'Edit Role')

@section('content')

    @include('admin.partials.alerts')
    <div class="row clearfix">
        <form action="{{ route('roles.update', ['role' => $role->id]) }}" method="post">
            @csrf
            <div class="card">
                <div class="header">
                    <h2>Add access to role</h2>
                </div>
                <div class="body">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="form-group {{ $errors->has('name') ? 'has-error' : '' }}">
                                <div class="form-line">
                                    <input disabled type="text" name="name" value="{{ $role->name }}"
                                        class="form-control" placeholder="Role Name">
                                </div>
                                @if ($errors->has('name'))
                                    <span class="help-block">{{ $errors->first('name') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="form-group {{ $errors->has('display_name') ? 'has-error' : '' }}">
                                <div class="form-line">
                                    <input type="text" name="display_name" value="{{ $role->display_name }}"
                                        class="form-control" placeholder="Display Name">
                                </div>
                                @if ($errors->has('display_name'))
                                    <span class="help-block">{{ $errors->first('display_name') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <button type="submit" class="btn bg-green waves-effect">Update</button>
                        </div>
                    </div>

                    <div class="row" style="margin-top: 15px">
                        @forelse ($permissions as $permission)
                            <div class="col-lg-2">
                                <div class="form-group">
                                    <input type="checkbox" id="md_checkbox_permissions_{{ $permission->id }}"
                                        class="filled-in chk-col-deep-orange" name="permissions[]"
                                        value="{{ $permission->name }}"
                                        {{ $role->permissions->contains($permission) ? 'checked' : '' }} />
                                    <label
                                        for="md_checkbox_permissions_{{ $permission->id }}">{{ $permission->display_name }}</label>

                                </div>
                            </div>
                        @empty
                            <div class="col-lg-12">
                                No Result
                            </div>
                        @endforelse
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
