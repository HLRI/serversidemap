
// fetchAndSaveData();


// localforage.setItem('statusIcon', false);
// var data = localforage.getItem("mapInfo");
// data = JSON.parse(data);
// var format = new FeatureFormat();
// var jsonFormat = format.convert(data);
// var info = jsonFormat;

// $(document).ready(function () {
//     $('.loading').delay(2000).fadeOut(500);
// });

var map = new L.Map('map');

// const urlParamsZoom = new URLSearchParams(window.location.search);

    map.setView([43.70978025427102, -79.40341189038008], 11)

// if (urlParamsZoom.get('Zoom') && urlParamsZoom.get('Center')) {
//     map.setView(JSON.parse(urlParamsZoom.get('Center')), urlParamsZoom.get('Zoom'))
// } else {
//     map.setView([43.70978025427102, -79.40341189038008], 11)
// }

// map.on('zoomend', function () {
//     try {
//         const queryStrings = new URLSearchParams(location.search);
//         queryStrings.set('Zoom', JSON.stringify(map.getZoom()));
//         window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//         queryStrings.set('Center', JSON.stringify(map.getCenter()));
//         window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//     } catch (error) {

//     }
// });
// map.on('moveend', function () {
//     try {
//         const queryStrings = new URLSearchParams(location.search);
//         queryStrings.set('Zoom', JSON.stringify(map.getZoom()));
//         window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//         queryStrings.set('Center', JSON.stringify(map.getCenter()));
//         window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//     } catch (error) {

//     }
// });

/*====== Add tile to map ======*/
var Stamen_Terrain = L.tileLayer('https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: false,
}).addTo(map);
/*====== Add tile to map ======*/


// var searchControl = new L.esri.Controls.Geosearch().addTo(map);

// var results = new L.LayerGroup().addTo(map);

// searchControl.on('results', function (data) {
//     results.clearLayers();
//     for (var i = data.results.length - 1; i >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//     }
// });

// setTimeout(function () { $('.pointer').fadeOut('slow'); }, 3400);


// /*====== Remove leaflet copyright ======*/
document.getElementsByClassName('leaflet-control-attribution')[0].style.display = 'none';
// /*====== Remove leaflet copyright ======*/


// /*====== Add location button to map ======*/
// var circle = new L.circle(curLocation, { radius: 3000 });
// var curLocation = L.control.locate({
//     position: 'topright',
//     strings: {
//         title: "Show properties in my neighbourhood"
//     },
//     initialZoomLevel: 19,
//     drawCircle: 1,
//     returnToPrevBounds: 1,
//     drawMarker: 1,
// });
// curLocation.addTo(map);
// /*====== Add location button to map ======*/


// /*====== Change style icons marker ======*/
// function setCustomIcon(content, min_price, max_price, sales_type, status) {
//     if (localforage.getItem('statusIcon') == 'true') {
//         var newPrice;
//         // min_price = parseInt(min_price).toLocaleString();
//         // max_price = parseInt(max_price).toLocaleString();
//         if (max_price == null || max_price == '') {
//             newPrice = '$' + min_price;
//             if (status == "sold out") { newPrice = "Sold out" } else if (newPrice == "$" || newPrice == null) { newPrice = "Price: TBA" }
//         } else {
//             newPrice = '$' + min_price + ' to $' + max_price;
//             if (status == "sold out") { newPrice = "Sold out" } else if (newPrice == "$ to $") { newPrice = "Price: TBA" }
//         }

//         return L.divIcon({
//             iconSize: "auto",
//             iconAnchor: [58, 27],
//             // iconAnchor: [-1, 16],
//             html: "<div class='c-label " + sales_type + '-marker' + ' ' + "'>" + newPrice + "</div><div class='c-label-arrow " + sales_type + "-arrow" + "' />"
//         })
//     } else {
//         return L.divIcon({
//             iconSize: "auto",
//             iconAnchor: [58, 27],
//             // iconAnchor: [-1, 16],
//             html: "<div class='c-label " + sales_type + '-marker' + "'>" + content + "</div><div class='c-label-arrow " + sales_type + "-arrow" + "' />"
//         })
//         // return L.icon({
//         //     iconSize: [24, 24],
//         //     iconAnchor: [12, 2],
//         //     // iconAnchor: [13, 27],
//         //     popupAnchor: [1, 0],
//         //     iconUrl: url_icon
//         // })
//     }
// }
// /*====== Change style icons marker ======*/


// /*====== Add edit toolbar to map ======*/
// let editableLayers = new L.FeatureGroup();
// map.addLayer(editableLayers);
// let drawControl = new L.Control.Draw({
//     position: "topright",
//     draw: {
//         polyline: false,
//         polygon: {
//             allowIntersection: false,
//             drawError: {
//                 color: "#e1e100",
//                 message: "<strong>Oh snap!<strong> you can't draw that!"
//             },
//             shapeOptions: {
//                 color: "green",
//                 clickable: true
//             }
//         },
//         circle: {
//             shapeOptions: {
//                 color: 'red'
//             }
//         },
//         circlemarker: false,
//         rectangle: {
//             shapeOptions: {
//                 color: 'blue',
//                 clickable: true
//             }
//         },
//         marker: false
//     },
//     edit: {
//         featureGroup: editableLayers,
//         remove: true
//     }
// });
// map.addControl(drawControl);
// /*====== Add edit toolbar to map ======*/

// var areas = [];
// var areas_circle = [];
// var format_circle = [];
// /*====== Draw methods ======*/
// map.on('draw:created', function (e) {

//     const urlParams = new URLSearchParams(window.location.search);
//     if (e.layer.editing._poly) {
//         if (urlParams.get('polygon')) {
//             var arr = JSON.parse("[" + urlParams.get('polygon') + "]")[0];
//             arr.forEach(element => {
//                 areas.push(element)
//             });
//             areas.push((e.layer.editing.latlngs[0][0]));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('polygon', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         } else {
//             areas.push(e.layer.editing.latlngs[0][0]);
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('polygon', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         }
//     } else if (e.layer.editing._shape._mRadius == null) {
//         if (urlParams.get('rectangle')) {
//             var arr = JSON.parse("[" + urlParams.get('rectangle') + "]")[0];
//             arr.forEach(element => {
//                 areas.push(element)
//             });
//             areas.push((e.layer.editing._shape._latlngs));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('rectangle', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         } else {
//             areas.push((e.layer.editing._shape._latlngs));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('rectangle', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         }
//     } else {
//         if (urlParams.get('circle')) {
//             var arrCircle = JSON.parse("[" + urlParams.get('circle') + "]")[0];
//             arrCircle.forEach(element => {
//                 myCircle = JSON.parse("[" + JSON.stringify(element) + "]")[0];
//                 format_circle = [
//                     myCircle[0],
//                     { "radius": myCircle[1]['radius'] }
//                 ];
//                 areas_circle.push(JSON.stringify(format_circle));
//             });
//             format_circle = [
//                 e.layer.editing._shape._latlng,
//                 { "radius": e.layer.editing._shape._mRadius }
//             ];
//             areas_circle.push(JSON.stringify(format_circle));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('circle', '[' + areas_circle + ']');
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             format_circle = [];
//             areas_circle = [];
//         } else {
//             format_circle = [
//                 e.layer.editing._shape._latlng,
//                 { "radius": e.layer.editing._shape._mRadius }
//             ];
//             areas_circle.push(JSON.stringify(format_circle));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('circle', '[' + areas_circle + ']');
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             format_circle = [];
//             areas_circle = [];
//         }
//     }

//     var exist_markers = [];
//     var polLayer = e.layer;
//     editableLayers.addLayer(polLayer);
//     clusteredPoints.clearLayers();
//     var newInfo = getFilterData();
//     $.each(editableLayers['_layers'], function (index, value) {

//         var climbsGeojsonMarkers = L.geoJson(newInfo, {
//             onEachFeature: function (feature, layer) {
//                 // var marker = layer.bindPopup(feature.properties.title);

//                 var html = createCard(feature.properties, layer.options);

//                 var marker = layer.bindPopup(html, {
//                     closeButton: false
//                 });

//                 marker.on('mouseover', function (e) {
//                     this.openPopup();
//                 });
//                 marker.on('mouseout', function (e) {
//                     if (document.getElementsByClassName("leaflet-popup")[0]) {
//                         var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                         elementPopup.id = "targetPopup";
//                         elementPopup.addEventListener("mouseover", function (event) {
//                             isMouseHover = true;
//                         }, false);
//                         elementPopup.addEventListener("mouseleave", function (event) {
//                             isMouseHover = false;
//                             e.target.getPopup().remove();
//                         }, false);
//                         setTimeout(() => {
//                             if (!isMouseHover) {
//                                 // map.closePopup(popup);
//                                 if (document.querySelectorAll("#targetPopup")[0]) {
//                                     e.target.getPopup().remove();
//                                 }
//                             }
//                         }, 50);
//                     }
//                 });

//                 marker.options['title'] = feature.properties.title;
//                 marker.options['address'] = feature.properties.address;
//                 marker.options['min_price'] = feature.properties.min_price;
//                 marker.options['max_price'] = feature.properties.max_price;
//                 marker.options['min_size'] = feature.properties.min_size;
//                 marker.options['max_size'] = feature.properties.max_size;
//                 marker.options['min_bed'] = feature.properties.min_bed;
//                 marker.options['max_bed'] = feature.properties.max_bed;
//                 marker.options['min_bath'] = feature.properties.min_bath;
//                 marker.options['max_bath'] = feature.properties.max_bath;
//                 marker.options['occupancy'] = feature.properties.occupancy;
//                 marker.options['thumbnail'] = feature.properties.thumbnail;
//             },
//             pointToLayer: function (feature, latlng) {
//                 if (value._mRadius == null) {
//                     if (value.contains(latlng)) {

//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }

//                     }
//                 } else {
//                     var theCenterPt = value.getLatLng();
//                     var theRadius = value.getRadius();
//                     var counter_points_in_circle = 0;
//                     distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                     if (distance_from_centerPoint <= theRadius) {
//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             counter_points_in_circle += 1;
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }
//                     }
//                 }
//             }
//         });
//         clusteredPoints.addLayer(climbsGeojsonMarkers);
//         map.addLayer(clusteredPoints);
//     });
//     total_result = 0;
//     points = [];
//     $('#map-data').html('');
//     ListGetBounds();

// });

// map.on('draw:edited', function (e) {

//     const queryStrings = new URLSearchParams(location.search);
//     queryStrings.delete('polygon');
//     queryStrings.delete('rectangle');
//     queryStrings.delete('circle');
//     window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

