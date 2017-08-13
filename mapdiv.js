var initializeMap = function(divID, adr){
  var address = adr || "Lambough Field, Green Bay, WI";
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, function(results, status) {
    console.log(results[0].formatted_address);
    if (status == google.maps.GeocoderStatus.OK) {
      var llobject = results[0].geometry.location;
      console.log(llobject);
      var opts = {
          center: llobject,
          zoom: 19
      };
      var map = new google.maps.Map(document.getElementById(divID), opts);
    }
  });
}
