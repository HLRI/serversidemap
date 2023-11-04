@extends('admin.layouts.main')
@section('title', 'لیست درخواست ها')
@section('content')
    <div class="box box-success">
        <div class="box-body">
            <table id="example1" class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>تاریخ ثبت</th>
                        <th>درخواست کننده</th>
                        <th>موضوع درخواست</th>
                        <th>فوریت</th>
                        <th>سرپرست</th>
                        <th>مدیر عامل</th>
                        <th>اقدامات</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($requests as $request)
                        <tr>
                            <td>{{ $request->created_at }}</td>
                            <td>{{ $request->user->name }}</td>
                            <td>{{ $request->title }}</td>
                            <td>{{ $request->urgency }}</td>
                            <td>{!! $request->supervisor_status !!}</td>
                            <td>{!! $request->admin_status !!}</td>
                            <td>
                                <a href="{{ route('requests.show', ['request' => $request->id]) }}" class="btn btn-success">مشاهده</a>
                            </td>

                        </tr>
                    @empty
                        اطلاعاتی وجود ندارد
                    @endforelse
                </tbody>
                <tfoot>
                    <tr>
                        <th>تاریخ ثبت</th>
                        <th>درخواست کننده</th>
                        <th>موضوع درخواست</th>
                        <th>فوریت</th>
                        <th>سرپرست</th>
                        <th>مدیر عامل</th>
                        <th>اقدامات</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
@endsection
