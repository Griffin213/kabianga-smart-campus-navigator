// Create the map
var map = L.map('map').setView([-0.3695, 35.2830], 17);

// OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Main Gate marker
L.marker([-0.3695, 35.2830])
.addTo(map)
.bindPopup("<b>Main Gate</b><br>University of Kabianga");

// LTB1 marker
L.marker([-0.3692, 35.2834])
.addTo(map)
.bindPopup("<b>LTB1</b>");

// LTB2 marker
L.marker([-0.3689, 35.2837])
.addTo(map)
.bindPopup("<b>LTB2</b>");

// LTB3 marker
L.marker([-0.3688, 35.2831])
.addTo(map)
.bindPopup("<b>LTB3</b>");

// LTB4 marker
L.marker([-0.3691, 35.2828])
.addTo(map)
.bindPopup("<b>LTB4</b>");
