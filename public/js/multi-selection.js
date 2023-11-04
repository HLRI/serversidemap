

$('#sales_type').change(function (e) {



    if (localforage.getItem("statusReset")) {
        return
    }

    var result;
    var types = $('#types').val();
    var incentives = $('#incentives').val();

    const queryStrings = new URLSearchParams(location.search);
    queryStrings.set('sales_type', $(this).val());
    window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

    // if (isParamUrl()) {
    //     var data = getFilterDataJson();
    // } else {
    //     var data = localforage.getItem("data_reserve");
    // }

    // const urlParams = new URLSearchParams(window.location.search);
    // if (urlParams.get('coming_soon')) {
    //     if (urlParams.get('coming_soon') == 'true') {
    //         var PQ = new jsonQ(data);
    //         var switch_result = PQ.from('info').where('coming_soon', '=', true).fetch();
    //         switch_result = { info: switch_result };
    //         var Q = new jsonQ(switch_result);
    //     } else {
    //         var PQ = new jsonQ(data);
    //         var switch_result = PQ.from('info').where('coming_soon', '=', false).fetch();
    //         switch_result = { info: switch_result };
    //         var Q = new jsonQ(switch_result);
    //     }
    // } else {
    //     var Q = new jsonQ(data);
    // }


    // if ($(this).val().length == 0 && types.length == 0) {
    //     result = Q.from('info').fetch();
    // } else if ($(this).val().length != 0 && types.length != 0) {
    //     result = Q.from('info').whereIn('sales_type', $(this).val()).whereIn('type', types).fetch();
    // } else if ($(this).val().length != 0) {
    //     result = Q.from('info').whereIn('sales_type', $(this).val()).fetch();
    // } else if (types.length != 0) {
    //     result = Q.from('info').whereIn('type', types).fetch();
    // }

    if ($(this).val().length == 0 && types.length == 0 && incentives.length == 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if ($(this).val().length != 0 && types.length != 0 && incentives.length != 0) {
        makeData();
        getResultTypes(types);
        getResultIncentives(incentives);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', $(this).val()).fetch();
    } else if (types.length != 0 && $(this).val().length != 0) {
        makeData();
        getResultTypes(types);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', $(this).val()).fetch();
    } else if ($(this).val().length != 0 && incentives.length != 0) {
        makeData();
        getResultIncentives(incentives);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', $(this).val()).fetch();
    } else if (incentives.length != 0 && types.length != 0) {
        makeData();
        getResultTypes(types);
        getResultIncentives(incentives);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if ($(this).val().length != 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', $(this).val()).fetch();
    } else if (types.length != 0) {
        makeData();
        getResultTypes(types);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if (incentives.length != 0) {
        makeData();
        getResultIncentives(incentives)
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    }

    var jsonFormat = { info: result };
    localforage.setItem("mapInfo", JSON.stringify(jsonFormat));

    var jsonFormatNew = {
        type: "FeatureCollection",
        features: [],
    };
    $.each(result, function (index, value) {
        var lat = value['coords'][0];
        var lng = value['coords'][1];
        jsonFormatNew['features'].push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: {
                    0: lat,
                    1: lng
                }
            },
            properties: value
        });
    });

    clusteredPoints.clearLayers();
    var info = jsonFormatNew;
    var layermap = new LayerMap();
        layermap.make(info);

    total_result = 0;
    points = [];
    $('#map-data').html('');

    ListGetBounds();
    checkIsLayer();
});

