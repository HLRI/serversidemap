@extends('layouts.app')

@section('content')
    {{-- <style>
        .info-send {
            background: orange;
            padding: 10px;
            margin: 10px auto;
            color: #000;
            text-align: center;
        }
    </style> --}}


    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <form action="{{ route('register') }}" method="post">
                    @csrf
                    <div class="card">
                        <div class="card-header">Register</div>

                        <div class="card-body">
                            <form method="POST" action="{{ route('register') }}" id="register">
                                @csrf
                                <div class="row mb-3">
                                    <label for="name" class="col-md-4 col-form-label text-md-end">
                                        First name and last name
                                    </label>

                                    <div class="col-md-6">
                                        <input id="name" type="text"
                                            class="form-control @error('name') is-invalid @enderror" name="name"
                                            value="{{ old('name') }}" required autocomplete="name" autofocus>

                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="username" class="col-md-4 col-form-label text-md-end">Username</label>

                                    <div class="col-md-6">
                                        <input id="username" type="username"
                                            class="form-control @error('username') is-invalid @enderror" name="username"
                                            value="{{ old('username') }}" required autocomplete="username">

                                        @error('username')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="email" class="col-md-4 col-form-label text-md-end">Email</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email"
                                            class="form-control @error('email') is-invalid @enderror" name="email"
                                            value="{{ old('email') }}" required autocomplete="email">

                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="phone" class="col-md-4 col-form-label text-md-end">Phone</label>

                                    <div class="col-md-6">
                                        <input id="phone" type="phone"
                                            class="form-control @error('phone') is-invalid @enderror" name="phone"
                                            value="{{ old('phone') }}" required autocomplete="phone">

                                        @error('phone')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="password" class="col-md-4 col-form-label text-md-end">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password"
                                            class="form-control @error('password') is-invalid @enderror" name="password"
                                            required autocomplete="new-password">

                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-end">Password confirm</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control"
                                            name="password_confirmation" required autocomplete="new-password">
                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-6">
                                        <button type="submit" class="btn btn-primary" id="send">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('js')
    {{-- <script>
        $('#register').submit(function(e) {
            $('.info-send').remove();
            $('.invalid-feedback').remove();
            $('#send').after('<div class="info-send">در حال ارسال اطلاعات ...</div>');
            e.preventDefault();
            $.ajax({
                url: '{{ route('register') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                dataType: 'json',
                data: $(this).serialize(),
                success: function(data) {
                    $('.info-send').text('اطلاعات با موفقیت ثبت شد');
                    location.reload();
                },
                error: function(reject) {
                    $('.info-send').text('ثبت اطلاعات با خطا مواجه شد!');
                    if (reject.status === 422) {
                        var errors = $.parseJSON(reject.responseText);
                        $.each(errors.errors, function(key, val) {
                            $("#" + key).after(
                                '<span class="invalid-feedback d-block" role="alert"> <strong>' +
                                val[0] + '</strong> </span>');;
                        });
                    }
                }
            });
        });
    </script> --}}
@endsection
