@extends('admin.layouts.main')
@section('title', 'Roles List')

@section('css')
    <link href="{{ asset('admin/assets') }}/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css"
        rel="stylesheet">
@endsection

@section('content')

    @include('admin.partials.alerts')
    <div class="row clearfix">
        <form action="{{ route('roles.store') }}" method="post">
            @csrf
            <div class="card">
                <div class="header">
                    <h2>Add Role</h2>
                </div>
                <div class="body">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="form-line">
                                <input type="text" name="name" class="form-control" placeholder="Role Name">
                            </div>
                            @if ($errors->has('name'))
                                <span class="help-block">{{ $errors->first('name') }}</span>
                            @endif
                        </div>
                        <div class="col-lg-5">
                            <div class="form-line">
                                <input type="text" name="display_name" class="form-control" placeholder="Display Name">
                            </div>
                            @if ($errors->has('display_name'))
                                <span class="help-block">{{ $errors->first('display_name') }}</span>
                            @endif
                        </div>
                        <div class="col-lg-2">
                            <button type="submit" class="btn btn-success">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <div class="card">
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                        <thead>
                            <tr>
                                <th>Role Name</th>
                                <th>Display Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($roles as $role)
                                <tr>
                                    <td>{{ $role->name }}</td>
                                    <td>{{ $role->display_name }}</td>
                                    <td>
                                        <a href="{{ route('roles.edit', ['role' => $role->id]) }}"
                                            class="btn bg-green waves-effect">Edit</a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    No result
                                </tr>
                            @endforelse
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Role Name</th>
                                <th>Display Name</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/jquery.dataTables.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/dataTables.buttons.min.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/buttons.flash.min.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/jszip.min.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/pdfmake.min.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/vfs_fonts.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/buttons.html5.min.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/jquery-datatable/extensions/export/buttons.print.min.js"></script>
    <script src="{{ asset('admin/assets') }}/js/pages/tables/jquery-datatable.js"></script>
@endsection