$('#types').change(function (e) {

    if (localforage.getItem("statusReset")) {
        return
    }

    if ($(this).val().includes("Commercial")) {
        localforage.setItem("Commercial", true);
        $("#suitesize").val(0 + " - " + 100000);
        $("#slider-range-suitesize").slider({
            range: true,
            min: 0,
            max: 100000,
            values: [0, 100000]
        })
        localforage.removeItem("Commercial");
    }else{
        localforage.setItem("Commercial", true);
        $("#suitesize").val(0 + " - " + 10000);
        $("#slider-range-suitesize").slider({
            range: true,
            min: 0,
            max: 10000,
            values: [0, 10000]
        })
        localforage.removeItem("Commercial");
    }


    var result;
    var sales_type = $('#sales_type').val();
    var incentives = $('#incentives').val();

    const queryStrings = new URLSearchParams(location.search);
    queryStrings.set('types', $(this).val());
    window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

    // if (isParamUrl()) {
    //     var data = getFilterDataJson();
    // } else {
    //     var data = localforage.getItem("data_reserve");
    // }

    // const urlParams = new URLSearchParams(window.location.search);
    // if (urlParams.get('coming_soon')) {
    //     if (urlParams.get('coming_soon') == 'true') {
    //         var PQ = new jsonQ(data);
    //         var switch_result = PQ.from('info').where('coming_soon', '=', true).fetch();
    //         switch_result = { info: switch_result };
    //         var Q = new jsonQ(switch_result);
    //     } else {
    //         var PQ = new jsonQ(data);
    //         var switch_result = PQ.from('info').where('coming_soon', '=', false).fetch();
    //         switch_result = { info: switch_result };
    //         var Q = new jsonQ(switch_result);
    //     }
    // } else {
    //     var Q = new jsonQ(data);
    // }

    // if ($(this).val().length == 0 && sales_type.length == 0) {
    //     result = Q.from('info').fetch();
    // } else if ($(this).val().length != 0 && sales_type.length != 0) {
    //     result = Q.from('info').whereIn('type', $(this).val()).whereIn('sales_type', sales_type).fetch();
    // } else if ($(this).val().length != 0) {
    //     result = Q.from('info').whereIn('type', $(this).val()).fetch();
    // } else if (sales_type.length != 0) {
    //     result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    // }

    if ($(this).val().length == 0 && sales_type.length == 0 && incentives.length == 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if ($(this).val().length != 0 && sales_type.length != 0 && incentives.length != 0) {
        makeData();
        getResultIncentives(incentives);
        getResultTypes($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if (sales_type.length != 0 && $(this).val().length != 0) {
        makeData();
        getResultTypes($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if ($(this).val().length != 0 && incentives.length != 0) {
        makeData();
        getResultIncentives(incentives);
        getResultTypes($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if (incentives.length != 0 && sales_type.length != 0) {
        makeData();
        getResultIncentives(incentives);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if ($(this).val().length != 0) {
        makeData();
        getResultTypes($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if (sales_type.length != 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if (incentives.length != 0) {
        makeData();
        getResultIncentives(incentives);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    }

    var jsonFormat = { info: result };
    localforage.setItem("mapInfo", JSON.stringify(jsonFormat));

    var jsonFormatNew = {
        type: "FeatureCollection",
        features: [],
    };
    $.each(result, function (index, value) {
        var lat = value['coords'][0];
        var lng = value['coords'][1];
        jsonFormatNew['features'].push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: {
                    0: lat,
                    1: lng
                }
            },
            properties: value
        });
    });

    clusteredPoints.clearLayers();
    var info = jsonFormatNew;
    var layermap = new LayerMap();
        layermap.make(info);

    total_result = 0;
    points = [];
    $('#map-data').html('');

    ListGetBounds();
    checkIsLayer();
});

$('#incentives').change(function (e) {

    if (localforage.getItem("statusReset")) {
        return
    }

    var result;
    var sales_type = $('#sales_type').val();
    var types = $('#types').val();

    const queryStrings = new URLSearchParams(location.search);
    queryStrings.set('incentives', $(this).val());
    window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

    if ($(this).val().length == 0 && sales_type.length == 0 && types.length == 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if ($(this).val().length != 0 && sales_type.length != 0 && types.length != 0) {
        makeData();
        getResultTypes(types);
        getResultIncentives($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if (sales_type.length != 0 && types.length != 0) {
        makeData();
        getResultTypes(types)
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if ($(this).val().length != 0 && types.length != 0) {
        makeData();
        getResultTypes(types);
        getResultIncentives($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if ($(this).val().length != 0 && sales_type.length != 0) {
        makeData();
        getResultIncentives($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if ($(this).val().length != 0) {
        makeData();
        var Q = getResultIncentives($(this).val());
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    } else if (sales_type.length != 0) {
        makeData();
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').whereIn('sales_type', sales_type).fetch();
    } else if (types.length != 0) {
        makeData();
        getResultTypes(types);
        var Q = new jsonQ(localforage.getItem("result"));
        result = Q.from('info').fetch();
    }

    var jsonFormat = { info: result };
    localforage.setItem("mapInfo", JSON.stringify(jsonFormat));

    var jsonFormatNew = {
        type: "FeatureCollection",
        features: [],
    };
    $.each(result, function (index, value) {
        var lat = value['coords'][0];
        var lng = value['coords'][1];
        jsonFormatNew['features'].push({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: {
                    0: lat,
                    1: lng
                }
            },
            properties: value
        });
    });

    clusteredPoints.clearLayers();
    var info = jsonFormatNew;
    var layermap = new LayerMap();
        layermap.make(info);

    total_result = 0;
    points = [];
    $('#map-data').html('');

    ListGetBounds();
    checkIsLayer();
});

$('#switch-comming-soon').on('click', function () {

    if (this.checked) {

        if (localforage.getItem("statusReset")) {
            return
        }

        var result;

        const queryStrings = new URLSearchParams(location.search);
        queryStrings.set('coming_soon', true);
        window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

        if (isParamUrl()) {
            var data = getFilterDataJson();
        } else {
            var data = localforage.getItem("data_reserve");
        }

        var PQ = new jsonQ(data);

        var switch_result = PQ.from('info').where('coming_soon', '=', true).fetch();
        switch_result = { info: switch_result };
        var Q = new jsonQ(switch_result);

        const urlParams = new URLSearchParams(window.location.search);

        if (!urlParams.get('sales_type') && !urlParams.get('types')) {
            result = Q.from('info').fetch();
        } else if (urlParams.get('sales_type') && urlParams.get('types')) {
            result = Q.from('info').whereIn('type', urlParams.get('types').split(',')).whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
        } else if (urlParams.get('sales_type')) {
            result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
        } else if (urlParams.get('types')) {
            result = Q.from('info').whereIn('type', urlParams.get('types').split(',')).fetch();
        }

        var jsonFormat = { info: result };
        localforage.setItem("mapInfo", JSON.stringify(jsonFormat));

        var jsonFormatNew = {
            type: "FeatureCollection",
            features: [],
        };
        $.each(result, function (index, value) {
            var lat = value['coords'][0];
            var lng = value['coords'][1];
            jsonFormatNew['features'].push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: {
                        0: lat,
                        1: lng
                    }
                },
                properties: value
            });
        });

        clusteredPoints.clearLayers();
        var info = jsonFormatNew;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    } else {

        if (localforage.getItem("statusReset")) {
            return
        }

        var result;

        const queryStrings = new URLSearchParams(location.search);
        queryStrings.set('coming_soon', false);
        window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

        if (isParamUrl()) {
            var data = getFilterDataJson();
        } else {
            var data = localforage.getItem("data_reserve");
        }

        var PQ = new jsonQ(data);

        var switch_result = PQ.from('info').where('coming_soon', '=', false).fetch();
        switch_result = { info: switch_result };
        var Q = new jsonQ(switch_result);

        const urlParams = new URLSearchParams(window.location.search);

        if (!urlParams.get('sales_type') && !urlParams.get('types')) {
            result = Q.from('info').fetch();
        } else if (urlParams.get('sales_type') && urlParams.get('types')) {
            result = Q.from('info').whereIn('type', urlParams.get('types').split(',')).whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
        } else if (urlParams.get('sales_type')) {
            result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
        } else if (urlParams.get('types')) {
            result = Q.from('info').whereIn('type', urlParams.get('types').split(',')).fetch();
        }

        var jsonFormat = { info: result };
        localforage.setItem("mapInfo", JSON.stringify(jsonFormat));

        var jsonFormatNew = {
            type: "FeatureCollection",
            features: [],
        };
        $.each(result, function (index, value) {
            var lat = value['coords'][0];
            var lng = value['coords'][1];
            jsonFormatNew['features'].push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: {
                        0: lat,
                        1: lng
                    }
                },
                properties: value
            });
        });

        clusteredPoints.clearLayers();
        var info = jsonFormatNew;
        var layermap = new LayerMap();
        layermap.make(info);

        total_result = 0;
        points = [];
        $('#map-data').html('');

        ListGetBounds();
        checkIsLayer();
    }
});

function makeData() {

    if (isParamUrl()) {
        var tempMapinfo = localforage.getItem('mapInfo');
        if (tempMapinfo.info == null){
            data = localforage.getItem('data_reserve');
            localforage.setItem('mapInfo',data);
            var data = getFilterDataJson();
        } else{
            var data = getFilterDataJson();
        }
    } else {
        var data = localforage.getItem("data_reserve");
    }

    var PQ = new jsonQ(data);
    var _result = PQ.from('info').fetch();
    _result = { info: _result };
    localforage.setItem("result", JSON.stringify(_result));
    // return Q = new jsonQ(data);

}

function makeDataByParam(newInfo) {

    var convertedData = [];
    $.each(newInfo.features, function (index, value) {
        convertedData.push(value.properties);
    });
    newInfo = { info: convertedData };

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('coming_soon')) {
        if (urlParams.get('coming_soon') == 'true') {
            $('#switch-comming-soon').prop('checked', true);
            var PQ = new jsonQ(newInfo);
            var switch_result = PQ.from('info').where('coming_soon', '=', true).fetch();
            switch_result = { info: switch_result };
            localforage.setItem("result", JSON.stringify(switch_result));
            // return Q = new jsonQ(switch_result);
        } else {
            $('#switch-comming-soon').prop('checked', false);
            var PQ = new jsonQ(newInfo);
            var switch_result = PQ.from('info').where('coming_soon', '=', false).fetch();
            switch_result = { info: switch_result };
            localforage.setItem("result", JSON.stringify(switch_result));
            // return Q = new jsonQ(switch_result);
        }
    } else {
        var PQ = new jsonQ(newInfo);
        var _result = PQ.from('info').fetch();
        _result = { info: _result };
        localforage.setItem("result", JSON.stringify(_result));
        // return Q = new jsonQ(newInfo);
    }
}

function getResultIncentives(item) {
    var incentives_result = [];
    var dataFetch = new SBFP();

    // $.each(item, function (index, item) {
    //     var array_result = dataFetch.whereContains('terms',item);
    //     $.each(array_result, function (index, item) {
    //         incentives_result.push(item);
    //     });
    // });

    $.each(item, function (index, inputItem) {
        var array_result = dataFetch.whereContains('terms', inputItem);

        if (array_result.length > 0) {
            $.each(array_result, function (index, property) {
                var propertyContainsAllTerms = item.every(function (inputTerms) {
                    return property.terms.includes(inputTerms);
                });

                if (propertyContainsAllTerms) {
                    incentives_result.push(property);
                }
            });
        }
    });


    let uniqueChars = [];
    let uniques = [];
    incentives_result.forEach((element) => {
        if (!uniqueChars.includes(element.post_id)) {
            uniqueChars.push(element.post_id);
            uniques.push(element);
        }
    });
    incentives_result = uniques;

    incentives_result = { info: incentives_result };
    localforage.setItem("result", JSON.stringify(incentives_result));

    // return new jsonQ(incentives_result);
}

function getResultTypes(item) {
    var Types_result = [];
    var dataFetch2 = new SBFP();

    $.each(item, function (index, inputItem) {
        var array_result = dataFetch2.whereContains('type', inputItem);

        if (array_result.length > 0) {
            $.each(array_result, function (index, property) {
                var propertyContainsAllTypes = item.every(function (inputType) {
                    return property.type.includes(inputType);
                });

                if (propertyContainsAllTypes) {
                    Types_result.push(property);
                }
            });
        }
    });

    let uniqueChars = [];
    let uniques = [];
    Types_result.forEach((element) => {
        if (!uniqueChars.includes(element.post_id)) {
            uniqueChars.push(element.post_id);
            uniques.push(element);
        }
    });
    Types_result = uniques;

    Types_result = { info: Types_result };
    localforage.setItem("result", JSON.stringify(Types_result));
    // return new jsonQ(Types_result);
}

//old function
// function getResultTypes(item) {
//     var Types_result = [];
//     var dataFetch2 = new SBFP();
//     $.each(item, function (index, item) {
//         var array_result = dataFetch2.whereContains('type',item);
//         $.each(array_result, function (index, item) {
//             Types_result.push(item);
//         });
//     });
//
//     let uniqueChars = [];
//     let uniques = [];
//     Types_result.forEach((element) => {
//         if (!uniqueChars.includes(element.post_id)) {
//             uniqueChars.push(element.post_id);
//             uniques.push(element);
//         }
//     });
//     Types_result = uniques;
//
//     Types_result = { info: Types_result };
//     localforage.setItem("result", JSON.stringify(Types_result));
//     // return new jsonQ(Types_result);
// }

