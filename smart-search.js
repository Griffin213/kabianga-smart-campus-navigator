/* ============================================================
   UOK SMART CAMPUS NAVIGATOR
   SMART VENUE SEARCH
   ============================================================ */

(function () {

    const venues = [

        {
            id: "ltb1",
            name: "LTB1",
            fullName: "Lecture Theatre Block 1",
            icon: "🏫",
            location: "Main Campus",
            description:
                "Lecture Theatre Block 1 is one of the University's main teaching and learning buildings.",
            page: "ltb1.html",
            aliases: [
                "ltb1",
                "lecture theatre block 1",
                "lecture theatre 1",
                "theatre 1"
            ]
        },

        {
            id: "ltb2",
            name: "LTB2",
            fullName: "Lecture Theatre Block 2",
            icon: "🏫",
            location: "Main Campus",
            description:
                "Lecture Theatre Block 2 is one of the University's lecture theatre buildings used for teaching and learning.",
            page: "ltb2.html",
            aliases: [
                "ltb2",
                "lecture theatre block 2",
                "lecture theatre 2",
                "theatre 2"
            ]
        },

        {
            id: "ltb3",
            name: "LTB3",
            fullName: "Lecture Theatre Block 3",
            icon: "🏫",
            location: "Main Campus",

            description:
                "LTB3 contains lecture halls, offices and important university facilities across several floors.",

            floors: [
                {
                    name: "Ground Floor",
                    places: [
                        "Dean School of Education",
                        "HOD Curriculum & Instruction",
                        "HOD Physiology & Foundations",
                        "LH1",
                        "LH2"
                    ]
                },

                {
                    name: "First Floor",
                    places: [
                        "Senate Chamber",
                        "LH3",
                        "Micro Teaching Lab",
                        "School of Business Offices"
                    ]
                },

                {
                    name: "Second Floor",
                    places: [
                        "Director of Gender Office",
                        "LH5",
                        "LH6",
                        "Director of Postgraduate Studies"
                    ]
                },

                {
                    name: "Third Floor",
                    places: [
                        "LH7",
                        "LH8"
                    ]
                }
            ],

            page: "ltb3.html",

            aliases: [
                "ltb3",
                "lecture theatre block 3",
                "lecture theatre 3",
                "theatre 3",
                "senate chamber",
                "micro teaching lab",
                "microteaching",
                "lh1",
                "lh2",
                "lh3",
                "lh5",
                "lh6",
                "lh7",
                "lh8",
                "gender office",
                "director of gender",
                "postgraduate studies",
                "school of business",
                "school of business offices"
            ]
        },

        {
            id: "ltb4",
            name: "LTB4",
            fullName: "Lecture Theatre Block 4",
            icon: "🏫",
            location: "Main Campus",
            description:
                "Lecture Theatre Block 4 is one of the University's lecture theatre buildings used for teaching and learning.",
            page: "ltb4.html",
            aliases: [
                "ltb4",
                "lecture theatre block 4",
                "lecture theatre 4",
                "theatre 4"
            ]
        },

        {
            id: "library",
            name: "University Library",
            fullName: "University Library",
            icon: "📚",
            location: "Main Campus",
            description:
                "The University Library provides learning resources, research materials and study spaces for students.",
            page: "library.html",
            aliases: [
                "library",
                "university library",
                "uok library"
            ]
        },

        {
            id: "administration",
            name: "Administration",
            fullName: "Administration Block",
            icon: "🏢",
            location: "Main Campus",
            description:
                "The Administration Block houses important university administrative offices and services.",
            page: "administration.html",
            aliases: [
                "administration",
                "admin",
                "administration block"
            ]
        },

        {
            id: "main-gate",
            name: "Main Gate",
            fullName: "University of Kabianga Main Gate",
            icon: "🚪",
            location: "Main Campus",
            description:
                "The Main Gate is the main entrance and access point to the University of Kabianga Main Campus.",
            page: "main-gate.html",
            aliases: [
                "main gate",
                "gate",
                "university gate",
                "uok gate"
            ]
        }

    ];


    /* ============================================================
       CREATE SEARCH RESULT AREA
       ============================================================ */

    function createSearchArea() {

        const searchBox = document.getElementById("searchBox");

        if (!searchBox) return null;

        let resultBox = document.getElementById("smartSearchResults");

        if (!resultBox) {

            resultBox = document.createElement("div");

            resultBox.id = "smartSearchResults";

            searchBox.parentNode.insertBefore(
                resultBox,
                searchBox.nextSibling
            );
        }

        return resultBox;
    }


    /* ============================================================
       STYLES
       ============================================================ */

    function addStyles() {

        if (document.getElementById("smartSearchStyles")) {
            return;
        }

        const style = document.createElement("style");

        style.id = "smartSearchStyles";

        style.textContent = `

        #smartSearchResults {
            width:100%;
            margin:15px auto 5px;
            text-align:left;
            display:none;
        }

        .smart-result-card {
            background:#ffffff;
            border-radius:18px;
            padding:20px;
            box-shadow:0 8px 25px rgba(0,0,0,.15);
            border-left:5px solid #0b5ed7;
            animation:smartSearchAppear .25s ease;
        }

        .smart-result-title {
            color:#0b5ed7;
            font-size:23px;
            font-weight:800;
            margin-bottom:5px;
        }

        .smart-result-subtitle {
            color:#444;
            font-size:15px;
            font-weight:600;
            margin-bottom:10px;
        }

        .smart-result-location {
            color:#555;
            font-size:14px;
            margin-bottom:14px;
        }

        .smart-result-description {
            color:#333;
            line-height:1.55;
            margin-bottom:15px;
        }

        .smart-floor {
            margin:12px 0;
            padding:12px;
            background:#f3f7ff;
            border-radius:12px;
        }

        .smart-floor-title {
            color:#0b5ed7;
            font-weight:800;
            margin-bottom:6px;
        }

        .smart-floor ul {
            margin:5px 0 0 20px;
            padding:0;
        }

        .smart-floor li {
            margin:5px 0;
            color:#333;
        }

        .smart-result-actions {
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            margin-top:16px;
        }

        .smart-action {
            border:none;
            border-radius:10px;
            padding:11px 14px;
            font-weight:700;
            text-decoration:none;
            cursor:pointer;
            display:inline-block;
            font-size:14px;
        }

        .smart-view {
            background:#0b5ed7;
            color:white;
        }

        .smart-direction {
            background:#198754;
            color:white;
        }

        .smart-ai {
            background:#6f42c1;
            color:white;
        }

        .smart-close {
            background:#6c757d;
            color:white;
        }

        .smart-not-found {
            background:#fff;
            border-radius:15px;
            padding:18px;
            text-align:center;
            box-shadow:0 5px 20px rgba(0,0,0,.12);
        }

        .smart-suggestions {
            margin-top:10px;
            color:#555;
            font-size:14px;
        }

        @keyframes smartSearchAppear {
            from {
                opacity:0;
                transform:translateY(-8px);
            }

            to {
                opacity:1;
                transform:translateY(0);
            }
        }

        @media(max-width:600px) {

            .smart-result-title {
                font-size:20px;
            }

            .smart-action {
                width:100%;
                text-align:center;
            }

        }

        `;

        document.head.appendChild(style);
    }


    /* ============================================================
       NORMALIZE SEARCH
       ============================================================ */

    function normalize(text) {

        return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s&-]/g, "")
            .replace(/\s+/g, " ");

    }


    /* ============================================================
       FIND VENUE
       ============================================================ */

    function findVenue(query) {

        const q = normalize(query);

        if (!q) return null;

        let exact = venues.find(function (venue) {

            return venue.aliases.some(function (alias) {

                return normalize(alias) === q;

            });

        });

        if (exact) return exact;


        return venues.find(function (venue) {

            return venue.aliases.some(function (alias) {

                return normalize(alias).includes(q) ||
                       q.includes(normalize(alias));

            });

        }) || null;

    }


    /* ============================================================
       GOOGLE MAPS
       ============================================================ */

    function getDirections(venue) {

        const destination =
            encodeURIComponent(
                "University of Kabianga " + venue.fullName
            );

        return "https://www.google.com/maps/dir/?api=1&destination="
            + destination;

    }


    /* ============================================================
       SHOW VENUE
       ============================================================ */

    function showVenue(venue) {

        const resultBox = createSearchArea();

        if (!resultBox) return;

        let floorsHTML = "";

        if (venue.floors) {

            floorsHTML = venue.floors.map(function (floor) {

                return `
                    <div class="smart-floor">

                        <div class="smart-floor-title">
                            📍 ${floor.name}
                        </div>

                        <ul>

                            ${floor.places.map(function (place) {
                                return `<li>${place}</li>`;
                            }).join("")}

                        </ul>

                    </div>
                `;

            }).join("");

        }


        resultBox.innerHTML = `

            <div class="smart-result-card">

                <div class="smart-result-title">
                    ${venue.icon} ${venue.name}
                </div>

                <div class="smart-result-subtitle">
                    ${venue.fullName}
                </div>

                <div class="smart-result-location">
                    📍 ${venue.location}
                </div>

                <div class="smart-result-description">
                    ${venue.description}
                </div>

                ${floorsHTML}

                <div class="smart-result-actions">

                    <a
                        href="${venue.page}"
                        class="smart-action smart-view"
                    >
                        📄 View Details
                    </a>

                    <a
                        href="${getDirections(venue)}"
                        target="_blank"
                        rel="noopener"
                        class="smart-action smart-direction"
                    >
                        🧭 Get Directions
                    </a>

                    <a
                        href="prince-ai.html?venue=${encodeURIComponent(venue.id)}"
                        class="smart-action smart-ai"
                    >
                        🤖 Ask UOK AI
                    </a>

                    <button
                        type="button"
                        class="smart-action smart-close"
                        id="closeSmartSearch"
                    >
                        ✕ Close
                    </button>

                </div>

            </div>
        `;

        resultBox.style.display = "block";


        const closeButton =
            document.getElementById("closeSmartSearch");

        if (closeButton) {

            closeButton.addEventListener("click", function () {

                resultBox.style.display = "none";

            });

        }

    }


    /* ============================================================
       NOT FOUND
       ============================================================ */

    function showNotFound(query) {

        const resultBox = createSearchArea();

        if (!resultBox) return;

        resultBox.innerHTML = `

            <div class="smart-not-found">

                <div style="font-size:35px;">
                    🔎
                </div>

                <h3>
                    Venue not found
                </h3>

                <p>
                    We could not find
                    <strong>${query}</strong>
                    in the Main Campus directory.
                </p>

                <div class="smart-suggestions">

                    Try searching for:
                    <br><br>

                    <strong>
                    LTB1 • LTB2 • LTB3 • LTB4 •
                    Library • Administration • Main Gate
                    </strong>

                </div>

            </div>

        `;

        resultBox.style.display = "block";

    }


    /* ============================================================
       SEARCH
       ============================================================ */

    function performSmartSearch() {

        const searchBox =
            document.getElementById("searchBox");

        if (!searchBox) return;

        const query = searchBox.value.trim();

        if (!query) {

            alert("Please enter a venue or location.");

            return;

        }

        const venue = findVenue(query);

        if (venue) {

            showVenue(venue);

        } else {

            showNotFound(query);

        }

    }


    /* ============================================================
       INITIALIZE
       ============================================================ */

    document.addEventListener("DOMContentLoaded", function () {

        addStyles();

        const searchBox =
            document.getElementById("searchBox");

        const searchBtn =
            document.getElementById("searchBtn");

        if (!searchBox || !searchBtn) return;


        /*
         * IMPORTANT:
         * Stop the old search handler from redirecting
         * before our new smart search handles the request.
         */

        searchBtn.addEventListener(
            "click",
            function (event) {

                event.stopImmediatePropagation();

                performSmartSearch();

            },
            true
        );


        searchBox.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    event.stopImmediatePropagation();

                    performSmartSearch();

                }

            },
            true
        );

    });

})();
