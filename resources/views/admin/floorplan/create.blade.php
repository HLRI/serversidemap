@extends('admin.layouts.main')
@section('title', 'New Floorplan')

@section('css')
    {{-- <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" /> --}}
    <link href="{{ asset('admin/assets') }}/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />
    {{-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"> --}}
    <style>
        /* .row-pdf {
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .delete-row {
                    cursor: pointer;
                } */
    </style>
@endsection


@section('content')

    @include('admin.partials.alerts')
    <form action="{{ route('floorplans.store') }}" method="post">
        @csrf
        <div class="row clearfix">
            <div class="col-lg-8">
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
                        {{-- <div class="form-group">
                        <div class="form-line" id="excerpt">
                            <textarea name="excerpt" cols="30" rows="5" class="form-control" placeholder="excerpt"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea name="content" id="tinymce" class="content">
                        </textarea>
                    </div> --}}
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Floorplan Information</h2>
                    </div>
                    <div class="body">
                        <div class="form-group">
                            <label for="status">Status</label>
                            <select name="status" class="form-control show-tick">
                                <option value="">Select an option</option>
                                <option value="Sold_Out">Sold Out</option>
                                <option value="available">Available</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="suite_name" class="form-control" placeholder="Suite Name">
                            </div>
                        </div>
                        <div class="form-group">
                            <p><b>Beds</b></p>
                            <div id="beds"></div>
                            <div class="m-t-20 font-12"><b>Value: </b><span class="js-nouislider-value"></span></div>
                            <input type="hidden" class="value-input" name="beds">
                        </div>
                        <div class="form-group">
                            <p><b>Baths</b></p>
                            <div id="baths"></div>
                            <div class="m-t-20 font-12"><b>Value: </b><span class="js-nouislider-value"></span></div>
                            <input type="hidden" class="value-input" name="baths">
                        </div>
                        <div class="form-group">
                            <p><b>Size</b></p>
                            <div id="size"></div>
                            <div class="m-t-20 font-12"><b>Value: </b><span class="js-nouislider-value"></span></div>
                            <input type="hidden" class="value-input" name="size">
                        </div>

                        <div class="form-group">
                            <div class="demo-switch-title">Studio</div>
                            <div class="switch">
                                <label><input type="checkbox" name="studio"><span
                                        class="lever switch-col-green"></span></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="View">
                                <input type="text" name="view" class="form-control" placeholder="View">
                            </div>
                        </div>
                        <div class="form-group">
                            <p><b>Interior Size</b></p>
                            <div id="interior-size"></div>
                            <div class="m-t-20 font-12"><b>Value: </b><span class="js-nouislider-value"></span></div>
                            <input type="hidden" class="value-input" name="interior_size">
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="floor_range">
                                <input type="text" name="floor_range" class="form-control" placeholder="Floor Range">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="price_from">
                                <input type="number" name="price_from" class="form-control" placeholder="Price (From)">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="price_per">
                                <input type="number" name="price_per" class="form-control" placeholder="Price Per Sq.Ft.">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="mt_fees_per_month">
                                <input type="text" name="mt_fees_per_month" class="form-control"
                                    placeholder="Mt. Fees per Month">
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Parking</h2>
                            <div class="demo-radio-button">
                                <input name="parking" type="radio" id="parking1" class="radio-col-light-green"
                                    checked />
                                <label for="parking1">Yes</label>
                                <input name="parking" type="radio" id="parking2" class="radio-col-light-green" />
                                <label for="parking2">No</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">EV Parking</h2>
                            <div class="demo-radio-button">
                                <input name="ev_parking" type="radio" id="ev_parking1" class="radio-col-light-green"
                                    checked />
                                <label for="ev_parking1">Yes</label>
                                <input name="ev_parking" type="radio" id="ev_parking2"
                                    class="radio-col-light-green" />
                                <label for="ev_parking2">No</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="balcony_sqft">
                                <input type="text" name="balcony_sqft" class="form-control"
                                    placeholder="Balcony Sqft.">
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Locker</h2>
                            <div class="demo-radio-button">
                                <input name="locker" type="radio" id="locker1" class="radio-col-light-green"
                                    checked />
                                <label for="locker1">Yes</label>
                                <input name="locker" type="radio" id="locker2" class="radio-col-light-green" />
                                <label for="locker2">No</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Deposit Structure</h2>
                            <textarea name="deposit_structure" id="tinymce" class="deposit">
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div class="body">
                        <div class="form-group">
                            <label for="status">Publish Status</label>
                            <select name="publish_status" class="form-control show-tick">
                                <option value="publish">Published</option>
                                <option value="draft">Draft</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-lg bg-green btn-block waves-effect">Save</button>
                    </div>
                </div>
                <div class="card">
                    <div class="body">
                        <input type="hidden" name="thumbnail" id="profile-photo">
                        {{-- <img src="" id="thumbnail-preview" style="display: none;width: 100%;margin-bottom: 10px"> --}}
                        <img src="" id="profile-photo-preview"
                            style="max-height:400px;width: 100%;margin-bottom: 10px">
                        <button onclick="filemanager.selectFile('profile-photo')" type="button"
                            class="btn bg-deep-grey btn-block waves-effect">
                            <i class="material-icons">image</i>
                            <span>Upload Image</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection

@section('js')
    <script src="{{ asset('admin/assets') }}/plugins/bootstrap-select/js/bootstrap-select.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/tinymce/tinymce.js"></script>
    <script src="{{ asset('admin/assets') }}/plugins/nouislider/nouislider.js"></script>

    {{-- <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script> --}}

    <script>
        $(function() {
            tinymce.init({
                selector: "textarea#tinymce",
                theme: "modern",
                height: 300,
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                    'searchreplace wordcount visualblocks visualchars code fullscreen',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons template paste textcolor colorpicker textpattern imagetools'
                ],
                toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                toolbar2: 'print preview media | forecolor backcolor emoticons',
                image_advtab: true,
                file_browser_callback: filemanager.tinyMceCallback
            });
            tinymce.suffix = ".min";
            tinyMCE.baseURL = '{{ asset('admin/assets') }}/plugins/tinymce';
        });


        // $('.js-example-basic-multiple').select2();

        // var map = new L.Map('map');
        // var Stamen_Terrain = L.tileLayer('https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        //     attribution: false,
        // }).addTo(map);
        // map.setView([43.70978025427102, -79.40341189038008], 12)
        // map.on('click', function(ev) {
        //     $('#lat').val(ev.latlng.lat);
        //     $('#lng').val(ev.latlng.lng);
        //     var coords = [];
        //     coords.push(ev.latlng.lat);
        //     coords.push(ev.latlng.lng);
        //     $('#coords').val(coords);
        //     if (typeof pin == "object") {
        //         pin.setLatLng(ev.latlng);
        //     } else {
        //         pin = L.marker(ev.latlng, {
        //             riseOnHover: true,
        //             draggable: true
        //         });
        //         pin.addTo(map);
        //         pin.on('drag', function(ev) {
        //             $('#lat').val(ev.latlng.lat);
        //             $('#lng').val(ev.latlng.lng);
        //             var coords = [];
        //             coords.push(ev.latlng.lat);
        //             coords.push(ev.latlng.lng);
        //             $('#coords').val(coords);
        //         });
        //     }
        // });

        // $('.leaflet-right .leaflet-control-attribution .leaflet-control').remove();

        // $('#add-pdf').click(function(e) {
        //     var uid = Math.floor(Math.random() * 10000000000);
        //     var content =
        //         "<div class=\"row-pdf\"><i class=\"material-icons col-pink delete-row\">delete</i><input type=\"text\" name=\"pdf_files[]\" id=\"upload-pdf_" +
        //         uid + "\"> <button onclick=\"filemanager.selectFile('upload-pdf_" +
        //         uid +
        //         "')\" type=\"button\" class=\"btn bg-deep-grey waves-effect\"> <i class=\"material-icons\">image</i> <span>Upload PDF</span> </button></div>";
        //     $('.wrap-pdf').append(content);
        // });

        // $(document).on('click', '.delete-row', (function() {
        //     $(this).parent().remove();
        // }));

        //noUISlider
        var sliderBasic = document.getElementById('beds');
        noUiSlider.create(sliderBasic, {
            start: [0],
            connect: 'lower',
            step: 0.5,
            range: {
                'min': [0],
                'max': [100]
            }
        });
        getNoUISliderValue(sliderBasic, false);

        var sliderBasic = document.getElementById('baths');
        noUiSlider.create(sliderBasic, {
            start: [0],
            connect: 'lower',
            step: 0.5,
            range: {
                'min': [0],
                'max': [100]
            }
        });
        getNoUISliderValue(sliderBasic, false);

        var sliderBasic = document.getElementById('size');
        noUiSlider.create(sliderBasic, {
            start: [0],
            connect: 'lower',
            step: 1,
            range: {
                'min': [0],
                'max': [20000]
            }
        });
        getNoUISliderValue(sliderBasic, true);

        var sliderBasic = document.getElementById('interior-size');
        noUiSlider.create(sliderBasic, {
            start: [0],
            connect: 'lower',
            step: 1,
            range: {
                'min': [0],
                'max': [20000]
            }
        });
        getNoUISliderValue(sliderBasic, true);

        //Get noUISlider Value and write on
        function getNoUISliderValue(slider, percentage) {
            slider.noUiSlider.on('update', function() {
                var val = slider.noUiSlider.get();
                if (percentage) {
                    val = parseInt(val);
                }
                $(slider).parent().find('span.js-nouislider-value').text(val);
                $(slider).parent().find('.value-input').val(val);
            });
        }
    </script>
@endsection
