/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var locations = [
    {lat: 37.774929, lng: -122.419416},
    {lat: 47.606209, lng: -122.332071},
    {lat: 33.448377, lng: -112.074037},
    {lat: 45.676998, lng: -111.042934},
    {lat: 39.739236, lng: -104.990251},
    {lat: 29.760427, lng: -95.369803},
    {lat: 42.732535, lng: -84.555535},
    {lat: 32.083541, lng: -81.099834}
];

var locationLabels = [
    'San Francisco, CA',
    'Seattle, WA',
    'Phoenix, AZ',
    'Bozeman, MT',
    'Denver, CO',
    'Houston, TX',
    'Lansing, MI',
    'Savannah, GA'
];

var markers = [];
var map;
var trafficLayer = new google.maps.TrafficLayer();
var infowindow = new google.maps.InfoWindow();

function initialize(){
    
    map = new google.maps.Map(document.getElementById('officeMap'), {
        zoom: 12,
        center: {lat: 39.752340, lng: -104.997367},
        scrollwheel: false
    }); 
    
    markers.push(new google.maps.Marker({
        position: {lat: 39.752340, lng: -104.997367},
        map: map, 
        animation: google.maps.Animation.DROP,
        title: 'Pingora Asset Management'
    }));
    
    var input = /** @type {HTMLInputElement} */(document.getElementById('pac-input'));
    
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
    var marker = new google.maps.Marker({
        map: map
    });
    
    google.maps.event.addListener(marker, 'click', function(){
        infowindow.open(map, marker);
    });
    
    google.maps.event.addListener(autocomplete, 'place_changed', function(){
        infowindow.close();
        clearMarkers();
        
        var place = autocomplete.getPlace();
        
        if (!place.geometry){
            return;
        }
        
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: place.place_id
        }
        , function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + 
                        'Place ID: ' + place.place_id + '<br>' + place.formatted_address + 
                        '</div>');
                infowindow.open(map, marker);
            }
        });
        
        if (place.geometry.viewport){
            map.fitBounds(place.geometry.viewport);
        }
        else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        } 
    });
}

function drop(){
    clearMarkers();
    map.setZoom(4);
    for (var i=0; i < locations.length; i++){
        addMarkerWithTimeout(i, i * 200);
    }
}

function traffic(){
    if (document.getElementById('traffic').checked){
        trafficLayer.setMap(map);
    }
    else {
        trafficLayer.setMap(null);
    }
}

function addMarkerWithTimeout(index, timeout){
    window.setTimeout(function(){
        var marker = new google.maps.Marker({
            position: locations[index],
            map: map, 
            animation: google.maps.Animation.DROP
        });
        var infowindow = new google.maps.InfoWindow({
            content: locationLabels[index]
        });
        infowindow.open(map,marker);
        markers.push(marker);
    },timeout);
}

function clearMarkers(){
    infowindow.close();
    for (var i=0; i < markers.length; i++){
        markers[i].setMap(null);
    }
    markers = [];
}

google.maps.event.addDomListener(window,'load',initialize);

