<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hlric Map</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('css/plugins/leaflet.css') }}">
    <link rel="stylesheet" href="{{ asset('css/plugins/fontawesome-free-6.2.0-web/css/all.min.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('css/plugins/L.Control.Locate.css') }}"> --}}
    {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" /> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/MarkerCluster.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/MarkerCluster.Default.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/leaflet-search.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('css/plugins/jquery-ui.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('css/plugins/easy-button.css') }}"> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/plugins/Control.FullScreen.min.css') }}"> --}}
    {{-- <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" /> --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/plugins/switcher.css') }}"> --}}
    {{-- <link rel="stylesheet" type="text/css"
        href="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.css"> --}}
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

<body>
    <div class="container-fluid">
        <div class="row">

        </div>
        <div class="mb-3 wrap-filter-menu scrolling-wrapper row flex-row flex-nowrap">
            <button class="hlr-btn hlr-btn-grey" data-bs-toggle="modal" data-bs-target="#price-range"><i class="fa-solid fa-filter-list"></i> Price
                Range</button>
            <button class="hlr-btn hlr-btn-grey" data-bs-toggle="modal" data-bs-target="#suite-size"><i class="fa-solid fa-filter-list"></i> Suite Size</button>
            <button class="hlr-btn hlr-btn-grey" data-bs-toggle="modal" data-bs-target="#beds-modal"><i class="fa-solid fa-filter-list"></i> Beds</button>
            <button class="hlr-btn hlr-btn-grey" data-bs-toggle="modal" data-bs-target="#baths-modal"><i class="fa-solid fa-filter-list"></i> Baths</button>
            <button class="hlr-btn hlr-btn-grey" data-bs-toggle="modal" data-bs-target="#occupancy-modal"><i class="fa-solid fa-filter-list"></i> Occupancy</button>
            <button class="hlr-btn hlr-btn-red" data-bs-toggle="modal" data-bs-target="#price-range"><i class="fa fa-refresh"></i> Reset
                Filters</button>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div id="map"></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-body"> <b>Result</b> : 754 items were found</div>
                </div>
                <div class="wrap-side-cards">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="wrap-card-content">
                                <img src="https://condoy.com/wp-content/uploads/2023/09/010920231693584885.jpeg">
                                <div class="card-content">
                                    <h3 class="card-title">3291 Kingston Road Condos</h3>
                                    <span class="card-price">$294,900 to $829,900</span>
                                    <span class="card-size">270 to 1432 sq.ft | 2020</span>
                                    <span class="card-address mt-3">2815 Kingston Rd, Scarborough, ON M1M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="wrap-card-content">
                                <img src="https://condoy.com/wp-content/uploads/2023/09/010920231693584885.jpeg">
                                <div class="card-content">
                                    <h3 class="card-title">3291 Kingston Road Condos</h3>
                                    <span class="card-price">$294,900 to $829,900</span>
                                    <span class="card-size">270 to 1432 sq.ft | 2020</span>
                                    <span class="card-address mt-3">2815 Kingston Rd, Scarborough, ON M1M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="wrap-card-content">
                                <img src="https://condoy.com/wp-content/uploads/2023/09/010920231693584885.jpeg">
                                <div class="card-content">
                                    <h3 class="card-title">3291 Kingston Road Condos</h3>
                                    <span class="card-price">$294,900 to $829,900</span>
                                    <span class="card-size">270 to 1432 sq.ft | 2020</span>
                                    <span class="card-address mt-3">2815 Kingston Rd, Scarborough, ON M1M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="wrap-card-content">
                                <img src="https://condoy.com/wp-content/uploads/2023/09/010920231693584885.jpeg">
                                <div class="card-content">
                                    <h3 class="card-title">3291 Kingston Road Condos</h3>
                                    <span class="card-price">$294,900 to $829,900</span>
                                    <span class="card-size">270 to 1432 sq.ft | 2020</span>
                                    <span class="card-address mt-3">2815 Kingston Rd, Scarborough, ON M1M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="wrap-card-content">
                                <img src="https://condoy.com/wp-content/uploads/2023/09/010920231693584885.jpeg">
                                <div class="card-content">
                                    <h3 class="card-title">3291 Kingston Road Condos</h3>
                                    <span class="card-price">$294,900 to $829,900</span>
                                    <span class="card-size">270 to 1432 sq.ft | 2020</span>
                                    <span class="card-address mt-3">2815 Kingston Rd, Scarborough, ON M1M</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="price-range" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Price Range</h1>
                </div>
                <div class="modal-body px-5">
                    <input class="border-0 mb-2" type="text" id="amount" readonly>
                    <div id="slider-range"></div>
                    <div class="price form-wrap-range">
                        <input min="200000" class="min" type="text" placeholder="min">
                        <input max="10000000" class="max" type="text" placeholder="max">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="hlr-btn hlr-btn-red" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="hlr-btn hlr-btn-green">Set Filter</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="suite-size" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Suite Size</h1>
                </div>
                <div class="modal-body px-5">
                    <input class="border-0 mb-2" type="text" id="suitesize" readonly>
                    <div id="slider-range-suitesize"></div>
                    <div class="suitesize form-wrap-range">
                        <input min="200000" class="min" type="text" placeholder="min">
                        <input max="10000000" class="max" type="text" placeholder="max">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="hlr-btn hlr-btn-red" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="hlr-btn hlr-btn-green">Set Filter</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="beds-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Beds</h1>
                </div>
                <div class="modal-body px-5">
                    <input class="border-0 mb-2" type="text" id="beds" readonly>
                    <div id="slider-range-beds"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="hlr-btn hlr-btn-red" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="hlr-btn hlr-btn-green">Set Filter</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="baths-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Baths</h1>
                </div>
                <div class="modal-body px-5">
                    <input class="border-0 mb-2" type="text" id="baths"
                    readonly>
                <div id="slider-range-baths"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="hlr-btn hlr-btn-red" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="hlr-btn hlr-btn-green">Set Filter</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="occupancy-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Occupancy</h1>
                </div>
                <div class="modal-body px-5">
                    <input class="border-0 mb-2" type="text" id="occupancy"
                    readonly>
                <div id="slider-range-occupancy"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="hlr-btn hlr-btn-red" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="hlr-btn hlr-btn-green">Set Filter</button>
                </div>
            </div>
        </div>
    </div>


    <script src="{{ asset('js/plugins/jquery-3.6.0.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    <script src="{{ asset('js/plugins/jquery-ui.js') }}"></script>
    <script src="{{ asset('js/plugins/leaflet.js') }}"></script>
    {{-- <script src="{{ asset('js/leaflet.markercluster-src.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/plugins/easy-button.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/leaflet-search.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/L.Control.Locate.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/plugins/leaflet.draw.js') }}"></script> --}}
    {{-- <script src="{{ asset('js/plugins/wise-leaflet-pip.js') }}"></script> --}}

    {{-- <script>
        var url = <?= "'" . asset('img/gallery-placeholder-square.jpg') . "'" ?>;
        var url_icon = <?= "'" . asset('img/mark.png') . "'" ?>;
        var getFilter_url = <?= "'" . route('getFilter') . "'" ?>;
    </script> --}}

    <script src="{{ asset('js/plugins/Control.FullScreen.js') }}"></script>
    <script src="{{ asset('js/plugins/sweetalert2@11.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script src="{{ asset('js/plugins/checkboxselect2.js') }}"></script>
    <script src="{{ asset('js/json-format-convert.js') }}"></script>
    <script src="{{ asset('js/multi-selection.js') }}"></script>
    <script src="{{ asset('js/plugins/jquery.switcher.min.js') }}"></script>
    <script src="{{ asset('js/search-floorplans.js') }}"></script>
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet/0.0.1-beta.5/esri-leaflet.js"></script>
    <script src="https://cdn-geoweb.s3.amazonaws.com/esri-leaflet-geocoder/0.0.1-beta.5/esri-leaflet-geocoder.js"></script>
    <script src="{{ asset('js/filter-map.js') }}"></script>
    <script src="{{ asset('js/filters-scripts.js') }}"></script>
    <script src="{{ asset('js/make-layers.js') }}"></script>
    <script src="{{ asset('js/init.js') }}"></script>
    <script src="{{ asset('js/myscript.js') }}"></script>
</body>

</html>
