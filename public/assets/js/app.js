
$(document).ready(function() {

  // When the page loads, grab all of our chirps
  $.get('/api/orders/all', function(data) {

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {


        $("#table > tbody").append("<tr><th>" + data[i].id + "</td><td>" + data[i].name + "</td><td>" + data[i].quantity + "</td><td>" + data[i].expiration + "</td><td>" +data[i].status + "</td></th>");
      }
    }
  });
});