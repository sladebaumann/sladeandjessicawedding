var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var latLngSunkenGarden = new google.maps.LatLng(44.944376, -93.126084);
    var latLngOakRoom = new google.maps.LatLng(44.981849, -93.150775);
    
    var mapOptionsSunkenGarden = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,
        // The latitude and longitude to center the map (always required)
        center: latLngSunkenGarden,
        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };
    var mapOptionsOakRoom = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,
        // The latitude and longitude to center the map (always required)
        center: latLngOakRoom,
        // How you would like to style the map.
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElementSunkenGarden = document.getElementById('map-sunken-garden');
    var mapElementOakRoom = document.getElementById('map-oak-room');

    // Create the Google Map using out element and options defined above
    var mapSunkenGarden = new google.maps.Map(mapElementSunkenGarden, mapOptionsSunkenGarden);
    var mapOakRoom = new google.maps.Map(mapElementOakRoom, mapOptionsOakRoom);
    
    // var addresses = ['Sunken Garden', 'Oak Room'];
    //
    // for (var x = 0; x < addresses.length; x++) {
    //     $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
    //         var p = data.results[0].geometry.location
    //         var latlng = new google.maps.LatLng(p.lat, p.lng);
    //         new google.maps.Marker({
    //             position: latlng,
    //             map: map,
    //             icon: 'images/loc.png'
    //         });
    //
    //     });
    // }
    
}
google.maps.event.addDomListener(window, 'load', init);