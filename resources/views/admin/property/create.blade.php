@extends('admin.layouts.main')
@section('title', 'New Property')

@section('css')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <link href="{{ asset('admin/assets') }}/plugins/bootstrap-select/css/bootstrap-select.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css">
    <style>
        .row-pdf {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .delete-row {
            cursor: pointer;
        }
    </style>
@endsection


@section('content')

    @include('admin.partials.alerts')
    <form action="{{ route('properties.store') }}" method="post">
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
                        <div class="form-group">
                            <div class="form-line" id="excerpt">
                                <textarea name="excerpt" cols="30" rows="5" class="form-control" placeholder="excerpt"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea name="content" id="tinymce" class="content">
                        </textarea>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Map Info</h2>
                    </div>
                    <div class="body">
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="available_floorplans" class="form-control"
                                    placeholder="Available Floorplans">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="address" class="form-control" placeholder="Address">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="street_address" class="form-control"
                                    placeholder="Street Address">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="pricepersqft" class="form-control" placeholder="Price per sqft">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="price" class="form-control" placeholder="Price">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="price_min" class="form-control" placeholder="Price Min">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="price_max" class="form-control" placeholder="Price Max">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="size_min" class="form-control" placeholder="Size Min">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="size_max" class="form-control" placeholder="Size Max">
                            </div>
                        </div>
                        {{-- <div class="form-group">
                            <label for="sales_type">Sales Type</label>
                            <select name="sales_type" class="form-control show-tick">
                                <option value="">Select an option</option>
                                <option value="Comming soon">Coming soon</option>
                                <option value="Preconstruction">Preconstruction</option>
                                <option value="Assignment">Assignment</option>
                                <option value="Resale">Resale</option>
                                <option value="SoldOut">Sold Out</option>
                            </select>
                        </div> --}}
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="min_bed" class="form-control" placeholder="Min Bed">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="max_bed" class="form-control" placeholder="Max Bed">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="min_bath" class="form-control" placeholder="Min Bath">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="max_bath" class="form-control" placeholder="Max Bath">
                            </div>
                        </div>
                        {{-- <div class="form-group">
                        <label for="">Type</label>
                        <select style="width: 100%" class="js-example-basic-multiple" name="states[]"
                            multiple="multiple">
                            <option value="Detached">Detached</option>
                            <option value="Freehold">Freehold</option>
                            <option value="TownHouse">TownHouse</option>
                            <option value="Condo">Condo</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div> --}}
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="min_price_sqft" class="form-control"
                                    placeholder="Min Price Sqft">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="max_price_sqft" class="form-control"
                                    placeholder="Max Price Sqft">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="sqft_avg" class="form-control" placeholder="Sqft Avg">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="number" name="occupancy" class="form-control" placeholder="Occupancy">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="demo-switch-title">Coming Soon</div>
                            <div class="switch">
                                <label><input type="checkbox" name="coming_soon"><span
                                        class="lever switch-col-green"></span></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="incentives">Incentives</label>
                            <select name="incentives[]" style="width: 100%" class="js-example-basic-multiple"
                                multiple="multiple">
                                <option value="Rental Program">Rental Program</option>
                                <option value="5% Deposit">5% Deposit</option>
                                <option value="10% Deposit">10% Deposit</option>
                                <option value="Monthly Payment Deposit">Monthly Payment Deposit</option>
                                <option value="Free Maintenance">Free Maintenance</option>
                                <option value="Free Parking and Locker">Free Parking and Locker</option>
                                <option value="Off Purchase Price">Off Purchase Price</option>
                                <option value="Upgrade Credit">Upgrade Credit</option>
                                <option value="Cash Back">Cash Back</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="comission_by_percent" class="form-control"
                                    placeholder="Comission By Percent">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="">
                                <input type="text" name="comission_by_flatfee" class="form-control"
                                    placeholder="Comission By Flatfee">
                            </div>
                        </div>
                        {{-- <div class="form-group">
                        <div class="form-line" id="">
                            <input type="text" class="form-control" placeholder="City">
                        </div>
                    </div> --}}
                        <div class="form-group">
                            <div class="demo-switch-title">Studio</div>
                            <div class="switch">
                                <label><input type="checkbox" name="studio"><span
                                        class="lever switch-col-green"></span></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Sales Status</label>
                            <select name="sales_status" class="form-control show-tick">
                                <option value="">Select an option</option>
                                <option value="coming soon">coming soon</option>
                                <option value="available">available</option>
                                <option value="sold out">sold out</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Project Status</h2>
                            <div class="demo-radio-button">
                                <input name="project_status" type="radio" id="project_status1"
                                    class="radio-col-light-green" checked />
                                <label for="project_status1">Open</label>
                                <input name="project_status" type="radio" id="project_status2"
                                    class="radio-col-light-green" />
                                <label for="project_status2">Close</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Coords</h2>
                            <div id="map" style="height:200px;width:100%;z-index: 10;"></div>
                            <div style="display: flex;align-items: center;gap: 20px;margin-top: 20px">
                                <label for="lat">Latitude</label><input type="text" name="lat"
                                    id="lat">
                                <label for="lng">Longitude</label><input type="text" name="lng"
                                    id="lng">
                                <input type="hidden" name="coords" id="coords">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="map_link">
                                <input type="url" name="map_link" class="form-control" placeholder="Link to Map">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="architect">
                                <input type="text" name="architect" class="form-control" placeholder="Architect">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="interior_designer">
                                <input type="text" name="interior_designer" class="form-control"
                                    placeholder="Interior Designer">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="floors">
                                <input type="number" name="floors" class="form-control" placeholder="Floors">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="suites">
                                <input type="number" name="suites" class="form-control" placeholder="Suites">
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
                            <div class="form-line" id="parking_price">
                                <input type="number" name="parking_price" class="form-control"
                                    placeholder="Parking Price">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="locker_price">
                                <input type="number" name="locker_price" class="form-control"
                                    placeholder="Locker Price">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="mt_fees">
                                <input type="number" name="mt_fees" class="form-control" placeholder="Monthly Fees">
                            </div>
                        </div>
                        <div class="form-group">
                            <h2 class="card-inside-title">Deposit Structure</h2>
                            <textarea name="deposit_structure" id="tinymce" class="deposit">
                        </textarea>
                        </div>
                        <div class="form-group">
                            <label for="substage">Sub Stage</label>
                            <select name="substage" class="form-control show-tick">
                                <option value="">Select an option</option>
                                <option value="Registering for Platinum Access">Registering for Platinum Access</option>
                                <option value="Launched Exclusive units in hand">Launched Exclusive units in hand</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="form-line" id="apps">
                                <input type="number" name="apps" class="form-control"
                                    placeholder="Average Price per SQFT">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">PDF File</label>
                            <div class="wrap-pdf">

                            </div>
                            <button type="button" class="btn bg-deep-grey waves-effect" id="add-pdf">+</button>
                        </div>
                        {{-- <div class="form-group">
                        <label for="unit_types">Unit Types</label>
                        <select name="unit_types" class="form-control show-tick">
                            <option value="studio">Studio</option>
                            <option value="3bedroom">3 Bedroom</option>
                        </select>
                    </div> --}}
                        <div class="form-group">
                            <div class="form-line" id="externalid">
                                <input type="number" name="externalid" class="form-control" placeholder="External ID">
                            </div>
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
                    <div class="header">
                        <h2>Floorplans</h2>
                    </div>
                    <div class="body">
                        <select name="floorplans[]" style="width: 100%" class="js-example-basic-multiple"
                            multiple="multiple">
                            @foreach ($floorplans as $floorplan)
                                <option value="{{ $floorplan->id }}">{{ $floorplan->title }}</option>
                            @endforeach
                        </select>
                        {{-- <div class="wrap-term">
                            @forelse ($floorplans as $floorplan)
                                <div class="term-item">
                                    <input name="floorplans[]" value="{{ $floorplan->id }}" type="checkbox"
                                        id="basic_checkbox_{{ $floorplan->id }}" class="filled-in" />
                                    <label for="basic_checkbox_{{ $floorplan->id }}">{{ $floorplan->title }}</label>
                                </div>
                            @empty
                                No Result
                            @endforelse
                        </div> --}}
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Cities</h2>
                    </div>
                    <div class="body">
                        <select name="city" style="width: 100%" class="js-example-basic-multiple">
                            @foreach ($cities as $city)
                                <option value="{{ $city->id }}">{{ $city->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Neighborhoods</h2>
                    </div>
                    <div class="body">
                        <select name="neighborhood" style="width: 100%" class="js-example-basic-multiple">
                            @foreach ($neighborhoods as $neighborhood)
                                <option value="{{ $neighborhood->id }}">{{ $neighborhood->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Groups</h2>
                    </div>
                    <div class="body">
                        <select name="group" style="width: 100%" class="js-example-basic-multiple">
                            @foreach ($groups as $group)
                                <option value="{{ $group->id }}">{{ $group->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Developers</h2>
                    </div>
                    <div class="body">
                        <select name="developers[]" style="width: 100%" class="js-example-basic-multiple" multiple="multiple">
                            @foreach ($developers as $developer)
                                <option value="{{ $developer->id }}">{{ $developer->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Sales Teams</h2>
                    </div>
                    <div class="body">
                        <select name="salesteam" style="width: 100%" class="js-example-basic-multiple">
                            @foreach ($salesteams as $salesteam)
                                <option value="{{ $salesteam->id }}">{{ $salesteam->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Types</h2>
                    </div>
                    <div class="body">
                        <select name="types[]" style="width: 100%" class="js-example-basic-multiple" multiple="multiple">
                            @foreach ($types as $type)
                                <option value="{{ $type->id }}">{{ $type->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="header">
                        <h2>Stages</h2>
                    </div>
                    <div class="body">
                        <select name="stage" style="width: 100%" class="js-example-basic-multiple">
                            @foreach ($stages as $stage)
                                <option value="{{ $stage->id }}">{{ $stage->title }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="card">
                    <div class="body">
                        <input type="hidden" name="thumbnail" id="profile-photo">
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
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/leaflet.js"></script>

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


        $('.js-example-basic-multiple').select2({
            'placeholder': 'Select an option'
        });

        var map = new L.Map('map');
        var Stamen_Terrain = L.tileLayer('https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            attribution: false,
        }).addTo(map);
        map.setView([43.70978025427102, -79.40341189038008], 12)
        map.on('click', function(ev) {
            $('#lat').val(ev.latlng.lat);
            $('#lng').val(ev.latlng.lng);
            var coords = [];
            coords.push(ev.latlng.lat);
            coords.push(ev.latlng.lng);
            $('#coords').val(coords);
            if (typeof pin == "object") {
                pin.setLatLng(ev.latlng);
            } else {
                pin = L.marker(ev.latlng, {
                    riseOnHover: true,
                    draggable: true
                });
                pin.addTo(map);
                pin.on('drag', function(ev) {
                    $('#lat').val(ev.latlng.lat);
                    $('#lng').val(ev.latlng.lng);
                    var coords = [];
                    coords.push(ev.latlng.lat);
                    coords.push(ev.latlng.lng);
                    $('#coords').val(coords);
                });
            }
        });

        $('.leaflet-right .leaflet-control-attribution .leaflet-control').remove();

        $('#add-pdf').click(function(e) {
            var uid = Math.floor(Math.random() * 10000000000);
            var content =
                "<div class=\"row-pdf\"><i class=\"material-icons col-pink delete-row\">delete</i><input type=\"text\" name=\"pdf_files[]\" id=\"upload-pdf_" +
                uid + "\"> <button onclick=\"filemanager.selectFile('upload-pdf_" +
                uid +
                "')\" type=\"button\" class=\"btn bg-deep-grey waves-effect\"> <i class=\"material-icons\">image</i> <span>Upload PDF</span> </button></div>";
            $('.wrap-pdf').append(content);
        });

        $(document).on('click', '.delete-row', (function() {
            $(this).parent().remove();
        }));
    </script>
@endsection
