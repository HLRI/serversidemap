$("#slider-range").slider({
    range: true,
    step:50000,
    min: 200000,
    max: 3000000,
    values: [200000, 3000000],
    slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0].toLocaleString() + " - $" +(ui.values[1] === 3000000 ? ui.values[1].toLocaleString() + "+" : " - $" + ui.values[1].toLocaleString()));

        $(".price .min").val(ui.values[0]);
        $(".price .max").val(ui.values[1]);
    },
    change: function (event, ui) {
        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        // for tailwind
        $(this).parents().eq(1).find('.btn-light').addClass('btn-light-blue');

        // $(this).parents().eq(1).find('.btn-light').addClass('custom-btn-blue');
        $(this).parents().eq(1).find('.crange').html("$" + from.toLocaleString() + " - $" + (to === 3000000 ? to.toLocaleString() + "+" : " - $" + to.toLocaleString()));
        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };

        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'price', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'price', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'price', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'price', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'price', [from, to], 'on');

        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;

        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#amount").val("$" + $("#slider-range").slider("values", 0).toLocaleString() +
    " - $" + $("#slider-range").slider("values", 1).toLocaleString());


$("#slider-range-suitesize").slider({
    range: true,
    step:10,
    min: 0,
    max: 10000,
    values: [0, 10000],
    slide: function (event, ui) {
        $("#suitesize").val(ui.values[0] + " sq.ft - " + (ui.values[1] === 10000 ? ui.values[1] + "+ sq.ft" : ui.values[1] + " sq.ft"));
        $(".suitesize .min").val(ui.values[0]);
        $(".suitesize .max").val(ui.values[1]);
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        if (localforage.getItem("Commercial")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        // for tailwind
        $(this).parents().eq(1).find('.btn-light').addClass('btn-light-blue');

        // $(this).parents().eq(1).find('.btn-light').addClass('custom-btn-blue');
        $(this).parents().eq(1).find('.crange').html(from + " sq.ft - " + (to === 10000 ? to + "+ sq.ft" : to + " sq.ft"));
        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };
        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'size', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'size', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'size', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'size', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'size', [from, to], 'on');
        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#suitesize").val($("#slider-range-suitesize").slider("values", 0) + " sq.ft - " + ($("#slider-range-suitesize").slider("values", 1) === 10000 ? $("#slider-range-suitesize").slider("values", 1) + "+ sq.ft" : $("#slider-range-suitesize").slider("values", 1) + " sq.ft"));


$("#slider-range-beds").slider({
    range: true,
    step: .5,
    min: 0,
    max: 10,
    values: [0, 10],
    slide: function (event, ui) {
        $("#beds").val(ui.values[0] + " beds - " + ui.values[1] + ' beds');
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        // for tailwind
        $(this).parents().eq(1).find('.btn-light').addClass('btn-light-blue');

        // $(this).parents().eq(1).find('.btn-light').addClass('custom-btn-blue');
        $(this).parents().eq(1).find('.crange').html(from + " beds - " + to + ' beds');

        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };
        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'bed', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'bed', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'bed', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'bed', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'bed', [from, to], 'on');
        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#beds").val($("#slider-range-beds").slider("values", 0) + " beds - " +
    $("#slider-range-beds").slider("values", 1) + " beds");



$("#slider-range-baths").slider({
    range: true,
    step: .5,
    min: 0,
    max: 10,
    values: [0, 10],
    slide: function (event, ui) {
        $("#baths").val(ui.values[0] + " baths - " + ui.values[1] + ' baths');
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        // for tailwind
        $(this).parents().eq(1).find('.btn-light').addClass('btn-light-blue');

        // $(this).parents().eq(1).find('.btn-light').addClass('custom-btn-blue');
        $(this).parents().eq(1).find('.crange').html(from + " baths - " + to + ' baths');

        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };
        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'bath', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'bath', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'bath', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'bath', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'bath', [from, to], 'on');
        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#baths").val($("#slider-range-baths").slider("values", 0) + " baths - " +
    $("#slider-range-baths").slider("values", 1) + " baths");


$("#slider-range-occupancy").slider({
    range: true,
    min: 2023,
    max: 2035,
    values: [2023, 2035],
    slide: function (event, ui) {
        $("#occupancy").val("" + ui.values[0] + " - " + ui.values[1]);
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        // for tailwind
        $(this).parents().eq(1).find('.btn-light').addClass('btn-light-blue');

        // $(this).parents().eq(1).find('.btn-light').addClass('custom-btn-blue');
        $(this).parents().eq(1).find('.crange').html(from + ' - ' + to);

        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };

        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'occupancy', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'occupancy', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'occupancy', [from, to], 'on');
        // result4 = filter.set(queries, 'resale', 'occupancy', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'occupancy', [from, to], 'on');

        var result = result1.concat(result2).concat(result3).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');
        ListGetBounds();
        checkIsLayer();
    }
});
$("#occupancy").val("" + $("#slider-range-occupancy").slider("values", 0) +
    " - " + $("#slider-range-occupancy").slider("values", 1));


$("#slider-range-percent").slider({
    range: true,
    min: 0,
    max: 20,
    values: [0, 20],
    slide: function (event, ui) {
        $("#percent").val("%" + ui.values[0] + " - %" + ui.values[1]);
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        $('#Comission').removeClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).addClass('btn-light-blue');
        $('#Comission').html('%' + from + ' - %' + to);

        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };
        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'percent', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'percent', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'percent', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'percent', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'percent', [from, to], 'on');
        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#percent").val("%" + $("#slider-range-percent").slider("values", 0) +
    " - %" + $("#slider-range-percent").slider("values", 1));


$("#slider-range-flatfee").slider({
    range: true,
    min: 0,
    max: 90000000,
    values: [0, 90000000],
    slide: function (event, ui) {
        $("#flatfee").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
    change: function (event, ui) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var from = ui.values[0];
        var to = ui.values[1];
        var result1, result2, result3, result4, result5;

        $('#Comission').removeClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).addClass('btn-light-blue');
        $('#Comission').html('$' + from + ' - $' + to + ' Comm');

        var queries = {
            min_price: "price_from",
            max_price: "price_to",
            min_bath: "bath_from",
            max_bath: "bath_to",
            min_size: "size_from",
            max_size: "size_to",
            min_bed: "bed_from",
            max_bed: "bed_to",
            occupancy: "occupancy",
            comission_by_percent: "percent",
            comission_by_flatfee: "flatfee",
        };
        var filter = new FilterMap();
        result1 = filter.set(queries, 'assignment', 'flatfee', [from, to], 'on');
        result2 = filter.set(queries, 'preconstruction', 'flatfee', [from, to], 'on');
        result3 = filter.set(queries, 'comingsoon', 'flatfee', [from, to], 'on');
        result4 = filter.set(queries, 'resale', 'flatfee', [from, to], 'on');
        result5 = filter.set(queries, 'soldout', 'flatfee', [from, to], 'on');
        var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

        var format = new FeatureFormat();
        var jsonFormat = format.convert(result);

        clusteredPoints.clearLayers();
        var info = jsonFormat;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});
$("#flatfee").val("$" + $("#slider-range-flatfee").slider("values", 0) +
    " - $" + $("#slider-range-flatfee").slider("values", 1));
