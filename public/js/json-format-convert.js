class FeatureFormat {
    convert(data) {
        if(data.info == null){
            data = { info: data };
        }
        var jsonFormat = {
            type: "FeatureCollection",
            features: [],
        };
        $.each(data['info'], function (index, value) {
            var lat = value['coords'][0];
            var lng = value['coords'][1];
            jsonFormat['features'].push({
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
        return jsonFormat;
    }
}