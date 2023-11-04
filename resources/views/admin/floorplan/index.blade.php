@extends('admin.layouts.main')
@section('title', 'Floorplans')

@section('css')
    <link href="{{ asset('admin/assets') }}/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css"
        rel="stylesheet">
@endsection

@section('content')
    <div class="row clearfix">
        <div class="card">
            <div class="body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Publish Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($floorplans as $floorplan)
                                <tr>
                                    <td>{{ $floorplan->id }}</td>
                                    <td>{{ $floorplan->title }}</td>
                                    <td>{{ $floorplan->publish_status }}</td>
                                    <td>
                                        <a href="{{ route('floorplans.edit', ['id' => $floorplan->id]) }}"
                                            class="btn bg-green waves-effect">Edit</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Publish Status</th>
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
