class LayerMap {

    constructor() {
        this.editableLayers = new L.FeatureGroup();
    }

    make(info) {
        if (!$.isEmptyObject(this.editableLayers['_layers'])) {
            $.each(this.editableLayers['_layers'], function (index, value) {

                var climbsGeojsonMarkers = L.geoJson(info, {
                    onEachFeature: function (feature, layer) {
                        // var marker = layer.bindPopup(feature.properties.title);

                        var html = createCard(feature.properties, feature.properties);

                        var marker = layer.bindPopup(html, {
                            closeButton: false
                        });

                        marker.on('mouseover', function (e) {
                            this.openPopup();
                        });
                        marker.on('mouseout', function (e) {
                            if (document.getElementsByClassName("leaflet-popup")[0]) {
                                var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
                                elementPopup.id = "targetPopup";
                                elementPopup.addEventListener("mouseover", function (event) {
                                    isMouseHover = true;
                                }, false);
                                elementPopup.addEventListener("mouseleave", function (event) {
                                    isMouseHover = false;
                                    e.target.getPopup().remove();
                                }, false);
                                setTimeout(() => {
                                    if (!isMouseHover) {
                                        // map.closePopup(popup);
                                        if (document.querySelectorAll("#targetPopup")[0]) {
                                            e.target.getPopup().remove();
                                        }
                                    }
                                }, 50);
                            }
                        });

                        marker.options['title'] = feature.properties.title;
                        marker.options['address'] = feature.properties.address;
                        marker.options['min_price'] = feature.properties.min_price;
                        marker.options['max_price'] = feature.properties.max_price;
                        marker.options['occupancy'] = feature.properties.occupancy;
                        marker.options['min_size'] = feature.properties.min_size;
                        marker.options['max_size'] = feature.properties.max_size;
                        marker.options['min_bath'] = feature.properties.min_bath;
                        marker.options['max_bath'] = feature.properties.max_bath;
                        marker.options['min_bed'] = feature.properties.min_bed;
                        marker.options['max_bed'] = feature.properties.max_bed;
                        marker.options['thumbnail'] = feature.properties.thumbnail;
                    },
                    pointToLayer: function (feature, latlng) {
                        if (value._mRadius == null) {
                            if (value.contains(latlng)) {
                                var min_price = feature.properties.min_price;
                                var max_price = feature.properties.max_price;
                                var sales_type = feature.properties.sales_type;
                                return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
                            }
                        } else {
                            var theCenterPt = value.getLatLng();
                            var theRadius = value.getRadius();
                            var counter_points_in_circle = 0;
                            distance_from_centerPoint = latlng.distanceTo(theCenterPt);
                            if (distance_from_centerPoint <= theRadius) {
                                counter_points_in_circle += 1;
                                var min_price = feature.properties.min_price;
                                var max_price = feature.properties.max_price;
                                var sales_type = feature.properties.sales_type;
                                return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
                            }
                        }
                    }
                });
                clusteredPoints.addLayer(climbsGeojsonMarkers);
                map.addLayer(clusteredPoints);
            });
        } else {
            var climbsGeojsonMarkers = L.geoJson(info, {
                onEachFeature: function (feature, layer) {
                    // var marker = layer.bindPopup(feature.properties.title);

                    var html = createCard(feature.properties, feature.properties);

                    var marker = layer.bindPopup(html, {
                        closeButton: false
                    });

                    marker.on('mouseover', function (e) {
                        this.openPopup();
                    });
                    marker.on('mouseout', function (e) {
                        if (document.getElementsByClassName("leaflet-popup")[0]) {
                            var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
                            elementPopup.id = "targetPopup";
                            elementPopup.addEventListener("mouseover", function (event) {
                                isMouseHover = true;
                            }, false);
                            elementPopup.addEventListener("mouseleave", function (event) {
                                isMouseHover = false;
                                e.target.getPopup().remove();
                            }, false);
                            setTimeout(() => {
                                if (!isMouseHover) {
                                    // map.closePopup(popup);
                                    if (document.querySelectorAll("#targetPopup")[0]) {
                                        e.target.getPopup().remove();
                                    }
                                }
                            }, 50);
                        }
                    });

                    marker.options['title'] = feature.properties.title;
                    marker.options['address'] = feature.properties.address;
                    marker.options['min_price'] = feature.properties.min_price;
                    marker.options['max_price'] = feature.properties.max_price;
                    marker.options['occupancy'] = feature.properties.occupancy;
                    marker.options['min_size'] = feature.properties.min_size;
                    marker.options['max_size'] = feature.properties.max_size;
                    marker.options['min_bath'] = feature.properties.min_bath;
                    marker.options['max_bath'] = feature.properties.max_bath;
                    marker.options['min_bed'] = feature.properties.min_bed;
                    marker.options['max_bed'] = feature.properties.max_bed;
                    marker.options['thumbnail'] = feature.properties.thumbnail;
                },
                pointToLayer: function (feature, latlng) {
                    var min_price = feature.properties.min_price;
                    var max_price = feature.properties.max_price;
                    var sales_type = feature.properties.sales_type;
                    return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
                }
            });
            clusteredPoints.addLayer(climbsGeojsonMarkers);
            map.addLayer(clusteredPoints);
        }
    }
}