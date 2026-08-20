// ==========================================
// 🗺️ UNIVERSITY OF KABIANGA
// SMART CAMPUS NAVIGATION
// ==========================================

// ==========================================
// CAMPUS LOCATIONS
// ==========================================

const campusLocations = {

    "Main Gate": {
        lat: -0.3989,
        lng: 35.2429,
        description: "Main entrance of the University of Kabianga."
    },

    "LTB1": {
        lat: -0.3692,
        lng: 35.2834,
        description: "Lecture Theatre Block 1."
    },

    "LTB2": {
        lat: -0.3689,
        lng: 35.2837,
        description: "Lecture Theatre Block 2."
    },

    "LTB3": {
        lat: -0.3688,
        lng: 35.2831,
        description: "Lecture Theatre Block 3."
    },

    "LTB4": {
        lat: -0.3691,
        lng: 35.2828,
        description: "Lecture Theatre Block 4."
    },

    "Library": {
        lat: null,
        lng: null,
        description: "University Library. Exact coordinates will be added later."
    },

    "Administration Block": {
        lat: null,
        lng: null,
        description: "Administration Block. Exact coordinates will be added later."
    },

    "Cafeteria": {
        lat: null,
        lng: null,
        description: "Campus Cafeteria. Exact coordinates will be added later."
    }
};


// ==========================================
// CREATE MAP
// ==========================================

const map = L.map("map").setView(
    [-0.3989, 35.2429],
    17
);


// ==========================================
// OPEN STREET MAP
// ==========================================

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(map);


// ==========================================
// ICONS
// ==========================================

const destinationIcon =
    L.divIcon({

        className: "custom-map-marker",

        html: "📍",

        iconSize: [35, 35],

        iconAnchor: [17, 35]

    });


// ==========================================
// ADD CAMPUS MARKERS
// ==========================================

Object.keys(campusLocations).forEach(
    function(placeName) {

        const place =
            campusLocations[placeName];


        // Skip locations without coordinates
        if (
            place.lat === null ||
            place.lng === null
        ) {
            return;
        }


        L.marker(
            [place.lat, place.lng],
            {
                icon: destinationIcon
            }
        )
        .addTo(map)
        .bindPopup(`
            <div style="text-align:center">

                <h3>📍 ${placeName}</h3>

                <p>
                    ${place.description}
                </p>

                <button
                    onclick="selectCampusLocation('${placeName}')"
                    style="
                        background:#0b5ed7;
                        color:white;
                        border:none;
                        padding:8px 12px;
                        border-radius:6px;
                        cursor:pointer;
                    "
                >
                    🎯 Select Destination
                </button>

            </div>
        `);

    }
);


// ==========================================
// USER LOCATION
// ==========================================

let userMarker = null;

let userCircle = null;


function locateUser() {

    if (!navigator.geolocation) {

        alert(
            "Your device does not support location services."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;


            // Remove previous marker
            if (userMarker) {

                map.removeLayer(userMarker);

            }


            if (userCircle) {

                map.removeLayer(userCircle);

            }


            // User marker
            userMarker =
                L.marker([lat, lng])
                    .addTo(map)
                    .bindPopup(
                        "📍 <strong>You are here</strong>"
                    );


            // Accuracy circle
            userCircle =
                L.circle(
                    [lat, lng],
                    {
                        radius:
                            position.coords.accuracy,

                        color: "#0b5ed7",

                        fillOpacity: 0.12
                    }
                ).addTo(map);


            userMarker.openPopup();


            map.setView(
                [lat, lng],
                18
            );

        },

        function(error) {

            let message =
                "Unable to get your location.";


            if (error.code === 1) {

                message =
                    "Location permission was denied. Please allow location access.";

            }

            else if (error.code === 2) {

                message =
                    "Your location could not be determined.";

            }

            else if (error.code === 3) {

                message =
                    "Location request timed out. Please try again.";

            }


            alert(message);

        },

        {
            enableHighAccuracy: true,

            timeout: 15000,

            maximumAge: 0
        }

    );

}


// ==========================================
// MAKE LOCATION FUNCTION AVAILABLE
// ==========================================

window.locateUser = locateUser;


// ==========================================
// SELECT DESTINATION FROM MAP
// ==========================================