//     $.each(editableLayers['_layers'], function (index, value) {
//         if (value.editing._poly) {
//             areas.push(value.editing.latlngs[0][0]);
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('polygon', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         } else if (value.editing._shape._mRadius == null) {
//             areas.push((value.editing._shape._latlngs));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('rectangle', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             areas = [];
//         } else {
//             format_circle = [
//                 value.editing._shape._latlng,
//                 { "radius": value.editing._shape._mRadius }
//             ];
//             areas_circle.push(JSON.stringify(format_circle));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('circle', '[' + areas_circle + ']');
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             format_circle = [];
//             areas_circle = [];
//         }
//     });

//     var exist_markers = [];
//     clusteredPoints.clearLayers();
//     var newInfo = getFilterData();
//     $.each(editableLayers['_layers'], function (index, value) {
//         var climbsGeojsonMarkers = L.geoJson(newInfo, {
//             onEachFeature: function (feature, layer) {
//                 // var marker = layer.bindPopup(feature.properties.title);

//                 var html = createCard(feature.properties, layer.options);

//                 var marker = layer.bindPopup(html, {
//                     closeButton: false
//                 });

//                 marker.on('mouseover', function (e) {
//                     this.openPopup();
//                 });
//                 marker.on('mouseout', function (e) {
//                     if (document.getElementsByClassName("leaflet-popup")[0]) {
//                         var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                         elementPopup.id = "targetPopup";
//                         elementPopup.addEventListener("mouseover", function (event) {
//                             isMouseHover = true;
//                         }, false);
//                         elementPopup.addEventListener("mouseleave", function (event) {
//                             isMouseHover = false;
//                             e.target.getPopup().remove();
//                         }, false);
//                         setTimeout(() => {
//                             if (!isMouseHover) {
//                                 // map.closePopup(popup);
//                                 if (document.querySelectorAll("#targetPopup")[0]) {
//                                     e.target.getPopup().remove();
//                                 }
//                             }
//                         }, 50);
//                     }
//                 });

//                 marker.options['title'] = feature.properties.title;
//                 marker.options['address'] = feature.properties.address;
//                 marker.options['min_price'] = feature.properties.min_price;
//                 marker.options['max_price'] = feature.properties.max_price;
//                 marker.options['min_size'] = feature.properties.min_size;
//                 marker.options['max_size'] = feature.properties.max_size;
//                 marker.options['min_bed'] = feature.properties.min_bed;
//                 marker.options['max_bed'] = feature.properties.max_bed;
//                 marker.options['min_bath'] = feature.properties.min_bath;
//                 marker.options['max_bath'] = feature.properties.max_bath;
//                 marker.options['occupancy'] = feature.properties.occupancy;
//                 marker.options['thumbnail'] = feature.properties.thumbnail;
//             },
//             pointToLayer: function (feature, latlng) {
//                 if (value._mRadius == null) {
//                     if (value.contains(latlng)) {

//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }

//                     }
//                 } else {
//                     var theCenterPt = value.getLatLng();
//                     var theRadius = value.getRadius();
//                     var counter_points_in_circle = 0;
//                     distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                     if (distance_from_centerPoint <= theRadius) {
//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             counter_points_in_circle += 1;
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }
//                     }
//                 }
//             }
//         });
//         clusteredPoints.addLayer(climbsGeojsonMarkers);
//         map.addLayer(clusteredPoints);
//     });
//     // $.each(editableLayers['_layers'], function (index, value) {
//     //     var climbsGeojsonMarkers = L.geoJson(newInfo, {
//     //         onEachFeature: function (feature, layer) {
//     //             var marker = layer.bindPopup(feature.properties.title);
//     //             marker.options['title'] = feature.properties.title;
//     //             marker.options['address'] = feature.properties.address;
//     //             marker.options['min_price'] = feature.properties.min_price;
//     //             marker.options['max_price'] = feature.properties.max_price;
//     //             marker.options['min_size'] = feature.properties.min_size;
//     //             marker.options['max_size'] = feature.properties.max_size;
//     //             marker.options['min_bed'] = feature.properties.min_bed;
//     //             marker.options['max_bed'] = feature.properties.max_bed;
//     //             marker.options['min_bath'] = feature.properties.min_bath;
//     //             marker.options['max_bath'] = feature.properties.max_bath;
//     //             marker.options['occupancy'] = feature.properties.occupancy;
//     //             marker.options['thumbnail'] = feature.properties.thumbnail;
//     //         },
//     //         pointToLayer: function (feature, latlng) {
//     //             if (value._mRadius == null) {
//     //                 if (value.contains(latlng)) {
//     //                     var price = feature.properties.min_price+','+feature.properties.max_price;
//     // return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price) });
//     //                 }
//     //             } else {
//     //                 var theCenterPt = value.getLatLng();
//     //                 var theRadius = value.getRadius();
//     //                 var counter_points_in_circle = 0;
//     //                 distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//     //                 if (distance_from_centerPoint <= theRadius) {
//     //                     counter_points_in_circle += 1;
//     //                     var price = feature.properties.min_price+','+feature.properties.max_price;
//     // return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price) });
//     //                 }
//     //             }
//     //         }
//     //     });
//     //     clusteredPoints.addLayer(climbsGeojsonMarkers);
//     //     map.addLayer(clusteredPoints);
//     // });
//     total_result = 0;
//     points = [];
//     $('#map-data').html('');
//     ListGetBounds();

// });

// map.on('draw:deleted', function (e) {

//     const queryStrings = new URLSearchParams(location.search);
//     queryStrings.delete('polygon');
//     queryStrings.delete('rectangle');
//     queryStrings.delete('circle');
//     window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);

//     $.each(editableLayers['_layers'], function (index, value) {
//         if (value.editing._poly) {
//             areas.push(value.editing.latlngs[0][0]);
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('polygon', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             // areas = [];
//         } else if (value.editing._shape._mRadius == null) {
//             areas.push((value.editing._shape._latlngs));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('rectangle', JSON.stringify(areas));
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             // areas = [];
//         } else {
//             format_circle = [
//                 value.editing._shape._latlng,
//                 { "radius": value.editing._shape._mRadius }
//             ];
//             areas_circle.push(JSON.stringify(format_circle));
//             const queryStrings = new URLSearchParams(location.search);
//             queryStrings.set('circle', '[' + areas_circle + ']');
//             window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);
//             format_circle = [];
//             // areas_circle = [];
//         }
//     });

//     clusteredPoints.clearLayers();
//     var newInfo = getFilterData();

//     if (Object.keys(editableLayers['_layers']).length) {
//         $.each(editableLayers['_layers'], function (index, value) {
//             var climbsGeojsonMarkers = L.geoJson(newInfo, {
//                 onEachFeature: function (feature, layer) {
//                     // var marker = layer.bindPopup(feature.properties.title);

//                     var html = createCard(feature.properties, layer.options);

//                     var marker = layer.bindPopup(html, {
//                         closeButton: false
//                     });

//                     marker.on('mouseover', function (e) {
//                         this.openPopup();
//                     });
//                     marker.on('mouseout', function (e) {
//                         if (document.getElementsByClassName("leaflet-popup")[0]) {
//                             var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                             elementPopup.id = "targetPopup";
//                             elementPopup.addEventListener("mouseover", function (event) {
//                                 isMouseHover = true;
//                             }, false);
//                             elementPopup.addEventListener("mouseleave", function (event) {
//                                 isMouseHover = false;
//                                 e.target.getPopup().remove();
//                             }, false);
//                             setTimeout(() => {
//                                 if (!isMouseHover) {
//                                     // map.closePopup(popup);
//                                     if (document.querySelectorAll("#targetPopup")[0]) {
//                                         e.target.getPopup().remove();
//                                     }
//                                 }
//                             }, 50);
//                         }
//                     });

//                     marker.options['title'] = feature.properties.title;
//                     marker.options['address'] = feature.properties.address;
//                     marker.options['min_price'] = feature.properties.min_price;
//                     marker.options['max_price'] = feature.properties.max_price;
//                     marker.options['min_size'] = feature.properties.min_size;
//                     marker.options['max_size'] = feature.properties.max_size;
//                     marker.options['min_bed'] = feature.properties.min_bed;
//                     marker.options['max_bed'] = feature.properties.max_bed;
//                     marker.options['min_bath'] = feature.properties.min_bath;
//                     marker.options['max_bath'] = feature.properties.max_bath;
//                     marker.options['occupancy'] = feature.properties.occupancy;
//                     marker.options['thumbnail'] = feature.properties.thumbnail;
//                     $('#result-list').html((total_result++) + ' items were found');
//                 },
//                 pointToLayer: function (feature, latlng) {
//                     if (value._mRadius == null) {
//                         if (value.contains(latlng)) {
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }
//                     } else {
//                         var theCenterPt = value.getLatLng();
//                         var theRadius = value.getRadius();
//                         var counter_points_in_circle = 0;
//                         distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                         if (distance_from_centerPoint <= theRadius) {
//                             counter_points_in_circle += 1;
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }
//                     }
//                 }
//             });
//             clusteredPoints.addLayer(climbsGeojsonMarkers);
//             map.addLayer(clusteredPoints);
//         });
//     } else {
//         var climbsGeojsonMarkers = L.geoJson(newInfo, {
//             onEachFeature: function (feature, layer) {
//                 // var marker = layer.bindPopup(feature.properties.title);

//                 var html = createCard(feature.properties, feature.properties);

//                 var marker = layer.bindPopup(html, {
//                     closeButton: false
//                 });

//                 marker.on('mouseover', function (e) {
//                     this.openPopup();
//                 });
//                 marker.on('mouseout', function (e) {
//                     if (document.getElementsByClassName("leaflet-popup")[0]) {
//                         var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                         elementPopup.id = "targetPopup";
//                         elementPopup.addEventListener("mouseover", function (event) {
//                             isMouseHover = true;
//                         }, false);
//                         elementPopup.addEventListener("mouseleave", function (event) {
//                             isMouseHover = false;
//                             e.target.getPopup().remove();
//                         }, false);
//                         setTimeout(() => {
//                             if (!isMouseHover) {
//                                 // map.closePopup(popup);
//                                 if (document.querySelectorAll("#targetPopup")[0]) {
//                                     e.target.getPopup().remove();
//                                 }
//                             }
//                         }, 50);
//                     }
//                 });

//                 marker.options['title'] = feature.properties.title;
//                 marker.options['address'] = feature.properties.address;
//                 marker.options['min_price'] = feature.properties.min_price;
//                 marker.options['max_price'] = feature.properties.max_price;
//                 marker.options['min_size'] = feature.properties.min_size;
//                 marker.options['max_size'] = feature.properties.max_size;
//                 marker.options['min_bed'] = feature.properties.min_bed;
//                 marker.options['max_bed'] = feature.properties.max_bed;
//                 marker.options['min_bath'] = feature.properties.min_bath;
//                 marker.options['max_bath'] = feature.properties.max_bath;
//                 marker.options['occupancy'] = feature.properties.occupancy;
//                 marker.options['thumbnail'] = feature.properties.thumbnail;
//                 $('#result-list').html((total_result++) + ' items were found');
//             },
//             pointToLayer: function (feature, latlng) {
//                 var min_price = feature.properties.min_price;
//                 var max_price = feature.properties.max_price;
//                 var sales_type = feature.properties.sales_type;
//                 return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//             }
//         });
//         clusteredPoints.addLayer(climbsGeojsonMarkers);
//         map.addLayer(clusteredPoints);
//     }
//     total_result = 0;
//     points = [];
//     $('#map-data').html('');
//     ListGetBounds();

// });
// /*====== Draw methods ======*/


