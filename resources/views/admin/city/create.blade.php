@extends('admin.layouts.main')
@section('title', 'New City')

@section('css')
    <link href="{{ asset('admin/assets') }}/plugins/jquery-datatable/skin/bootstrap/css/dataTables.bootstrap.css"
        rel="stylesheet">
@endsection

@section('content')
    @include('admin.partials.alerts')
    <form action="{{ route('cities.store') }}" method="post">
        @csrf
        <div class="row clearfix">
            <div class="col-lg-4">
                <div class="card">
                    <div class="header">
                        <h2>Content</h2>
                    </div>
                    <div class="body">
                        <div class="form-group">
                            <div class="form-line" id="title">
                                <input type="text" name="title" class="form-control" placeholder="title">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="slug">
                                <input type="text" name="slug" class="form-control" placeholder="slug">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="content">
                                <textarea type="text" name="content" class="form-control" placeholder="content"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="city_appsoc">
                                <input type="text" name="city_appsoc" class="form-control"
                                    placeholder="Average Price per SQFT">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="body">
                        <button type="submit" class="btn btn-lg bg-green btn-block waves-effect">Save</button>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card">
                    <div class="body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Slug</th>
                                        <th>Average Price per SQFT</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($cities as $city)
                                        <tr>
                                            <td>{{ $city->title }}</td>
                                            <td>{{ $city->slug }}</td>
                                            <td>{{ $city->city_appsoc }}</td>
                                            <td>
                                                <a href="{{ route('cities.edit', ['id' => $city->id]) }}"
                                                    class="btn bg-green waves-effect">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Title</th>
                                        <th>Slug</th>
                                        <th>Average Price per SQFT</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
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
