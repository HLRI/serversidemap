@extends('admin.layouts.main')
@section('title', 'ویرایش کاربر')

@section('content')

    @include('admin.partials.alerts')

    <form action="{{ route('users.update', ['user' => $user->id]) }}" method="post">
        @csrf
        <div class="row">
            <div class="col-lg-4">
                <div class="box box-success form-horizontal">
                    <div class="box-header with-border">
                        <h3 class="box-title">اطلاعات کاربر</h3>
                    </div>
                    <div class="box-body">
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" name="name" value="{{ $user->name }}"
                                    id="name" placeholder="نام و نام خانوادگی">
                                @if ($errors->has('name'))
                                    <span class="help-block">{{ $errors->first('name') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control" name="email" value="{{ $user->email }}"
                                    id="email" placeholder="ایمیل">
                                @if ($errors->has('email'))
                                    <span class="help-block">{{ $errors->first('email') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" name="phone" value="{{ $user->phone }}"
                                    id="phone" placeholder="شماره تلفن">
                                @if ($errors->has('phone'))
                                    <span class="help-block">{{ $errors->first('phone') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="password" class="form-control" name="password" id="password"
                                    placeholder="رمز عبور">
                                @if ($errors->has('password'))
                                    <span class="help-block">{{ $errors->first('password') }}</span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="password" class="form-control" name="password_confirmation"
                                    id="password_confirmation" placeholder="تایید رمز عبور">
                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">{{ $errors->first('password_confirmation') }}</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">افزودن نقش به کاربر</h3>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            @forelse ($roles as $role)
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" name="roles[]" value="{{ $role->name }}"
                                                {{ $user->roles->contains($role) ? 'checked' : '' }} class="flat-red">
                                            {{ $role->display_name }}
                                        </label>
                                    </div>
                                </div>
                            @empty
                                اطلاعاتی وجود ندارد
                            @endforelse
                        </div>
                    </div>
                </div>
                <div class="box box-success">
                    <div class="box-header with-border">
                        <h3 class="box-title">افزودن دسترسی کاربر</h3>
                    </div>
                    <div class="box-body">
                        <div class="row">
                            @forelse ($permissions as $permission)
                                <div class="col-lg-3">
                                    <div class="form-group">
                                        <label>
                                            <input type="checkbox" name="permissions[]" value="{{ $permission->name }}"
                                                {{ $user->permissions->contains($permission) ? 'checked' : '' }}
                                                class="flat-red">
                                            {{ $permission->display_name }}
                                        </label>
                                    </div>
                                </div>
                            @empty
                                اطلاعاتی وجود ندارد
                            @endforelse
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-left">
            <button type="submit" class="btn btn-success">ویرایش</button>
        </div>
    </form>

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
