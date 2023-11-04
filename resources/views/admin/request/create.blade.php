@extends('admin.layouts.main')
@section('title', 'ایجاد درخواست جدید')

@section('css')
    <link href="{{ asset('css/theme.css') }}" media="all" rel="stylesheet" type="text/css" />
    <link href="{{ asset('css/fileinput.css') }}" media="all" rel="stylesheet" type="text/css" />

@endsection

@section('content')

    @include('admin.partials.alerts')


    <form id="document_form" enctype="multipart/form-data">
        <div class="row">
            <div class="col-lg-8">
                <div class="form-group">
                    <label for="">عنوان</label>
                    <input id="title" name="title" type="text" class="form-control" placeholder="عنوان درخواست">
                </div>
            </div>
            <div class="col-lg-4">
                <div class="form-group">
                    <label for="">فوریت</label>
                    <select class="form-control" name="urgency" id="">
                        <option value="0">معمولی</option>
                        <option value="1">فوری</option>
                        <option value="2">آنی</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <textarea id="content"
                        style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <div class="row" style="margin-top: 8px">
                        <div class="col-xs-12 col-lg-12">
                            <div class="card">
                                <div class="header">
                                    <h5>
                                        فایل های ضمیمه
                                    </h5>
                                </div>
                                <div class="body">
                                    <div class="row clearfix">
                                        <div class="col-lg-12">
                                            <input type="file" name="documents" class="form-control file"
                                                data-overwrite-initial="false" data-theme="fas" multiple="multiple"
                                                id="photos">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-left" style="margin-top: 10px">
            <button type="submit" class="btn btn-success" id="send">ارسال</button>
        </div>
    </form>

@endsection


@section('js')
    <script src="{{ asset('js/fileinput.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/fa.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/theme.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/fas-theme.js') }}" type="text/javascript"></script>
    <script>
        tinymce.init({
            selector: 'textarea#content',
            plugins: 'advlist autolink link lists preview table code pagebreak',
            menubar: false,
            language: 'fa',
            height: 300,
            relative_urls: false,
            toolbar: 'undo redo | removeformat preview code | fontsizeselect bullist numlist | alignleft aligncenter alignright alignjustify | bold italic | pagebreak table link',
        });

        $("#photos").fileinput({

            showCaption: false,
            showUpload: false,
            required: false,
            theme: 'fas',
            language: 'fa',
            showBrowse: false,
            browseOnZoneClick: true,
            // request:true,
            // uploadUrl: "",
            // uploadExtraData:function () {
            //     return {
            //         _token:$("input[name='_token']").val()
            //     };
            // },
            allowedFileExtensions: ['jpg', 'jpeg', 'png', 'pdf'],
            overwriteInitial: false,
            // maxFileSize:1000,
            slugCallback: function(filename) {
                return filename.replace('(', '_').replace(']', '_');
            }

        }).on('filepreupload', function(event, data, previewId, index) {
            // console.log(data);
        });

        $('#document_form').submit(function(e) {
            $('.info-send').remove();
            $('.invalid-feedback').remove();
            $('#send').after('<div class="info-send">در حال ارسال اطلاعات ...</div>');
            e.preventDefault();
            var formData = new FormData(this);

            let TotalFiles = $('#photos')[0].files.length; //Total files
            let files = $('#photos')[0];
            for (let i = 0; i < TotalFiles; i++) {
                formData.append('files' + i, files.files[i]);
            }
            formData.append('TotalFiles', TotalFiles);
            formData.append('content', tinyMCE.activeEditor.getContent());
            $.ajax({
                url: '{{ route('requests.store') }}',
                type: 'post',
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                cache: false,
                contentType: false,
                processData: false,
                dataType: 'json',
                data: formData,
                success: function(data) {
                    $('.info-send').text('اطلاعات با موفقیت ثبت شد');
                },
                error: function(reject) {
                    $('.info-send').text('ثبت اطلاعات با خطا مواجه شد!');

                    if (reject.status === 422) {
                        var errors = $.parseJSON(reject.responseText);
                        $.each(errors.errors, function(key, val) {
                            $("#" + key).after(
                                '<span class="invalid-feedback d-block text-danger" role="alert"> <strong>' +
                                val[0] + '</strong> </span>');;
                        });
                    }
                }
            });
        });
    </script>
@endsection