function selectCampusLocation(placeName) {

    const destination =
        document.getElementById(
            "destination"
        );


    if (destination) {

        destination.value =
            placeName;

    }


    const routeResult =
        document.getElementById(
            "routeResult"
        );


    if (routeResult) {

        routeResult.innerHTML = `

            <h3>🎯 Destination Selected</h3>

            <p>
                <strong>${placeName}</strong>
            </p>

            <p>
                Press
                <strong>Start Navigation</strong>
                to continue.
            </p>

        `;

    }

}


window.selectCampusLocation =
    selectCampusLocation;


// ==========================================
// NAVIGATION
// ==========================================

const navigateBtn =
    document.getElementById(
        "navigateBtn"
    );


if (navigateBtn) {

    navigateBtn.addEventListener(
        "click",
        function() {

            const current =
                document.getElementById(
                    "currentLocation"
                ).value;


            const destination =
                document.getElementById(
                    "destination"
                ).value;


            showNavigation(
                current,
                destination
            );

        }
    );

}


// ==========================================
// SHOW NAVIGATION
// ==========================================

function showNavigation(
    current,
    destination
) {

    const routeResult =
        document.getElementById(
            "routeResult"
        );


    if (!routeResult) return;


    if (current === destination) {

        routeResult.innerHTML = `

            <h3>📍 You are already there!</h3>

            <p>
                Your current location and
                destination are the same.
            </p>

        `;

        return;
    }


    const destinationData =
        campusLocations[destination];


    if (
        !destinationData ||
        destinationData.lat === null
    ) {

        routeResult.innerHTML = `

            <h3>🗺️ ${destination}</h3>

            <p>
                📍 This location has been added
                to the system.
            </p>

            <p>
                📏 Exact distance will be added
                when the actual campus measurements
                are collected.
            </p>

            <p>
                🚶 Walking navigation will be
                activated after the real coordinates
                and routes are added.
            </p>

        `;

        return;
    }


    // --------------------------------------
    // CURRENT LOCATION DATA
    // --------------------------------------

    const currentData =
        campusLocations[current];


    if (!currentData) {

        routeResult.innerHTML = `

            <h3>⚠️ Location unavailable</h3>

            <p>
                Please select another current location.
            </p>

        `;

        return;
    }


    // --------------------------------------
    // DISPLAY ROUTE
    // --------------------------------------

    routeResult.innerHTML = `

        <h3>🚶 Navigation Route</h3>

        <p>
            <strong>📍 From:</strong>
            ${current}
        </p>

        <p>
            <strong>🎯 To:</strong>
            ${destination}
        </p>

        <hr>

        <h4>🧭 Directions</h4>

        <p>
            Start from <strong>${current}</strong>
            and proceed toward
            <strong>${destination}</strong>.
        </p>

        <p>
            📏 Distance:
            <strong>To be updated</strong>
        </p>

        <p>
            ⏱️ Walking time:
            <strong>To be updated</strong>
        </p>

        <br>

        <button
            onclick="focusDestination('${destination}')"
            style="
                background:#0b5ed7;
                color:white;
                border:none;
                padding:10px 15px;
                border-radius:7px;
                cursor:pointer;
            "
        >
            📍 Show Destination
        </button>

    `;


    focusDestination(
        destination
    );

}


// ==========================================
// FOCUS DESTINATION
// ==========================================

function focusDestination(
    placeName
) {

    const place =
        campusLocations[placeName];


    if (
        !place ||
        place.lat === null
    ) {
        return;
    }


    map.setView(
        [place.lat, place.lng],
        18
    );

}


window.focusDestination =
    focusDestination;


// ==========================================
// DESTINATION FROM URL
// ==========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const urlDestination =
    urlParams.get(
        "destination"
    );


if (urlDestination) {

    const destinationSelect =
        document.getElementById(
            "destination"
        );


    if (destinationSelect) {

        // Find matching option
        const options =
            Array.from(
                destinationSelect.options
            );


        const matchingOption =
            options.find(
                option =>
                    option.value.toLowerCase() ===
                    urlDestination.toLowerCase()
            );


        if (matchingOption) {

            destinationSelect.value =
                matchingOption.value;

        }

    }

}


// ==========================================
// MAP READY
// ==========================================

console.log(
    "🗺️ UoK Campus Map loaded successfully."
);

console.log(
    "📍 Campus locations:",
    campusLocations
);
