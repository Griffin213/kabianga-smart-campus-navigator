// Create the map
var map = L.map('map').setView([-0.3695, 35.2830], 17);

// OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Building markers
L.marker([-0.3695, 35.2830]).addTo(map).bindPopup("<b>Main Gate</b>");
L.marker([-0.3692, 35.2834]).addTo(map).bindPopup("<b>LTB1</b>");
L.marker([-0.3689, 35.2837]).addTo(map).bindPopup("<b>LTB2</b>");
L.marker([-0.3688, 35.2831]).addTo(map).bindPopup("<b>LTB3</b>");
L.marker([-0.3691, 35.2828]).addTo(map).bindPopup("<b>LTB4</b>");

// Show user's live location
if (navigator.geolocation) {

    navigator.geolocation.watchPosition(function(position) {

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        L.marker([lat, lng])
            .addTo(map)
            .bindPopup("📍 You are here")
            .openPopup();

        map.setView([lat, lng], 18);

    }, function(error) {
        alert("Unable to get your location. Please allow location access.");
    });

}
