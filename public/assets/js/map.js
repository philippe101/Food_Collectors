function initMap() {

  $.get('/api/orders/all', function(data) {

   if (data.length !== 0) {

     for (var i = 0; i < data.length; i++) {
        mapAddress(data[i].id, data[i].address);
        console.log(data[i])
      }
    }
  });
 }




// {

//       var map = new google.maps.Map(document.getElementById('map'), {
 //          zoom: 15,
 //          center: {lat: 34.09834, lng:-118.32674 }
 //        });
 //        var geocoder = new google.maps.Geocoder();

//        document.getElementById('submit').addEventListener('click', function() {
 //          geocodeAddress(geocoder, map);
 //        });
 //      }

     function mapAddress(mapElement, address) {
var geocoder = new google.maps.Geocoder();

geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        var mapOptions = {
            zoom: 14,
            center: results[0].geometry.location,
            disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById(mapElement), mapOptions);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});
}