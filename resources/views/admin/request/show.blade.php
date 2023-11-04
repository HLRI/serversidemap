@extends('admin.layouts.main')
@section('title', 'جزئیات درخواست')

@section('content')
    @include('admin.partials.alerts')
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">موضوع درخواست : ( {{ $request->title }} )</h3>
        </div>
        <div class="box-body">
            {!! $request->content !!}
        </div>
    </div>
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">فایل های ضمیمه</h3>
        </div>
        <div class="box-body">
            @forelse ($request->documents as $document)
                <a href="{{ $document->url }}">
                    <img width="100" height="100" src="{{ $document->url }}" alt="">
                </a>
            @empty
                فایلی وجود ندارد
            @endforelse
        </div>
    </div>
    <div class="text-left">
        @role('supervisor')
            <button type="button" id="supervisor_confirm" class="btn btn-success">تایید درخواست</button>
            <button type="button" id="supervisor_reject" class="btn btn-danger">رد درخواست</button>
        @endrole
        @role('admin')
            @if ($request->getRawOriginal('supervisor_status') == 1)
                <button type="button" id="admin_confirm" class="btn btn-success">تایید درخواست</button>
                <button type="button" id="admin_reject" class="btn btn-danger">رد درخواست</button>
            @endif
        @endrole
    </div>
@endsection

@section('js')
    <script>
        $('#supervisor_confirm').click(function(e) {
            $.ajax({
                url: '{{ route('requests.supervisor.confirm') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                dataType: 'json',
                data: {
                    id: {{ $request->id }}
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(reject) {
                    // if (reject.status === 422) {
                    //     var errors = $.parseJSON(reject.responseText);
                    //     $.each(errors.errors, function(key, val) {
                    //         $("#" + key).after(
                    //             '<span class="invalid-feedback d-block" role="alert"> <strong>' +
                    //             val[0] + '</strong> </span>');;
                    //     });
                    // }
                }
            });
        });

        $('#supervisor_reject').click(function(e) {
            $.ajax({
                url: '{{ route('requests.supervisor.reject') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                dataType: 'json',
                data: {
                    id: {{ $request->id }}
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(reject) {
                    // if (reject.status === 422) {
                    //     var errors = $.parseJSON(reject.responseText);
                    //     $.each(errors.errors, function(key, val) {
                    //         $("#" + key).after(
                    //             '<span class="invalid-feedback d-block" role="alert"> <strong>' +
                    //             val[0] + '</strong> </span>');;
                    //     });
                    // }
                }
            });
        });


        $('#admin_confirm').click(function(e) {
            $.ajax({
                url: '{{ route('requests.admin.confirm') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                dataType: 'json',
                data: {
                    id: {{ $request->id }}
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(reject) {
                    // if (reject.status === 422) {
                    //     var errors = $.parseJSON(reject.responseText);
                    //     $.each(errors.errors, function(key, val) {
                    //         $("#" + key).after(
                    //             '<span class="invalid-feedback d-block" role="alert"> <strong>' +
                    //             val[0] + '</strong> </span>');;
                    //     });
                    // }
                }
            });
        });

        $('#admin_reject').click(function(e) {
            $.ajax({
                url: '{{ route('requests.admin.reject') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                dataType: 'json',
                data: {
                    id: {{ $request->id }}
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(reject) {
                    // if (reject.status === 422) {
                    //     var errors = $.parseJSON(reject.responseText);
                    //     $.each(errors.errors, function(key, val) {
                    //         $("#" + key).after(
                    //             '<span class="invalid-feedback d-block" role="alert"> <strong>' +
                    //             val[0] + '</strong> </span>');;
                    //     });
                    // }
                }
            });
        });
    </script>
@endsection
