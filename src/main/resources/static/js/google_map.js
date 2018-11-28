var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
    var latLngSunkenGarden = {lat: 44.944260, lng: -93.126082};
    var latLngOakRoom = {lat: 44.981804, lng: -93.150834};

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElementSunkenGarden = document.getElementById('map-sunken-garden');
    var mapElementOakRoom = document.getElementById('map-oak-room');

    // Create the Google Map using out element and options defined above
    var mapSunkenGarden = new google.maps.Map(mapElementSunkenGarden, {zoom: 11, center: latLngSunkenGarden});
    var mapOakRoom = new google.maps.Map(mapElementOakRoom, {zoom: 11, center: latLngOakRoom});

    // Create markers
    var markerSunkenGarden = new google.maps.Marker({position: latLngSunkenGarden, map: mapSunkenGarden, url: 'https://maps.google.com/maps/?q=44.944260,-93.126082'});
    var markerOakRoom = new google.maps.Marker({position: latLngOakRoom, map: mapOakRoom, url: 'https://maps.google.com/maps/?q=44.981804,-93.150834'});

    markerSunkenGarden.addListener('click', function() {
        if (this.url) {
            // document.location = this.url;
            window.open(this.url, '_blank');
            // Or like this if you want a new tab : window.open(this.url, '_blank');
        }
    });
    markerOakRoom.addListener('click', function() {
        if (this.url) {
            // document.location = this.url;
            window.open(this.url, '_blank');
            // Or like this if you want a new tab : window.open(this.url, '_blank');
        }
    });

}

google.maps.event.addDomListener(window, 'load', init);