// /*====== Get query string from url and draw area ======*/
// var Rectangle_polygon;
// var draw_status = false;
// const urlParams = new URLSearchParams(window.location.search);
// const Rectangle = urlParams.get('rectangle');
// const Circle = urlParams.get('circle');
// const Polygon = urlParams.get('polygon');
// var arr = JSON.parse("[" + Rectangle + "]")[0];
// var arrPoly = JSON.parse("[" + Polygon + "]")[0];
// var arrCircle = JSON.parse("[" + Circle + "]")[0];
// if (Rectangle) {
//     var RectangleOptions = {
//         color: 'blue',
//         fillColor: 'blue',
//     }
//     arr.forEach(element => {
//         Rectangle_polygon = L.polygon(element[0], RectangleOptions).addTo(map);
//         editableLayers.addLayer(Rectangle_polygon);
//     });
//     draw_status = true;
// }
// if (Polygon) {
//     var PolygonOptions = {
//         color: 'green',
//         fillColor: 'green',
//     }
//     arrPoly.forEach(element => {
//         var Polygon_poly = L.polygon(element, PolygonOptions).addTo(map);
//         editableLayers.addLayer(Polygon_poly);
//     });
//     draw_status = true;
// }
// if (Circle) {
//     var circleOptions = {
//         color: 'red',
//         fillColor: 'red',
//     }
//     arrCircle.forEach(element => {
//         myCircle = JSON.parse("[" + JSON.stringify(element) + "]")[0];
//         var circle_polygon = L.circle(myCircle[0], myCircle[1]['radius'], circleOptions).addTo(map);
//         editableLayers.addLayer(circle_polygon);
//     });
//     draw_status = true;
// }
// /*====== Get query string from url and draw area ======*/


// /*====== Create a cluster point of markers ======*/
// var clusteredPoints = L.markerClusterGroup({
//     iconCreateFunction: function (cluster) {
//         return L.divIcon({
//             html: cluster.getChildCount(),
//             className: 'mycluster',
//             iconSize: null
//         });
//     },
//     showCoverageOnHover: false,
// });

// if (new URLSearchParams(window.location.search) != "") {
//     if (urlParams.get('price_from')) {
//         localforage.setItem("statusReset", true);
//         const price_from_query = urlParams.get('price_from');
//         const price_to_query = urlParams.get('price_to');
//         $("#slider-range").slider("values", 0, price_from_query);
//         $("#slider-range").slider("values", 1, price_to_query);
//         $("#amount").val("$" + parseInt(price_from_query).toLocaleString() + " - $" + parseInt(price_to_query).toLocaleString());
//         localforage.removeItem("statusReset");

//         // for tailwind
//         $('#Pricerange').parent().find('.btn-light').addClass('btn-light-blue');

//         // $('#Pricerange').parent().find('.btn-light').addClass('custom-btn-blue');
//         $('#Pricerange').parent().find('.crange').html('$' + parseInt(price_from_query).toLocaleString() + ' - $' + parseInt(price_to_query).toLocaleString());
//         $(".price .min").val(price_from_query);
//         $(".price .max").val(price_to_query);
//     }
//     if (urlParams.get('size_from')) {
//         localforage.setItem("statusReset", true);
//         const suitesize_from_query = urlParams.get('size_from');
//         const suitesize_to_query = urlParams.get('size_to');
//         $("#slider-range-suitesize").slider("values", 0, suitesize_from_query);
//         $("#slider-range-suitesize").slider("values", 1, suitesize_to_query);
//         $("#suitesize").val(suitesize_from_query + " sq.ft - " + suitesize_to_query + " sq.ft");
//         localforage.removeItem("statusReset");

//         // for tailwind
//         $('#Suitesize').parent().find('.btn-light').addClass('btn-light-blue');

//         // $('#Suitesize').parent().find('.btn-light').addClass('custom-btn-blue');
//         $('#Suitesize').parent().find('.crange').html(suitesize_from_query + ' - ' + suitesize_to_query + ' sq.ft');
//         $(".suitesize .min").val(suitesize_from_query);
//         $(".suitesize .max").val(suitesize_to_query);
//     }
//     if (urlParams.get('bath_from')) {
//         localforage.setItem("statusReset", true);
//         const bath_from_query = urlParams.get('bath_from');
//         const bath_to_query = urlParams.get('bath_to');
//         $("#slider-range-baths").slider("values", 0, bath_from_query);
//         $("#slider-range-baths").slider("values", 1, bath_to_query);
//         $("#baths").val(bath_from_query + " baths - " + bath_to_query + " baths");
//         localforage.removeItem("statusReset");

//         // for tailwind
//         $('#Baths').parent().find('.btn-light').addClass('btn-light-blue');

//         // $('#Baths').parent().find('.btn-light').addClass('custom-btn-blue');
//         $('#Baths').parent().find('.crange').html(bath_from_query + ' - ' + bath_to_query + ' baths');
//     }
//     if (urlParams.get('bed_from')) {
//         localforage.setItem("statusReset", true);
//         const bed_from_query = urlParams.get('bed_from');
//         const bed_to_query = urlParams.get('bed_to');
//         $("#slider-range-beds").slider("values", 0, bed_from_query);
//         $("#slider-range-beds").slider("values", 1, bed_to_query);
//         $("#beds").val(bed_from_query + " beds - " + bed_to_query + " beds");
//         localforage.removeItem("statusReset");

//         // for tailwind
//         $('#Beds').parent().find('.btn-light').addClass('btn-light-blue');

//         // $('#Beds').parent().find('.btn-light').addClass('custom-btn-blue');
//         $('#Beds').parent().find('.crange').html(bed_from_query + ' - ' + bed_to_query + ' beds');
//     }
//     if (urlParams.get('occupancy_from')) {
//         localforage.setItem("statusReset", true);
//         const occupancy_from_query = urlParams.get('occupancy_from');
//         const occupancy_to_query = urlParams.get('occupancy_to');
//         $("#slider-range-occupancy").slider("values", 0, occupancy_from_query);
//         $("#slider-range-occupancy").slider("values", 1, occupancy_to_query);
//         $("#occupancy").val(occupancy_from_query + " - " + occupancy_to_query);
//         localforage.removeItem("statusReset");

//         // for tailwind
//         $('#Occupancy').parent().find('.btn-light').addClass('btn-light-blue');

//         // $('#Occupancy').parent().find('.btn-light').addClass('custom-btn-blue');
//         $('#Occupancy').parent().find('.crange').html(occupancy_from_query + ' - ' + occupancy_to_query);
//     }
//     if (urlParams.get('percent_from')) {
//         $('#Comission').show();
//         localforage.setItem("statusReset", true);
//         const percent_from_query = urlParams.get('percent_from');
//         const percent_to_query = urlParams.get('percent_to');
//         $("#slider-range-percent").slider("values", 0, percent_from_query);
//         $("#slider-range-percent").slider("values", 1, percent_to_query);
//         $("#percent").val("%" + percent_from_query + " - %" + percent_to_query);
//         localforage.removeItem("statusReset");

//         $('#Comission').removeClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).addClass('btn-light-blue');
//         $('#Comission').html('%' + percent_from_query + ' - %' + percent_to_query);
//     }
//     if (urlParams.get('flatfee_from')) {
//         $('#Comission').show();
//         localforage.setItem("statusReset", true);
//         const flatfee_from_query = urlParams.get('flatfee_from');
//         const flatfee_to_query = urlParams.get('flatfee_to');
//         $("#slider-range-flatfee").slider("values", 0, flatfee_from_query);
//         $("#slider-range-flatfee").slider("values", 1, flatfee_to_query);
//         $("#flatfee").val("%" + flatfee_from_query + " - %" + flatfee_to_query);
//         localforage.removeItem("statusReset");
//         $('#Comission').removeClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).addClass('btn-light-blue');
//         $('#Comission').html('$' + flatfee_from_query + ' - $' + flatfee_to_query);
//     }
// }

// var newInfo = getFilterData();
// // var data = localforage.getItem("mapInfo");
// // data = JSON.parse(data);
// // var format = new FeatureFormat();
// // var jsonFormat = format.convert(data);
// // console.log(jsonFormat);
// // // log here
// if (urlParams.get('coming_soon') && !urlParams.get('sales_type') && !urlParams.get('types')) {
//     if (urlParams.get('coming_soon') == 'true') {
//         $('#switch-comming-soon').prop('checked', true);
//         var convertedData = [];
//         $.each(newInfo.features, function (index, value) {
//             convertedData.push(value.properties);
//         });
//         newInfo = { info: convertedData };
//         var PQ = new jsonQ(newInfo);
//         var switch_result = PQ.from('info').where('coming_soon', '=', true).fetch();
//         newInfo = [];
//         var jsonFormatNew = {
//             type: "FeatureCollection",
//             features: [],
//         };
//         $.each(switch_result, function (index, value) {
//             var lat = value['coords'][0];
//             var lng = value['coords'][1];
//             jsonFormatNew['features'].push({
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: {
//                         0: lat,
//                         1: lng
//                     }
//                 },
//                 properties: value
//             });
//         });
//         clusteredPoints.clearLayers();
//         var newInfo = jsonFormatNew;

//         var layermap = new LayerMap();
//         layermap.make(newInfo);

//         total_result = 0;
//         points = [];
//         $('#map-data').html('');
//         ListGetBounds();

//     } else {

//         $('#switch-comming-soon').prop('checked', false);
//         var convertedData = [];
//         $.each(newInfo.features, function (index, value) {
//             convertedData.push(value.properties);
//         });
//         newInfo = { info: convertedData };
//         var PQ = new jsonQ(JSON.stringify(newInfo));
//         var switch_result = PQ.from('info').where('coming_soon', '=', false).fetch();
//         var newInfo = [];
//         var jsonFormatNew = {
//             type: "FeatureCollection",
//             features: [],
//         };
//         $.each(switch_result, function (index, value) {
//             var lat = value['coords'][0];
//             var lng = value['coords'][1];
//             jsonFormatNew['features'].push({
//                 type: 'Feature',
//                 geometry: {
//                     type: 'Point',
//                     coordinates: {
//                         0: lat,
//                         1: lng
//                     }
//                 },
//                 properties: value
//             });
//         });
//         clusteredPoints.clearLayers();
//         var newInfo = jsonFormatNew;

//         var layermap = new LayerMap();
//         layermap.make(newInfo);

//         total_result = 0;
//         points = [];
//         $('#map-data').html('');
//         ListGetBounds();
//     }
// }

// if (urlParams.get('sales_type') || urlParams.get('types') || urlParams.get('incentives')) {

//     var result;


//     // if (!urlParams.get('sales_type') && !urlParams.get('types')) {
//     //     result = Q.from('info').fetch();
//     // } else if (urlParams.get('sales_type') && urlParams.get('types')) {
//     //     result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).whereIn('type', urlParams.get('types').split(',')).fetch();
//     // } else if (urlParams.get('sales_type')) {
//     //     result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
//     // } else if (urlParams.get('types')) {
//     //     result = Q.from('info').whereIn('type', urlParams.get('types').split(',')).fetch();
//     // }

//     if (!urlParams.get('incentives') && !urlParams.get('sales_type') && !urlParams.get('types')) {
//         makeDataByParam(newInfo);
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').fetch();
//     } else if (urlParams.get('incentives') && urlParams.get('sales_type') && urlParams.get('types')) {
//         makeDataByParam(newInfo);
//         getResultTypes(urlParams.get('types').split(','));
//         getResultIncentives(urlParams.get('incentives').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
//     } else if (urlParams.get('sales_type') && urlParams.get('types')) {
//         makeDataByParam(newInfo);
//         getResultTypes(urlParams.get('types').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
//     } else if (urlParams.get('incentives') && urlParams.get('types')) {
//         makeDataByParam(newInfo);
//         getResultTypes(urlParams.get('types').split(','));
//         getResultIncentives(urlParams.get('incentives').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').fetch();
//     } else if (urlParams.get('incentives') && urlParams.get('sales_type')) {
//         makeDataByParam(newInfo);
//         getResultIncentives(urlParams.get('incentives').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
//     } else if (urlParams.get('incentives')) {
//         makeDataByParam(newInfo);
//         getResultIncentives(urlParams.get('incentives').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').fetch();
//     } else if (urlParams.get('sales_type')) {
//         makeDataByParam(newInfo);
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').whereIn('sales_type', urlParams.get('sales_type').split(',')).fetch();
//     } else if (urlParams.get('types')) {
//         makeDataByParam(newInfo);
//         getResultTypes(urlParams.get('types').split(','));
//         var Q = new jsonQ(localforage.getItem("result"));
//         result = Q.from('info').fetch();
//     }

//     newInfo = [];
//     var jsonFormatNew = {
//         type: "FeatureCollection",
//         features: [],
//     };
//     $.each(result, function (index, value) {
//         var lat = value['coords'][0];
//         var lng = value['coords'][1];
//         jsonFormatNew['features'].push({
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: {
//                     0: lat,
//                     1: lng
//                 }
//             },
//             properties: value
//         });
//     });
//     clusteredPoints.clearLayers();
//     newInfo = jsonFormatNew;

//     if (urlParams.get('sales_type')) {
//         $('#sales_type').val(urlParams.get('sales_type').split(',')).trigger('change');
//     }
//     if (urlParams.get('types')) {
//         $('#types').val(urlParams.get('types').split(',')).trigger('change');
//     }
//     if (urlParams.get('incentives')) {
//         $('#incentives').val(urlParams.get('incentives').split(',')).trigger('change');
//     }

// }
// var exist_markers = [];

// clusteredPoints.clearLayers();
// //different
// if (!$.isEmptyObject(editableLayers['_layers'])) {
//     $.each(editableLayers['_layers'], function (index, value) {
//         var climbsGeojsonMarkers = L.geoJson(newInfo, {
//             onEachFeature: function (feature, layer) {
//                 // var marker = layer.bindPopup(feature.properties.title);

//                 var html = createCard(feature.properties, feature.properties);

//                 var marker = layer.bindPopup(html, {
//                     closeButton: false
//                 });

//                 marker.on('mouseover', function (e) {
//                     this.openPopup();
//                 });
//                 marker.on('mouseout', function (e) {
//                     if (document.getElementsByClassName("leaflet-popup")[0]) {
//                         var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                         elementPopup.id = "targetPopup";
//                         elementPopup.addEventListener("mouseover", function (event) {
//                             isMouseHover = true;
//                         }, false);
//                         elementPopup.addEventListener("mouseleave", function (event) {
//                             isMouseHover = false;
//                             e.target.getPopup().remove();
//                         }, false);
//                         setTimeout(() => {
//                             if (!isMouseHover) {
//                                 // map.closePopup(popup);
//                                 if (document.querySelectorAll("#targetPopup")[0]) {
//                                     e.target.getPopup().remove();
//                                 }
//                             }
//                         }, 50);
//                     }
//                 });

//                 marker.options['title'] = feature.properties.title;
//                 marker.options['address'] = feature.properties.address;
//                 marker.options['min_price'] = feature.properties.min_price;
//                 marker.options['max_price'] = feature.properties.max_price;
//                 marker.options['occupancy'] = feature.properties.occupancy;
//                 marker.options['min_size'] = feature.properties.min_size;
//                 marker.options['max_size'] = feature.properties.max_size;
//                 marker.options['min_bath'] = feature.properties.min_bath;
//                 marker.options['max_bath'] = feature.properties.max_bath;
//                 marker.options['min_bed'] = feature.properties.min_bed;
//                 marker.options['max_bed'] = feature.properties.max_bed;
//                 marker.options['thumbnail'] = feature.properties.thumbnail;
//             },
//             pointToLayer: function (feature, latlng) {
//                 if (value._mRadius == null) {
//                     if (value.contains(latlng)) {

//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }

//                     }
//                 } else {
//                     var theCenterPt = value.getLatLng();
//                     var theRadius = value.getRadius();
//                     var counter_points_in_circle = 0;
//                     distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                     if (distance_from_centerPoint <= theRadius) {

//                         counter_points_in_circle += 1;

//                         clusteredPoints.eachLayer(function (layer) {
//                             exist_markers.push(layer.feature.properties.coords[0]);
//                         });

//                         if (!exist_markers.includes(latlng['lng'])) {
//                             var min_price = feature.properties.min_price;
//                             var max_price = feature.properties.max_price;
//                             var sales_type = feature.properties.sales_type;
//                             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                         }
//                     }
//                 }
//             }
//         });
//         clusteredPoints.addLayer(climbsGeojsonMarkers);
//         map.addLayer(clusteredPoints);
//     });
// } else {
//     var climbsGeojsonMarkers = L.geoJson(newInfo, {
//         onEachFeature: function (feature, layer) {
//             // var marker = layer.bindPopup(feature.properties.title);

//             var html = createCard(feature.properties, feature.properties);

//             var marker = layer.bindPopup(html, {
//                 closeButton: false
//             });

//             marker.on('mouseover', function (e) {
//                 this.openPopup();
//             });
//             marker.on('mouseout', function (e) {
//                 if (document.getElementsByClassName("leaflet-popup")[0]) {
//                     var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                     elementPopup.id = "targetPopup";
//                     elementPopup.addEventListener("mouseover", function (event) {
//                         isMouseHover = true;
//                     }, false);
//                     elementPopup.addEventListener("mouseleave", function (event) {
//                         isMouseHover = false;
//                         e.target.getPopup().remove();
//                     }, false);
//                     setTimeout(() => {
//                         if (!isMouseHover) {
//                             // map.closePopup(popup);
//                             if (document.querySelectorAll("#targetPopup")[0]) {
//                                 e.target.getPopup().remove();
//                             }
//                         }
//                     }, 50);
//                 }
//             });

//             marker.options['title'] = feature.properties.title;
//             marker.options['address'] = feature.properties.address;
//             marker.options['min_price'] = feature.properties.min_price;
//             marker.options['max_price'] = feature.properties.max_price;
//             marker.options['occupancy'] = feature.properties.occupancy;
//             marker.options['min_size'] = feature.properties.min_size;
//             marker.options['max_size'] = feature.properties.max_size;
//             marker.options['min_bath'] = feature.properties.min_bath;
//             marker.options['max_bath'] = feature.properties.max_bath;
//             marker.options['min_bed'] = feature.properties.min_bed;
//             marker.options['max_bed'] = feature.properties.max_bed;
//             marker.options['thumbnail'] = feature.properties.thumbnail;
//         },
//         pointToLayer: function (feature, latlng) {
//             var min_price = feature.properties.min_price;
//             var max_price = feature.properties.max_price;
//             var sales_type = feature.properties.sales_type;
//             return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//         }
//     });
//     clusteredPoints.addLayer(climbsGeojsonMarkers);
//     map.addLayer(clusteredPoints);
// }
// total_result = 0;
// points = [];
// $('#map-data').html('');
// // ListGetBounds();
// /*====== Create a cluster point of markers ======*/


// /*====== Select card when click on marker ======*/
// clusteredPoints.on('click', function (a) {
//     $('body').find('.card').removeClass('marker-card-border');
//     $('body').find('.card-body').removeClass('bg-marker-card');
//     $('#point_' + a.layer.feature.properties.post_id).find('.card').addClass(
//         'marker-card-border');
//     $('#point_' + a.layer.feature.properties.post_id).find('.card-body').addClass(
//         'bg-marker-card');
//     window.location.hash = 'point_' + a.layer.feature.properties.post_id;
// });
// /*====== Select card when click on marker ======*/


// /*====== POPUP CLUSTER ======*/
// var popup;
// clusteredPoints.on('clustermouseover', function (a, item) {

//     // var string = $('.' + a.layer._icon.classList[2]).attr('style');
//     // var string_array = string.split(';');
//     // var style;

//     // $.each(string_array, function (index, value) {
//     //     if (value.trim().search('transform') != -1) {
//     //         style = value.trim();
//     //         return false;
//     //     }
//     // });

//     // var td = style.split('translate3d')[1].slice(1).slice(0, -1).split(',');

//     // var x = parseInt(td[0].trim()) - 10;
//     // var y = parseInt(td[1].trim()) - 40;
//     // var z = parseInt(td[2].trim());

//     // style = 'transform: translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px); z-index: 1000;width: 300px; position: absolute; top: -50px;height:200px;'

//     var html = '';
//     $.each(a.layer.getAllChildMarkers(), function (index, layer) {
//         html += createCard(layer.feature.properties, layer.options);
//     });

//     html = '<div class="overflow-y-scroll infoBoxPop" style="padding-right:10px;height:200px;">' + html + '</div>'

//     var lat = parseFloat(a.layer._latlng.lat);
//     var lng = parseFloat(a.layer._latlng.lng);


//     popup = L.popup({
//         "closeButton": false,
//         "closeOnClick": true,
//         "autoPan": false,
//         "keepInView": true,
//         "autoPanPaddingBottomRight": 4,
//     }).setLatLng([lat, lng]).setContent(html).openOn(map);

// });
// isMouseHover = false;
// clusteredPoints.on('clustermouseout', function (a, item) {
//     if (document.getElementsByClassName("leaflet-popup")[0]) {
//         var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//         elementPopup.id = "targetPopup";
//         elementPopup.addEventListener("mouseover", function (event) {
//             isMouseHover = true;
//         }, false);
//         elementPopup.addEventListener("mouseleave", function (event) {
//             isMouseHover = false;
//             map.closePopup(popup);
//         }, false);
//         setTimeout(() => {
//             if (!isMouseHover) {
//                 // map.closePopup(popup);
//                 if (document.querySelectorAll("#targetPopup")[0]) {
//                     document.querySelectorAll("#targetPopup")[0].remove();
//                 }
//             }
//         }, 100);
//     }
// });
// /*====== POPUP CLUSTER ======*/


// /*====== Add local search box to map ======*/
// try {
//     map.addControl(
//         new L.Control.Search({
//             container: 'localmap',
//             layer: clusteredPoints,
//             autoType: false,
//             zoom: 18,
//             collapsed: false,
//         }).on('search:locationfound', function (e) {
//             e.layer.openPopup();
//         })
//     );
// } catch (error) {

// }
// /*====== Add local search box to map ======*/


// /*====== Add api search box to map ======*/
// // map.addControl(new L.Control.Search({
// //     url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
// //     jsonpParam: 'json_callback',
// //     propertyName: 'display_name',
// //     propertyLoc: ['lat', 'lon'],
// //     marker: L.circleMarker([0, 0], { radius: 30 }),
// //     collapsed: false,
// //     autoType: false,
// //     minLength: 2,
// //     container: 'apimap',
// //     zoom: 18,
// // }));
// /*====== Add api search box to map ======*/


// /*====== Add map reset button to map ======*/
// var refreshbutton = L.easyButton('fa fa-undo', function (btn, map) {
//     id = 'refreshbutton'
//     map.setView([43.747398, -79.429535], 12);
// }, 'Reset to default')
// refreshbutton.addTo(map);
// /*====== Add map reset button to map ======*/

// /*====== Add button to map ======*/
// var stateChangingButton = L.easyButton({
//     states: [{
//         stateName: 'Show-price',
//         icon: 'fa-usd',
//         title: 'Show Price',
//         onClick: function (btn, map) {

//             var exist_markers = [];

//             localforage.setItem('statusIcon', true);
//             clusteredPoints.clearLayers();

//             var newInfo = getFilterData();
//             //different
//             if (!$.isEmptyObject(editableLayers['_layers'])) {
//                 $.each(editableLayers['_layers'], function (index, value) {

//                     var climbsGeojsonMarkers = L.geoJson(newInfo, {
//                         onEachFeature: function (feature, layer) {

//                             // var marker = layer.bindPopup(feature.properties.title);
//                             var html = createCard(feature.properties, feature.properties);

//                             var marker = layer.bindPopup(html, {
//                                 closeButton: false
//                             });

//                             marker.on('mouseover', function (e) {
//                                 this.openPopup();
//                             });
//                             marker.on('mouseout', function (e) {
//                                 if (document.getElementsByClassName("leaflet-popup")[0]) {
//                                     var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                                     elementPopup.id = "targetPopup";
//                                     elementPopup.addEventListener("mouseover", function (event) {
//                                         isMouseHover = true;
//                                     }, false);
//                                     elementPopup.addEventListener("mouseleave", function (event) {
//                                         isMouseHover = false;
//                                         e.target.getPopup().remove();
//                                     }, false);
//                                     setTimeout(() => {
//                                         if (!isMouseHover) {
//                                             // map.closePopup(popup);
//                                             if (document.querySelectorAll("#targetPopup")[0]) {
//                                                 e.target.getPopup().remove();
//                                             }
//                                         }
//                                     }, 50);
//                                 }
//                             });

//                             marker.options['title'] = feature.properties.title;
//                             marker.options['address'] = feature.properties.address;
//                             marker.options['min_price'] = feature.properties.min_price;
//                             marker.options['max_price'] = feature.properties.max_price;
//                             marker.options['occupancy'] = feature.properties.occupancy;
//                             marker.options['min_size'] = feature.properties.min_size;
//                             marker.options['max_size'] = feature.properties.max_size;
//                             marker.options['min_bath'] = feature.properties.min_bath;
//                             marker.options['max_bath'] = feature.properties.max_bath;
//                             marker.options['min_bed'] = feature.properties.min_bed;
//                             marker.options['max_bed'] = feature.properties.max_bed;
//                             marker.options['thumbnail'] = feature.properties.thumbnail;
//                         },
//                         pointToLayer: function (feature, latlng) {
//                             if (value._mRadius == null) {
//                                 if (value.contains(latlng)) {

//                                     clusteredPoints.eachLayer(function (layer) {
//                                         exist_markers.push(layer.feature.properties.coords[0]);
//                                     });

//                                     if (!exist_markers.includes(latlng['lng'])) {
//                                         var min_price = feature.properties.min_price;
//                                         var max_price = feature.properties.max_price;
//                                         var sales_type = feature.properties.sales_type;
//                                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                                     }

//                                 }
//                             } else {
//                                 var theCenterPt = value.getLatLng();
//                                 var theRadius = value.getRadius();
//                                 var counter_points_in_circle = 0;
//                                 distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                                 if (distance_from_centerPoint <= theRadius) {

//                                     counter_points_in_circle += 1;

//                                     clusteredPoints.eachLayer(function (layer) {
//                                         exist_markers.push(layer.feature.properties.coords[0]);
//                                     });

//                                     if (!exist_markers.includes(latlng['lng'])) {
//                                         var min_price = feature.properties.min_price;
//                                         var max_price = feature.properties.max_price;
//                                         var sales_type = feature.properties.sales_type;
//                                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                                     }
//                                 }
//                             }
//                         }
//                     });
//                     clusteredPoints.addLayer(climbsGeojsonMarkers);
//                     map.addLayer(clusteredPoints);
//                 });
//             } else {
//                 var climbsGeojsonMarkers = L.geoJson(newInfo, {
//                     onEachFeature: function (feature, layer) {
//                         // var marker = layer.bindPopup(feature.properties.title);

//                         var html = createCard(feature.properties, feature.properties);

//                         var marker = layer.bindPopup(html, {
//                             closeButton: false
//                         });

//                         marker.on('mouseover', function (e) {
//                             this.openPopup();
//                         });
//                         marker.on('mouseout', function (e) {
//                             if (document.getElementsByClassName("leaflet-popup")[0]) {
//                                 var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                                 elementPopup.id = "targetPopup";
//                                 elementPopup.addEventListener("mouseover", function (event) {
//                                     isMouseHover = true;
//                                 }, false);
//                                 elementPopup.addEventListener("mouseleave", function (event) {
//                                     isMouseHover = false;
//                                     e.target.getPopup().remove();
//                                 }, false);
//                                 setTimeout(() => {
//                                     if (!isMouseHover) {
//                                         // map.closePopup(popup);
//                                         if (document.querySelectorAll("#targetPopup")[0]) {
//                                             e.target.getPopup().remove();
//                                         }
//                                     }
//                                 }, 50);
//                             }
//                         });

//                         marker.options['title'] = feature.properties.title;
//                         marker.options['address'] = feature.properties.address;
//                         marker.options['min_price'] = feature.properties.min_price;
//                         marker.options['max_price'] = feature.properties.max_price;
//                         marker.options['occupancy'] = feature.properties.occupancy;
//                         marker.options['min_size'] = feature.properties.min_size;
//                         marker.options['max_size'] = feature.properties.max_size;
//                         marker.options['min_bath'] = feature.properties.min_bath;
//                         marker.options['max_bath'] = feature.properties.max_bath;
//                         marker.options['min_bed'] = feature.properties.min_bed;
//                         marker.options['max_bed'] = feature.properties.max_bed;
//                         marker.options['thumbnail'] = feature.properties.thumbnail;
//                     },
//                     pointToLayer: function (feature, latlng) {
//                         var min_price = feature.properties.min_price;
//                         var max_price = feature.properties.max_price;
//                         var sales_type = feature.properties.sales_type;
//                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                     }
//                 });
//                 clusteredPoints.addLayer(climbsGeojsonMarkers);
//                 map.addLayer(clusteredPoints);
//             }
//             btn.state('Show-only-title');
//         }
//     }, {
//         stateName: 'Show-only-title',
//         icon: 'fa-commenting',
//         title: 'Show Only Title',
//         onClick: function (btn, map) {

//             var exist_markers = [];
//             localforage.setItem('statusIcon', false);
//             clusteredPoints.clearLayers();

//             var newInfo = getFilterData();
//             //different
//             if (!$.isEmptyObject(editableLayers['_layers'])) {
//                 $.each(editableLayers['_layers'], function (index, value) {

//                     var climbsGeojsonMarkers = L.geoJson(newInfo, {
//                         onEachFeature: function (feature, layer) {
//                             // var marker = layer.bindPopup(feature.properties.title);

//                             var html = createCard(feature.properties, feature.properties);

//                             var marker = layer.bindPopup(html, {
//                                 closeButton: false
//                             });

//                             marker.on('mouseover', function (e) {
//                                 this.openPopup();
//                             });
//                             marker.on('mouseout', function (e) {
//                                 if (document.getElementsByClassName("leaflet-popup")[0]) {
//                                     var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                                     elementPopup.id = "targetPopup";
//                                     elementPopup.addEventListener("mouseover", function (event) {
//                                         isMouseHover = true;
//                                     }, false);
//                                     elementPopup.addEventListener("mouseleave", function (event) {
//                                         isMouseHover = false;
//                                         e.target.getPopup().remove();
//                                     }, false);
//                                     setTimeout(() => {
//                                         if (!isMouseHover) {
//                                             // map.closePopup(popup);
//                                             if (document.querySelectorAll("#targetPopup")[0]) {
//                                                 e.target.getPopup().remove();
//                                             }
//                                         }
//                                     }, 50);
//                                 }
//                             });

//                             marker.options['title'] = feature.properties.title;
//                             marker.options['address'] = feature.properties.address;
//                             marker.options['min_price'] = feature.properties.min_price;
//                             marker.options['max_price'] = feature.properties.max_price;
//                             marker.options['occupancy'] = feature.properties.occupancy;
//                             marker.options['min_size'] = feature.properties.min_size;
//                             marker.options['max_size'] = feature.properties.max_size;
//                             marker.options['min_bath'] = feature.properties.min_bath;
//                             marker.options['max_bath'] = feature.properties.max_bath;
//                             marker.options['min_bed'] = feature.properties.min_bed;
//                             marker.options['max_bed'] = feature.properties.max_bed;
//                             marker.options['thumbnail'] = feature.properties.thumbnail;
//                         },
//                         pointToLayer: function (feature, latlng) {
//                             if (value._mRadius == null) {
//                                 if (value.contains(latlng)) {

//                                     clusteredPoints.eachLayer(function (layer) {
//                                         exist_markers.push(layer.feature.properties.coords[0]);
//                                     });

//                                     if (!exist_markers.includes(latlng['lng'])) {
//                                         var min_price = feature.properties.min_price;
//                                         var max_price = feature.properties.max_price;
//                                         var sales_type = feature.properties.sales_type;
//                                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                                     }

//                                 }
//                             } else {
//                                 var theCenterPt = value.getLatLng();
//                                 var theRadius = value.getRadius();
//                                 var counter_points_in_circle = 0;
//                                 distance_from_centerPoint = latlng.distanceTo(theCenterPt);
//                                 if (distance_from_centerPoint <= theRadius) {

//                                     counter_points_in_circle += 1;

//                                     clusteredPoints.eachLayer(function (layer) {
//                                         exist_markers.push(layer.feature.properties.coords[0]);
//                                     });

//                                     if (!exist_markers.includes(latlng['lng'])) {
//                                         var min_price = feature.properties.min_price;
//                                         var max_price = feature.properties.max_price;
//                                         var sales_type = feature.properties.sales_type;
//                                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                                     }

//                                 }
//                             }
//                         }
//                     });
//                     clusteredPoints.addLayer(climbsGeojsonMarkers);
//                     map.addLayer(clusteredPoints);
//                 });
//             } else {
//                 var climbsGeojsonMarkers = L.geoJson(newInfo, {
//                     onEachFeature: function (feature, layer) {
//                         // var marker = layer.bindPopup(feature.properties.title);

//                         var html = createCard(feature.properties, feature.properties);

//                         var marker = layer.bindPopup(html, {
//                             closeButton: false
//                         });

//                         marker.on('mouseover', function (e) {
//                             this.openPopup();
//                         });
//                         marker.on('mouseout', function (e) {
//                             if (document.getElementsByClassName("leaflet-popup")[0]) {
//                                 var elementPopup = document.getElementsByClassName("leaflet-popup")[0];
//                                 elementPopup.id = "targetPopup";
//                                 elementPopup.addEventListener("mouseover", function (event) {
//                                     isMouseHover = true;
//                                 }, false);
//                                 elementPopup.addEventListener("mouseleave", function (event) {
//                                     isMouseHover = false;
//                                     e.target.getPopup().remove();
//                                 }, false);
//                                 setTimeout(() => {
//                                     if (!isMouseHover) {
//                                         // map.closePopup(popup);
//                                         if (document.querySelectorAll("#targetPopup")[0]) {
//                                             e.target.getPopup().remove();
//                                         }
//                                     }
//                                 }, 50);
//                             }
//                         });

//                         marker.options['title'] = feature.properties.title;
//                         marker.options['address'] = feature.properties.address;
//                         marker.options['min_price'] = feature.properties.min_price;
//                         marker.options['max_price'] = feature.properties.max_price;
//                         marker.options['occupancy'] = feature.properties.occupancy;
//                         marker.options['min_size'] = feature.properties.min_size;
//                         marker.options['max_size'] = feature.properties.max_size;
//                         marker.options['min_bath'] = feature.properties.min_bath;
//                         marker.options['max_bath'] = feature.properties.max_bath;
//                         marker.options['min_bed'] = feature.properties.min_bed;
//                         marker.options['max_bed'] = feature.properties.max_bed;
//                         marker.options['thumbnail'] = feature.properties.thumbnail;
//                     },
//                     pointToLayer: function (feature, latlng) {
//                         var min_price = feature.properties.min_price;
//                         var max_price = feature.properties.max_price;
//                         var sales_type = feature.properties.sales_type;
//                         return L.marker(latlng, { icon: setCustomIcon(feature.properties.title, min_price, max_price, sales_type, feature.properties.status) });
//                     }
//                 });
//                 clusteredPoints.addLayer(climbsGeojsonMarkers);
//                 map.addLayer(clusteredPoints);
//             }
//             btn.state('Show-price');
//         }
//     }]
// });
// stateChangingButton.addTo(map);
// /*====== Add button to map ======*/


// /*========= topology start =========*/
// // adding the province name to the visible div
// function addTextToDiv(text) {
//     const markerPlace = document.querySelector(".marker-position");
//     markerPlace.textContent = text;
// }

// // showing the name of the province
// function getVoivodeshipName(feature, layer) {
//     if (feature.properties && feature.properties.name) {
//         layer.bindPopup(feature.properties.name);
//     }
// }


// var toggle = L.easyButton({
//     states: [{
//         stateName: 'add-neighbourhoods',
//         icon: 'fa-map',
//         title: 'Show Toronto Neighbourhoods',
//         onClick: function (control) {
//             fetch(
//                 "jsonData/toronto.geojson"
//             )
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (data) {
//                     var layer34 = new L.GeoJSON(data, {
//                         // A Function that will be called once for each
//                         // created Feature, after it has been created and styled
//                         onEachFeature: function (feature, layer) {
//                             layer.on("mouseover", function (e) {
//                                 // bindPopup
//                                 getVoivodeshipName(feature, layer);
//                                 // show voivodeship
//                                 addTextToDiv(feature.properties.name);
//                                 //this.openPopup();
//                                 // style
//                                 this.setStyle({
//                                     fillColor: "#eb4034",
//                                     weight: 1,
//                                     color: "#eb4034",
//                                     fillOpacity: 0.7
//                                 });
//                             });
//                             layer.on("mouseout", function () {
//                                 //this.closePopup();
//                                 // style
//                                 this.setStyle({
//                                     fillColor: "#3388ff",
//                                     weight: 2,
//                                     color: "#3388ff",
//                                     fillOpacity: 0.2
//                                 });
//                             });
//                             layer.on("click", function () {
//                                 // adding the province name to the visible div
//                                 addTextToDiv(feature.properties.name);
//                             });
//                         }
//                     });
//                     var layerGroup = new L.LayerGroup();
//                     layerGroup.addTo(map);
//                     layerGroup.addLayer(layer34);


//                 });
//             control.state('remove-neighbourhoods');
//             $('.marker-position').css('display', "block");
//         }
//     }, {
//         icon: 'fa fa-eye-slash',
//         stateName: 'remove-neighbourhoods',
//         onClick: function (control) {
//             map.eachLayer(function (layer) {
//                 if (layer instanceof L.GeoJSON) {
//                     layer.remove()
//                 }
//             });
//             control.state('add-neighbourhoods');
//             $('.marker-position').css('display', "none");
//         },
//         title: 'Hide Toronto neighbourhoods'
//     }]
// });
// toggle.addTo(map);
// /*========= topology end =========*/


// map.on('moveend', ListGetBounds);

// var status_move_map = false;
// var total_result = 0;
// var points = [];
// function ListGetBounds() {
//     var img_url;

//     if ($.isEmptyObject(editableLayers['_layers'])) {

//         status_move_map = true;

//         $('#map-data').html('');
//         total_result = 0;

//         clusteredPoints.eachLayer(function (layer) {

//             if (map.getBounds().contains(layer.getLatLng())) {

//                 total_result = dataToCard(layer.feature.properties, layer.options, points);

//                 $('#result-list').html((total_result) + ' items were found');
//             }
//         });
//         // status_move_map = false;

//     } else {

//         if (status_move_map) {
//             $('#map-data').html('');
//             total_result = 0;
//         }

//         clusteredPoints.eachLayer(function (layer) {

//             $.each(editableLayers['_layers'], function (index, value) {
//                 if (value._mRadius == null) {
//                     if (value.contains(layer.getLatLng())) {

//                         points.push(layer.feature.properties.post_id);

//                         total_result = dataToCard(layer.feature.properties, layer.options, points);

//                     }
//                     $('#result-list').html((total_result) + ' items were found');
//                 } else {

//                     var theCenterPt = value.getLatLng();
//                     var theRadius = value.getRadius();
//                     var counter_points_in_circle = 0;
//                     var layerLtLng = layer.getLatLng();
//                     distance_from_centerPoint = layerLtLng.distanceTo(theCenterPt);
//                     if (distance_from_centerPoint <= theRadius) {

//                         points.push(layer.feature.properties.post_id);
//                         counter_points_in_circle += 1;

//                         total_result = dataToCard(layer.feature.properties, layer.options, points);


//                     }
//                     $('#result-list').html((total_result) + ' items were found');
//                 }
//             });
//         });

//         status_move_map = false;
//     }

//     if (total_result < 1) {
//         $('#result-list').html(0);
//         const Toast = Swal.mixin({
//             toast: true,
//             position: 'bottom-start',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//                 toast.addEventListener('mouseenter', Swal.stopTimer)
//                 toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//         })

//         Toast.fire({
//             icon: 'error',
//             title: 'No property found.'
//         })
//         // $('.myalert').slideDown().delay(5000).slideUp();
//     }

// }

// function checkIsLayer() {
//     if (!$.isEmptyObject(editableLayers['_layers'])) {
//         map.fire('draw:edited');
//     }
// }

// $('#showLeft').click(function () {
//     $('.animate-menu-left').toggleClass('animate-menu-open')
// })

// $('#pushRight').click(function () {
//     $('body').addClass('animate-menu-push');
//     $('body').toggleClass('animate-menu-push-right')
//     $('.animate-menu-left').toggleClass('animate-menu-open')
// })

// $('button').click(function () {
//     $(".popup-filter").css({ "display": "none" });
//     if ($(this).data('role') == 'popup-filter') {
//         $(this).attr('data-status-button', 'active');
//         $(this).parent().find('.popup-filter').attr('data-status', 'active');
//         let target = $(this).data('target');
//         $(target).toggle();
//     }
// });

// $(document).click(function (e) {
//     if ($(e.target).data('status-button') != 'active') {
//         if ($(e.target).attr('class') == 'popup-filter') {
//             if ($(e.target).data('status') != 'active') {
//                 $(".popup-filter").css({ "display": "none" });
//             }
//         } else {
//             if ($(e.target).attr('class') != 'search-input') {
//                 $(".popup-filter").css({ "display": "none" });
//             }
//         }
//     }
// });


// /*========= for tailwind =========*/
// $('button').click(function (event) {
//     if ($(this).data('role') == 'popupFilter') {
//         $(this).attr('data-status-button', 'active');
//         $(this).parent().find('.popupFilter').attr('data-status', 'active');
//         if ($(this).parent().find('.popupFilter').attr('style') == "display: block;") {
//             $(this).parent().find('.popupFilter').attr('style', 'display: none;');
//             $('.popupFilter').attr('style', 'display: none;');
//         } else {
//             $('.popupFilter').attr('style', 'display: none;');
//             $(this).parent().find('.popupFilter').attr('style', 'display: block;');
//         }
//         // let target = $(this).data('target');
//         // $(target).toggle();
//     }
// });

// $('.popupFilter input, .popupFilter').click(function (event) {
//     event.stopPropagation();
// });


// $(document).click(function (e) {
//     if ($(e.target).data('status-button') != 'active') {
//         if ($(e.target).attr('class') == 'popupFilter') {
//             if ($(e.target).data('status') != 'active') {
//                 $(".popupFilter").css({ "display": "none" });
//             }
//         } else {
//             if ($(e.target).attr('class') != 'search-input') {
//                 $(".popupFilter").css({ "display": "none" });
//             }
//         }
//     }
// });
// /*========= for tailwind =========*/


// $('#localmap .leaflet-control-search input.search-input').attr('placeholder', 'Search Condos');
// $('#apimap .leaflet-control-search input.search-input').attr('placeholder', 'Jump to Location');

// $('#reset-filters').click(function () {
//     $('.select2').remove();
//     // $('.select2-results__option--selectable').prop('aria-selected', false);
//     // $('input[type="checkbox"]').trigger("change");
//     changeSelect2ToCheckBox([{ allowClear: true }], 'sales_type', '_sales_type', 'Stage');
//     changeSelect2ToCheckBox([{ allowClear: true }], 'types', '_type', 'Type');
//     changeSelect2ToCheckBox([{ allowClear: true }], 'incentives', '_incentives', 'Incentives');
//     localforage.setItem("mapInfo", JSON.stringify(localInfoMap));

//     localforage.setItem("statusReset", true);

//     $('#switch-comming-soon').prop('checked', false);
//     $('#switch-comming-soon').parent().find('.ui-switcher').attr('aria-checked', false);

//     // $('.select2Checkbox').prop('checked', false);
//     $('#sales_type').val(null).trigger('change');
//     $('#types').val(null).trigger('change');
//     $('#incentives').val(null).trigger('change');


//     $("#slider-range").slider("values", 0, 200000);
//     $("#slider-range").slider("values", 1, 3000000);
//     $("#amount").val("$" + 200000 + " - $" + 3000000 + "+");

//     $("#slider-range-percent").slider("values", 0, 0);
//     $("#slider-range-percent").slider("values", 1, 20);
//     $("#percent").val("%" + 0 + " - %" + 20);

//     $("#slider-range-flatfee").slider("values", 0, 0);
//     $("#slider-range-flatfee").slider("values", 1, 90000000);
//     $("#flatfee").val("$" + 0 + " - $" + 90000000);

//     $("#slider-range-suitesize").slider("values", 0, 100);
//     $("#slider-range-suitesize").slider("values", 1, 10000);
//     $("#suitesize").val(100 + " sq.ft - " + 10000 + "+ sq.ft");

//     $("#slider-range-beds").slider("values", 0, 0);
//     $("#slider-range-beds").slider("values", 1, 10);
//     $("#beds").val(0 + " beds - " + 10 + " beds");

//     $("#slider-range-baths").slider("values", 0, 0);
//     $("#slider-range-baths").slider("values", 1, 10);
//     $("#baths").val(0 + " baths - " + 10 + " baths");

//     $("#slider-range-occupancy").slider("values", 0, 2023);
//     $("#slider-range-occupancy").slider("values", 1, 2035);
//     $("#occupancy").val(2023 + " - " + 2035);

//     localforage.removeItem("statusReset");

//     // for tailwind
//     $('#Pricerange').parent().find('.btn-light').html('Price Range').removeClass('btn-light-blue');
//     $('#Suitesize').parent().find('.btn-light').html('Suite Size').removeClass('btn-light-blue');
//     $('#Beds').parent().find('.btn-light').html('Beds').removeClass('btn-light-blue');
//     $('#Baths').parent().find('.btn-light').html('Baths').removeClass('btn-light-blue');
//     $('#Occupancy').parent().find('.btn-light').html('Occupancy').removeClass('btn-light-blue');
//     $('#Comission').addClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).removeClass('btn-light-blue').html('Comission');

//     // $('#Pricerange').parent().find('.btn-light').html('Price Range' + ' <i class="fa fa-caret-down"></i>').removeClass('custom-btn-blue');
//     // $('#Suitesize').parent().find('.btn-light').html('Suite Size' + ' <i class="fa fa-caret-down"></i>').removeClass('custom-btn-blue');
//     // $('#Beds').parent().find('.btn-light').html('Beds' + ' <i class="fa fa-caret-down"></i>').removeClass('custom-btn-blue');
//     // $('#Baths').parent().find('.btn-light').html('Baths' + ' <i class="fa fa-caret-down"></i>').removeClass('custom-btn-blue');
//     // $('#Occupancy').parent().find('.btn-light').html('Occupancy' + ' <i class="fa fa-caret-down"></i>').removeClass('custom-btn-blue');
//     window.history.replaceState({}, '', `${location.pathname}`);

//     var data = localforage.getItem("mapInfo");
//     data = JSON.parse(data);
//     var format = new FeatureFormat();
//     var jsonFormat = format.convert(data);
//     clusteredPoints.clearLayers();
//     var info = jsonFormat;
//     editableLayers.clearLayers();
//     var layermap = new LayerMap();
//     layermap.make(info);
//     ListGetBounds();

// });

// changeSelect2ToCheckBox([], 'sales_type', '_sales_type', 'Stage');
// changeSelect2ToCheckBox([], 'types', '_type', 'Type');
// changeSelect2ToCheckBox([], 'incentives', '_incentives', 'Incentives');

// function getFilterData() {
//     var result1, result2, result3, result4, result5;
//     var queries = {
//         min_price: "price_from",
//         max_price: "price_to",
//         min_bath: "bath_from",
//         max_bath: "bath_to",
//         min_size: "size_from",
//         max_size: "size_to",
//         min_bed: "bed_from",
//         max_bed: "bed_to",
//         occupancy: "occupancy",
//         comission_by_percent: "percent",
//         comission_by_flatfee: "flatfee",
//     };
//     var filter = new FilterMap();
//     result1 = filter.set(queries, 'assignment');
//     result2 = filter.set(queries, 'preconstruction');
//     result3 = filter.set(queries, 'comingsoon');
//     result4 = filter.set(queries, 'resale');
//     result5 = filter.set(queries, 'soldout');
//     var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);

//     var format = new FeatureFormat();
//     var jsonFormat = format.convert(result);
//     return jsonFormat;
// }

// function getFilterDataJson() {
//     var result1, result2, result3, result4, result5;
//     var queries = {
//         min_price: "price_from",
//         max_price: "price_to",
//         min_bath: "bath_from",
//         max_bath: "bath_to",
//         min_size: "size_from",
//         max_size: "size_to",
//         min_bed: "bed_from",
//         max_bed: "bed_to",
//         occupancy: "occupancy",
//         comission_by_percent: "percent",
//         comission_by_flatfee: "flatfee",
//     };
//     var filter = new FilterMap();
//     result1 = filter.set(queries, 'assignment');
//     result2 = filter.set(queries, 'preconstruction');
//     result3 = filter.set(queries, 'comingsoon');
//     result4 = filter.set(queries, 'resale');
//     result5 = filter.set(queries, 'soldout');
//     var result = result1.concat(result2).concat(result3).concat(result4).concat(result5);
//     var jsonFormat = { info: result };
//     return jsonFormat;
// }

// function isParamUrl() {
//     let params = (new URL(document.location)).searchParams;
//     let price_from = params.get("price_from");
//     let bath_from = params.get("bath_from");
//     let size_from = params.get("size_from");
//     let bed_from = params.get("bed_from");
//     let occupancy_from = params.get("occupancy_from");
//     let percent_from = params.get("percent_from");
//     let flatfee_from = params.get("flatfee_from");
//     let sales_type = params.get("sales_type");
//     let types = params.get("types");
//     let incentives = params.get("incentives");
//     const parameters = [incentives, types, sales_type, price_from, bath_from, size_from, bed_from, occupancy_from, percent_from, flatfee_from];
//     let hasValue = false;
//     parameters.forEach(parameter => {
//         if (parameter !== null && parameter !== '') {
//             hasValue = true;
//             return true; // Exit the loop and return true
//         }
//     });
//     return hasValue;
//     // if (incentives != '' || types != '' || sales_type != '' || price_from != '' || bath_from != '' || size_from != '' || bed_from != '' || occupancy_from != '' || percent_from != '' || flatfee_from != '') {
//     //     return true;
//     // } else { return false;}
// }
// map.fire('moveend');

// $(function () {
//     $.switcher();
// });

// $('.select2-selection').click(function (e) {
//     $.each($('.select2-results__option--selected'), function (index, value) {
//         $(value).find('.checkbox').find('.select2Checkbox').prop('checked', true);
//     });
// });

// $('#Comission').click(function (event) {
//     $('#Comission-popup').toggle();
// });

// $('#Deposit').click(function (event) {
//     $('#Deposit-popup').toggle();
// });

// $('.tab-button').click(function () {

//     const queryStrings = new URLSearchParams(location.search);
//     queryStrings.delete('flatfee_from');
//     queryStrings.delete('flatfee_to');
//     queryStrings.delete('percent_from');
//     queryStrings.delete('percent_to');
//     window.history.replaceState({}, '', `${location.pathname}?${queryStrings.toString()}`);



//     $('#Comission').addClass(['bg-gradient-to-t', 'to-white', 'from-gray-100', 'text-black']).removeClass('btn-light-blue').html('Comission');


//     var this_element = $(this);
//     $(this).toggleClass(['to-white', 'from-gray-100']).toggleClass('from-white to-gray-100 active-tab');

//     var tabs = $('.tab-button');
//     var tabs_content = $('.tab-content');

//     $.each(tabs, function (index, item) {
//         if (!$(item).hasClass('to-white') && !$(item).hasClass('active-tab')) {
//             $(this).removeClass(['from-white', 'to-gray-100']).addClass('to-white from-gray-100');
//         }
//     });

//     $.each(tabs_content, function (index, item) {
//         if (this_element.data('target') == $(item).attr('id')) {
//             $(item).removeClass('hidden');
//         } else {
//             $(item).addClass('hidden');
//         }
//     });
//     $(this).removeClass('active-tab');
// });

// $('.activated').removeClass('hidden');

// $(document).click(function (event) {
//     if (event.target.id != 'Comission' && event.target.id != 'tabPercent' && event.target.id != 'tabFlatFee') {
//         $('#Comission-popup').hide();
//     }
//     // if (event.target.id != 'Deposit') {
//     //     $('#Deposit-popup').hide();
//     // }
// });

// $('#sales_type').change(function () {
//     if ($(this).val().includes('Preconstruction') || $(this).val().includes('Assignment')) {
//         $('#Comission').show();
//     } else {
//         $('#Comission').hide();
//     };
// });

// $('#add-deposit').click(function () {
//     $('.deposit-wrap:last').after(
//         '<div class="flex items-center gap-1 mb-4 mt-2 deposit-wrap">' +
//         '<button type="button" class="bg-red-400 text-white px-2 rounded-md py-0 mt-7 remove-deposit-field">' +
//         '<i class="fa fa-remove text-sm"></i>' +
//         '</button>' +
//         '<div>' +
//         '<label for="" class="text-gray-500">Fee</label>' +
//         '<input name="fee[]" type="text" class="border-none mt-1 bg-gray-100 p-2 rounded-md text-gray-400 w-full focus-visible:outline-none">' +
//         '</div>' +
//         '<div>' +
//         '<label for="" class="text-gray-500">Days</label>' +
//         '<input name="day[]" type="text" class="border-none mt-1 bg-gray-100 p-2 rounded-md text-gray-400 w-full focus-visible:outline-none">' +
//         '</div>' +
//         '</div>'
//     )

// });

// $(document).on('click', '.remove-deposit-field', function () {
//     $(this).parent().remove();
// });

// $('#deposit-submit').click(function () {

//     var days = $("input[name='day[]']").map(function () { return $(this).val(); }).get();
//     var fees = $("input[name='fee[]']").map(function () { return $(this).val(); }).get();

//     var deposit = [];
//     for (var i = 0; i < days.length; i++) {
//         deposit.push({ "fee": fees[i], "day": days[i] });
//     }

//     var mydata = new SBFP();
//     $.each(deposit, function (index, item) {
//         // console.log(mydata.whereCFp('deposits', '<=', item.day, item.fee));
//     });

// });



// function getCommons(items) {
//     return items.reduce((a, b) =>
//         a.filter(({ post_id: c }) => b.some(({ post_id }) => post_id == c))
//     );
// }

// // function getCommons(items) {
// //     var data = [];
// //     for (var i = 0; i < items[0].length; i++) {
// //         var value = items[0][i].post_id;
// //         var item = items[0][i];
// //         var check = items.every(function (collection) {
// //             return collection.map(e => e.post_id).indexOf(value) !== -1;
// //         });
// //         if (check) {
// //             data.push(item);
// //         }
// //     }
// //     return data;
// // }

// var sideBar = document.getElementById("mobile-nav");
// var openSidebar = document.getElementById("openSideBar");
// var closeSidebar = document.getElementById("closeSideBar");
// try {
//     sideBar.style.transform = "translateX(-320px)";
// } catch (error) {

// }

// function sidebarHandler(flag) {
//     if (flag) {
//         sideBar.style.transform = "translateX(0px)";
//         openSidebar.classList.add("hidden");
//         closeSidebar.classList.remove("hidden");
//     } else {
//         sideBar.style.transform = "translateX(-320px)";
//         closeSidebar.classList.add("hidden");
//         openSidebar.classList.remove("hidden");
//     }
// }

// function createCard(properties, options) {
//     if (properties.thumbnail == false) {
//         img_url = url;
//     } else {
//         img_url = properties.thumbnail;
//     }

//     var newPrice;
//     if (properties.max_price == null || properties.max_price == '') {
//         newprice = '$' + parseInt(properties.min_price).toLocaleString() + ' sq.ft ';
//         if (properties.status == "sold out") { newPrice = "Price: N/A | Sold out" } else if (newPrice == "$" || newPrice == null) { newPrice = "Price: TBA" }
//     } else {
//         newPrice = '$' + parseInt(properties.min_price).toLocaleString() + ' to $' + parseInt(properties.max_price).toLocaleString();
//         if (properties.status == "sold out") { newPrice = "Price: N/A | Sold out" } else if (newPrice == "$ to $") { newPrice = "Price: TBA" }
//     }

//     var newSize;
//     if (properties.max_size == null) {
//         newSize = properties.min_size + ' sq.ft ';
//         if (properties.status == "sold out") { newSize = "Size: N/A " } else if (newSize == " sq.ft " || newSize == null) { newSize = "Size: N/A " }
//     } else {
//         newSize = properties.min_size + ' to ' + properties.max_size + ' sq.ft ';
//         if (properties.status == "sold out") { newSize = "Size: N/A " } else if (newSize == " to  sq.ft " || newSize == null) { newSize = "Size: N/A " }
//     }

//     var occupancy = properties.occupancy == '' || properties.occupancy == null ? '' : '| ' + properties.occupancy;

//     var html = '<a target="_blank" class="link-card" href="' + properties.permalink + '">' +
//         '<div id="point_' + properties.post_id + '" class="bg-gray-100 p-4 rounded-xl flex space-x-4 mb-4">' +
//         '<div class="w-28 h-28">' +
//         '<img class="w-full block rounded-3xl" loading="lazy" data-src="" src="' + img_url + '" alt="">' +
//         '</div>' +
//         '<div class="flex flex-col w-60">' +
//         '<h2 class="font-bold">' + properties.title + '</h2>' +
//         '<h3 class="text-sm mt-2">' + newPrice + '</h3>' +
//         '<h4 class="text-orange-500 text-xs">' + newSize + occupancy + '</h4>' +
//         '<h5 class="text-gray-400 mt-3 text-sm">' + properties.address + '</h5>' +
//         '</div>' +
//         '</div>' +
//         '</a>';

//     return html;
// }

// function dataToCard(properties, options, points) {
//     if (properties.thumbnail == false) {
//         img_url = url;
//     } else {
//         img_url = properties.thumbnail;
//     }

//     var newPrice;
//     if (properties.max_price == null || properties.max_price == '') {
//         newprice = '$' + parseInt(properties.min_price).toLocaleString() + ' sq.ft ';
//         if (properties.status == "sold out") { newPrice = "Price: N/A | Sold out" } else if (newPrice == "$" || newPrice == null) { newPrice = "Price: TBA" }
//     } else {
//         newPrice = '$' + parseInt(properties.min_price).toLocaleString() + ' to $' + parseInt(properties.max_price).toLocaleString();
//         if (properties.status == "sold out") { newPrice = "Price: N/A | Sold out" } else if (newPrice == "$ to $") { newPrice = "Price: TBA" }
//     }

//     var newSize;
//     if (properties.max_size == null) {
//         newSize = properties.min_size + ' sq.ft ';
//         if (properties.status == "sold out") { newSize = "Size: N/A " } else if (newSize == " sq.ft " || newSize == null) { newSize = "Size: N/A " }
//     } else {
//         newSize = properties.min_size + ' to ' + properties.max_size + ' sq.ft ';
//         if (properties.status == "sold out") { newSize = "Size: N/A " } else if (newSize == " to  sq.ft " || newSize == null) { newSize = "Size: N/A " }
//     }

//     var occupancy = properties.occupancy == '' || properties.occupancy == null ? '' : '| ' + properties.occupancy;

//     if (points == '') {
//         // $('#map-data').append('<a target="_blank" class="link-card" href="' + layer.feature.properties.permalink + '">' +
//         //     '<div id="point_' + layer.feature.properties.post_id +
//         //     '" class="col-lg-12 mb-4">' +
//         //     '<div class="card">' +
//         //     '<div class="card-body p-3">' +
//         //     '<div class="thumbnail">' +
//         //     '<img class="" src="' + img_url + '" alt="">' +
//         //     '</div>' +
//         //     '<div>' +
//         //     '<h5 class="card-title fs-16 font-weight-bold">' + layer.options.title + '</h5>' +
//         //     '<p class="card-text fs-13 font-weight-bold">' + newPrice + '</p>' +
//         //     '<div class="card-text fs-12 c-text-orange">' + newSize + ' sq.ft  | ' + layer.options.occupancy + '</div>' +
//         //     '<div class="card-text fs-12 mt-2 c-text-blue">' + layer.options.address + '</div>' +
//         //     '</div></div></div></div></a>'
//         // );

//         $('#map-data').append('<a target="_blank" class="link-card" href="' + properties.permalink + '">' +
//             '<div id="point_' + properties.post_id + '" class="bg-white p-4 rounded-xl shadow-lg shadow-gray-200 flex space-x-4 mb-4 border-l-4 border-blue-500">' +
//             '<div class="w-28 h-28">' +
//             '<img class="w-full block rounded-3xl" loading="lazy" data-src="" src="' + img_url + '" alt="">' +
//             '</div>' +
//             '<div class="flex flex-col w-60">' +
//             '<h2 class="font-bold">' + options.title + '</h2>' +
//             '<h3 class="text-sm mt-2">' + newPrice + '</h3>' +
//             '<h4 class="text-orange-500 text-xs">' + newSize + occupancy + '</h4>' +
//             '<h5 class="text-gray-400 mt-3 text-sm">' + options.address + '</h5>' +
//             '</div>' +
//             '</div>' +
//             '</a>'
//         );
//         total_result++;
//     } else {
//         if (points.filter(x => x === properties.post_id).length == 1) {

//             // $('#map-data').append('<a target="_blank" class="link-card" href="' + layer.feature.properties.permalink + '">' +
//             //     '<div id="point_' + layer.feature.properties.post_id +
//             //     '" class="col-lg-12 mb-4">' +
//             //     '<div class="card">' +
//             //     '<div class="card-body p-3">' +
//             //     '<div class="thumbnail">' +
//             //     '<img class="" src="' + img_url + '" alt="">' +
//             //     '</div>' +
//             //     '<div>' +
//             //     '<h5 class="card-title fs-16 font-weight-bold">' + layer.options.title + '</h5>' +
//             //     '<p class="card-text fs-13 font-weight-bold">' + newPrice + '</p>' +
//             //     '<div class="card-text fs-12 c-text-orange">' + newSize + ' sq.ft  | ' + layer.options.occupancy + '</div>' +
//             //     '<div class="card-text fs-12 mt-2 c-text-blue">' + layer.options.address + '</div>' +
//             //     '</div></div></div></div></a>'
//             // );

//             $('#map-data').append('<a target="_blank" class="link-card" href="' + properties.permalink + '">' +
//                 '<div id="point_' + properties.post_id + '" class="bg-white p-4 rounded-xl shadow-lg shadow-gray-200 flex space-x-4 mb-4 border-l-4 border-blue-500">' +
//                 '<div class="w-28 h-28">' +
//                 '<img class="w-full block rounded-3xl" loading="lazy" data-src="" src="' + img_url + '" alt="">' +
//                 '</div>' +
//                 '<div class="flex flex-col w-60">' +
//                 '<h2 class="font-bold">' + options.title + '</h2>' +
//                 '<h3 class="text-sm mt-2">' + newPrice + '</h3>' +
//                 '<h4 class="text-orange-500 text-xs">' + newSize + ' sq.ft  | ' + options.occupancy + '</h4>' +
//                 '<h5 class="text-gray-400 mt-3 text-sm">' + options.address + '</h5>' +
//                 '</div>' +
//                 '</div>' +
//                 '</a>'
//             );
//             total_result++;
//         }
//     }

//     return total_result;
// }


// //SearchJson
// $('#SearchJson').keyup(function (e) {
//     $('.search-result').html('');
//     var newData = [];
//     var query = $(this).val();
//     if (query.length > 3) {
//         var data = localforage.getItem("data_reserve");
//         var Q = new jsonQ(data);
//         result = Q.from('info').fetch();
//         $.each(result, function (i, item) {
//             newData.push({
//                 "coords": item.coords,
//                 "title": (item.title).toLowerCase(),
//                 "city": (item.city).toLowerCase(),
//             });
//         });


//         var dt = { info: newData };
//         var Q = new jsonQ(dt);
//         new_result = Q.from('info')
//             .where('title', 'contains', query.toLowerCase())
//             .orWhere('city', 'contains', query.toLowerCase())
//             .fetch();

//         $('.search-result').removeClass('hidden');
//         $('.wrap-search-input i').removeClass('hidden').addClass('flex');
//         $.each(new_result, function (i, item) {
//             $('.search-result').append('<div data-coords="' + item.coords + '" class="search-result-item">' + item.title + '</div>')
//         });

//         // jumpToLocation(new_result[0].coords, 18);
//     }
// });


// function jumpToLocation(latlng, zoom) {
//     map.flyTo([latlng[1], latlng[0]], zoom);
// }

// $(document).on('click', '.search-result-item', function () {
//     var coords = $(this).data('coords');
//     coords = coords.split(',');
//     jumpToLocation([coords[0], coords[1]], 18);
// });

// $('.wrap-search-input i').click(function () {
//     $('#SearchJson').val('');
//     $('.search-result').html('');
//     $('.search-result').addClass('hidden');
//     $(this).addClass('hidden').removeClass('flex');
// });

// $(".price .min").on("keyup", function (e) {
//     if ($(this).val().length != 0) {
//         $('#slider-range').slider("values", 0, parseInt($(this).val()));
//         $("#amount").val("$" + $(this).val().toLocaleString() + " - $" + $('#slider-range').slider("values", 1).toLocaleString());
//     } else {
//         $('#slider-range').slider("values", 0, 200000);
//         $("#amount").val("$" + (200000).toLocaleString() + " - $" + $('#slider-range').slider("values", 1).toLocaleString());
//     }
// });
// $(".price .max").on("keyup", function (e) {
//     if ($(this).val().length != 0) {
//         $('#slider-range').slider("values", 1, parseInt($(this).val()));
//         $("#amount").val("$" + $('#slider-range').slider("values", 0).toLocaleString() + " - $" + $(this).val().toLocaleString());
//     } else {
//         $('#slider-range').slider("values", 1, 10000000);
//         $("#amount").val("$" + $('#slider-range').slider("values", 0).toLocaleString() + " - $" + (10000000).toLocaleString());
//     }
// });


// $(".suitesize .min").on("keyup", function (e) {
//     if ($(this).val().length != 0) {
//         $('#slider-range-suitesize').slider("values", 0, parseInt($(this).val()));
//         $("#suitesize").val($(this).val() + " sq.ft - " + $('#slider-range-suitesize').slider("values", 1) + " sq.ft");

//     } else {
//         $('#slider-range-suitesize').slider("values", 0, 0);
//         $("#suitesize").val(0 + " sq.ft - " + $('#slider-range-suitesize').slider("values", 1) + " sq.ft");

//     }
// });
// $(".suitesize .max").on("keyup", function (e) {
//     if ($(this).val().length != 0) {
//         $('#slider-range-suitesize').slider("values", 1, parseInt($(this).val()));
//         $("#suitesize").val($('#slider-range-suitesize').slider("values", 0) + " sq.ft - " + $(this).val() + " sq.ft");
//     } else {
//         $('#slider-range-suitesize').slider("values", 1, 10000);
//         $("#suitesize").val($('#slider-range-suitesize').slider("values", 0) + " sq.ft - " + 10000 + " sq.ft");
//     }
// });



// function removeDuplicates(books) {

//     let newArray = [];

//     let uniqueObject = {};

//     for (let i in books) {

//         objTitle = books[i]['post_id'];
//         uniqueObject[objTitle] = books[i];
//     }

//     for (i in uniqueObject) {
//         newArray.push(uniqueObject[i]);
//     }

//     return newArray;
// }


