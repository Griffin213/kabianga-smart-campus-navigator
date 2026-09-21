/* =========================================================
   UOK SMART CAMPUS SEARCH
   University of Kabianga Main Campus
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       VENUE DATABASE
    ===================================================== */

    const venues = [

        /* =========================
           MAIN GATE
        ========================= */

        {
            id: "main-gate",

            name: "Main Gate",

            fullName: "University of Kabianga Main Gate",

            icon: "🚪",

            location: "Main Campus Entrance",

            description:
                "The main entrance to the University of Kabianga Main Campus. Visitors can enter the campus through this gate.",

            page: "main-gate.html",

            aliases: [
                "main gate",
                "gate",
                "main entrance",
                "entrance",
                "uok gate",
                "university gate"
            ]
        },


        /* =========================
           LTB 1
        ========================= */

        {
            id: "ltb1",

            name: "LTB1",

            fullName: "Lecture Theatre Block 1",

            icon: "🏫",

            location: "Main Campus",

            description:
                "Lecture Theatre Block 1 is one of the main teaching and lecture facilities at the University of Kabianga.",

            page: "ltb1.html",

            aliases: [
                "ltb1",
                "ltb 1",
                "lecture theatre block 1",
                "lecture theatre 1",
                "lecture hall block 1",
                "ltb one"
            ]
        },


        /* =========================
           LTB 2
        ========================= */

        {
            id: "ltb2",

            name: "LTB2",

            fullName: "Lecture Theatre Block 2",

            icon: "🏫",

            location: "Main Campus",

            description:
                "Lecture Theatre Block 2 is one of the University's teaching and lecture facilities.",

            page: "ltb2.html",

            aliases: [
                "ltb2",
                "ltb 2",
                "lecture theatre block 2",
                "lecture theatre 2",
                "lecture hall block 2",
                "ltb two"
            ]
        },


        /* =========================
           LTB 3
        ========================= */

        {
            id: "ltb3",

            name: "LTB3",

            fullName: "Lecture Theatre Block 3",

            icon: "🏫",

            location: "Main Campus",

            description:
                "LTB3 contains lecture halls, academic offices and other University facilities across several floors.",

            page: "ltb3.html",

            aliases: [
                "ltb3",
                "ltb 3",
                "lecture theatre block 3",
                "lecture theatre 3",
                "lecture hall block 3",
                "ltb three"
            ],

            floors: [

                {
                    floor: "Ground Floor",

                    details: [
                        "Dean School of Education",
                        "HOD Curriculum Instruction",
                        "HOD Physiology & Foundations",
                        "LH1",
                        "LH2"
                    ]
                },

                {
                    floor: "First Floor",

                    details: [
                        "Senate Chamber",
                        "LH3",
                        "Micro Teaching Lab",
                        "School of Business Offices"
                    ]
                },

                {
                    floor: "Second Floor",

                    details: [
                        "Director of Gender Office",
                        "LH5",
                        "LH6",
                        "Director of Postgraduate Studies"
                    ]
                }
            ]
        },


        /* =========================
           LTB 4
        ========================= */

        {
            id: "ltb4",

            name: "LTB4",

            fullName: "Lecture Theatre Block 4",

            icon: "🏫",

            location: "Main Campus",

            description:
                "Lecture Theatre Block 4 is one of the main lecture and teaching facilities at the University of Kabianga.",

            page: "ltb4.html",

            aliases: [
                "ltb4",
                "ltb 4",
                "lecture theatre block 4",
                "lecture theatre 4",
                "lecture hall block 4",
                "ltb four"
            ]
        },


        /* =========================
           UNIVERSITY LIBRARY
        ========================= */

        {
            id: "library",

            name: "University Library",

            fullName: "University of Kabianga Library",

            icon: "📚",

            location: "Main Campus",

            description:
                "The University Library provides students and staff with access to learning resources, research materials and study facilities.",

            page: "library.html",

            aliases: [
                "library",
                "uok library",
                "university library",
                "main library",
                "campus library"
            ]
        },


        /* =========================
           ADMINISTRATION
        ========================= */

        {
            id: "administration",

            name: "Administration",

            fullName: "University Administration Block",

            icon: "🏢",

            location: "Main Campus",

            description:
                "The Administration area contains important University offices and administrative services.",

            page: "administration.html",

            aliases: [
                "administration",
                "admin",
                "administration block",
                "admin block",
                "administrative block",
                "university administration"
            ]
        },


        /* =========================
           HEALTH CENTRE
        ========================= */

        {
            id: "health-centre",

            name: "University Health Centre",

            fullName: "University of Kabianga Health Centre",

            icon: "🏥",

            location: "Near the Main Gate",

            description:
                "The University Health Centre provides health and medical services to students, staff and other members of the University community. It is located to the left of the Main Gate when entering the Main Campus.",

            page: "health-centre.html",

            aliases: [
                "health centre",
                "health center",
                "university health centre",
                "university health center",
                "clinic",
                "university clinic",
                "uok clinic",
                "uok health centre",
                "uok health center",
                "medical centre",
                "medical center",
                "hospital",
                "campus clinic",
                "campus health centre"
            ],

            directions: [
                "Start from the Main Gate.",
                "Enter the Main Campus through the main entrance.",
                "The University Health Centre is located to the left of the Main Gate when entering the campus."
            ]
        },


        /* =========================
           VICE CHANCELLOR OFFICE
        ========================= */

        {
            id: "vc-office",

            name: "Vice Chancellor Office",

            fullName: "Office of the Vice Chancellor",

            icon: "🏛️",

            location: "Main Campus",

            description:
                "The Office of the Vice Chancellor is one of the University's key administrative offices. It is located opposite Frustration Square, near University Hostel 1.",

            image: "vc-office.jpg",

            page: "vc-office.html",

            aliases: [
                "vc office",
                "vice chancellor office",
                "vice chancellor's office",
                "vice-chancellor office",
                "office of the vice chancellor",
                "office of vice chancellor",
                "vc",
                "vice chancellor",
                "office of vc",
                "uok vc office"
            ],

            directions: [
                "Start from the Main Gate.",
                "Use the central route from the Main Gate.",
                "Continue along the central route toward University Hostel 1.",
                "When you arrive at University Hostel 1, turn right.",
                "The Vice Chancellor's Office is located opposite Frustration Square."
            ]
        }

    ];


    /* =====================================================
       NORMALIZE SEARCH TEXT
    ===================================================== */

    function normalize(text) {

        return String(text || "")
            .toLowerCase()
            .trim()
            .replace(/[’']/g, "")
            .replace(/[-_]/g, " ")
            .replace(/\s+/g, " ");

    }


    /* =====================================================
       FIND VENUE
    ===================================================== */

    function findVenue(searchText) {

        const query = normalize(searchText);

        if (!query) {
            return null;
        }

        /* Exact venue name */

        let venue = venues.find(function (item) {

            return normalize(item.name) === query;

        });

        if (venue) {
            return venue;
        }


        /* Exact full name */

        venue = venues.find(function (item) {

            return normalize(item.fullName) === query;

        });

        if (venue) {
            return venue;
        }


        /* Alias search */

        venue = venues.find(function (item) {

            return item.aliases &&
                item.aliases.some(function (alias) {

                    return normalize(alias) === query;

                });

        });

        if (venue) {
            return venue;
        }


        /* Partial search */

        venue = venues.find(function (item) {

            const name = normalize(item.name);

            const fullName = normalize(item.fullName);

            if (
                name.includes(query) ||
                query.includes(name)
            ) {
                return true;
            }

            if (
                fullName.includes(query) ||
                query.includes(fullName)
            ) {
                return true;
            }

            if (item.aliases) {

                return item.aliases.some(function (alias) {

                    const normalizedAlias = normalize(alias);

                    return (
                        normalizedAlias.includes(query) ||
                        query.includes(normalizedAlias)
                    );

                });

            }

            return false;

        });

        return venue || null;

    }


    /* =====================================================
       GOOGLE MAPS DIRECTIONS
    ===================================================== */

    function getDirections(venue) {

        const destination =
            encodeURIComponent(
                "University of Kabianga " +
                venue.fullName
            );

        return (
            "https://www.google.com/maps/dir/?api=1" +
            "&destination=" +
            destination
        );

    }


    /* =====================================================
       CREATE SEARCH AREA
    ===================================================== */

    function createSearchArea() {

        const searchBox =
            document.getElementById("searchBox");

        if (!searchBox) {
            return null;
        }


        let resultBox =
            document.getElementById("smartSearchResults");


        if (!resultBox) {

            resultBox =
                document.createElement("div");

            resultBox.id =
                "smartSearchResults";

            searchBox.parentNode.insertBefore(
                resultBox,
                searchBox.nextSibling
            );

        }


        return resultBox;

    }


    /* =====================================================
       ADD SEARCH STYLES
    ===================================================== */

    function addStyles() {

        if (
            document.getElementById(
                "smartSearchStyles"
            )
        ) {
            return;
        }


        const style =
            document.createElement("style");

        style.id =
            "smartSearchStyles";


        style.textContent = `

        /* =========================================
           SEARCH RESULT CONTAINER
        ========================================= */

        #smartSearchResults{
            width:100%;
            margin:12px 0 18px 0;
            position:relative;
            z-index:50;
        }


        /* =========================================
           RESULT CARD
        ========================================= */

        .smart-result-card{
            width:100%;
            background:#ffffff;
            border-radius:16px;
            padding:18px;
            box-shadow:
                0 8px 25px rgba(0,0,0,.12);
            border:1px solid #dbe7f7;
            animation:smartSearchAppear .2s ease;
        }


        @keyframes smartSearchAppear{

            from{
                opacity:0;
                transform:translateY(-5px);
            }

            to{
                opacity:1;
                transform:translateY(0);
            }

        }


        /* =========================================
           TITLE
        ========================================= */

        .smart-result-title{
            font-size:21px;
            font-weight:800;
            color:#0b5ed7;
            margin-bottom:5px;
        }


        .smart-result-subtitle{
            font-size:14px;
            font-weight:600;
            color:#555;
            margin-bottom:8px;
        }


        .smart-result-location{
            font-size:13px;
            font-weight:700;
            color:#555;
            margin-bottom:10px;
        }


        .smart-result-description{
            font-size:14px;
            line-height:1.55;
            color:#333;
            margin-bottom:12px;
        }


        /* =========================================
           VENUE IMAGE
        ========================================= */

        .smart-venue-image{
            width:100%;
            max-height:260px;
            object-fit:cover;
            border-radius:14px;
            margin:12px 0 16px;
            display:block;
            box-shadow:
                0 5px 15px rgba(0,0,0,.12);
        }


        /* =========================================
           FLOOR INFORMATION
        ========================================= */

        .smart-floor{
            background:#f3f7ff;
            border-left:4px solid #0b5ed7;
            border-radius:10px;
            padding:12px;
            margin:10px 0;
        }


        .smart-floor-title{
            font-size:15px;
            font-weight:800;
            color:#084298;
            margin-bottom:7px;
        }


        .smart-floor ul{
            margin:6px 0 0 20px;
        }


        .smart-floor li{
            margin:5px 0;
            font-size:13px;
            line-height:1.4;
        }


        /* =========================================
           ACTION BUTTONS
        ========================================= */

        .smart-result-actions{
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            margin-top:15px;
        }


        .smart-action{
            flex:1 1 140px;
            min-height:42px;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            text-decoration:none !important;
            border-radius:10px;
            padding:10px 12px;
            font-size:13px;
            font-weight:800;
            border:none;
            cursor:pointer;
            box-sizing:border-box;
        }


        .smart-view{
            background:#0b5ed7;
            color:#ffffff !important;
        }


        .smart-view:hover{
            background:#084298;
        }


        .smart-direction{
            background:#198754;
            color:#ffffff !important;
        }


        .smart-direction:hover{
            background:#146c43;
        }


        .smart-ai{
            background:#6f42c1;
            color:#ffffff !important;
        }


        .smart-ai:hover{
            background:#59359a;
        }


        .smart-close{
            background:#6c757d;
            color:#ffffff !important;
        }


        .smart-close:hover{
            background:#565e64;
        }


        /* =========================================
           HOW TO GET THERE
        ========================================= */

        .smart-directions{
            background:#fff8e6;
            border-left:4px solid #d39e00;
            border-radius:10px;
            padding:12px;
            margin:12px 0;
        }


        .smart-directions-title{
            font-size:15px;
            font-weight:800;
            color:#795600;
            margin-bottom:7px;
        }


        .smart-directions ol{
            margin:7px 0 0 20px;
            padding:0;
        }


        .smart-directions li{
            margin:7px 0;
            font-size:13px;
            line-height:1.45;
        }


        /* =========================================
           NOT FOUND
        ========================================= */

        .smart-not-found{
            background:#ffffff;
            border:1px solid #ffc107;
            border-left:5px solid #ffc107;
            border-radius:12px;
            padding:15px;
            color:#555;
            font-size:14px;
            line-height:1.5;
            box-shadow:
                0 5px 15px rgba(0,0,0,.08);
        }


        .smart-not-found strong{
            color:#084298;
        }


        `;


        document.head.appendChild(style);

    }


    /* =====================================================
       SHOW VENUE
    ===================================================== */

    function showVenue(venue) {

        const resultBox =
            createSearchArea();

        if (!resultBox) {
            return;
        }


        let floorsHTML = "";


        if (
            venue.floors &&
            venue.floors.length
        ) {

            floorsHTML =
                venue.floors.map(function (floor) {

                    return `

                        <div class="smart-floor">

                            <div class="smart-floor-title">
                                🏢 ${floor.floor}
                            </div>

                            <ul>

                                ${floor.details.map(function (item) {

                                    return `
                                        <li>${item}</li>
                                    `;

                                }).join("")}

                            </ul>

                        </div>

                    `;

                }).join("");

        }


        let directionsHTML =        if (
            venue.directions &&
            venue.directions.length
        ) {

            directionsHTML = `

                <div class="smart-directions">

                    <div class="smart-directions-title">
                        🧭 How to Get There
                    </div>

                    <ol>

                        ${venue.directions.map(function (step) {

                            return `
                                <li>${step}</li>
                            `;

                        }).join("")}

                    </ol>

                </div>

            `;

        }


        /* =========================================
           VENUE IMAGE
        ========================================= */

        let imageHTML = "";


        if (venue.image) {

            imageHTML = `

                <img
                    src="${venue.image}"
                    alt="${venue.fullName}"
                    class="smart-venue-image"
                    onerror="this.style.display='none';"
                >

            `;

        }


        /* =========================================
           DISPLAY VENUE RESULT
        ========================================= */

        resultBox.innerHTML = `

            <div class="smart-result-card">


                <div class="smart-result-title">

                    ${venue.icon}
                    ${venue.name}

                </div>


                <div class="smart-result-subtitle">

                    ${venue.fullName}

                </div>


                <div class="smart-result-location">

                    📍 ${venue.location}

                </div>


                ${imageHTML}


                <div class="smart-result-description">

                    ${venue.description}

                </div>


                ${floorsHTML}


                ${directionsHTML}


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
                        onclick="
                            document.getElementById('smartSearchResults').innerHTML='';
                        "
                    >

                        ✕ Close

                    </button>


                </div>


            </div>

        `;


        /* =========================================
           SCROLL RESULT INTO VIEW
        ========================================= */

        setTimeout(function () {

            resultBox.scrollIntoView({

                behavior: "smooth",

                block: "nearest"

            });

        }, 50);

    }


    /* =====================================================
       SHOW NOT FOUND
    ===================================================== */

    function showNotFound(searchText) {

        const resultBox =
            createSearchArea();

        if (!resultBox) {
            return;
        }


        resultBox.innerHTML = `

            <div class="smart-not-found">

                🔎

                <strong>
                    Venue not found
                </strong>

                <br><br>

                We could not find

                <strong>
                    "${searchText}"
                </strong>

                in the current campus venue database.

                <br><br>

                Try searching for:

                <br>

                LTB1, LTB2, LTB3, LTB4,
                Library, Administration,
                Main Gate, Health Centre
                or Vice Chancellor Office.

            </div>

        `;

    }


    /* =====================================================
       PERFORM SMART SEARCH
    ===================================================== */

    function performSmartSearch() {

        const searchBox =
            document.getElementById("searchBox");

        if (!searchBox) {
            return;
        }


        const searchText =
            searchBox.value.trim();


        if (!searchText) {

            const resultBox =
                createSearchArea();

            if (resultBox) {

                resultBox.innerHTML = "";

            }

            return;

        }


        const venue =
            findVenue(searchText);


        if (venue) {

            showVenue(venue);

        } else {

            showNotFound(searchText);

        }

    }


    /* =====================================================
       INITIALIZE SMART SEARCH
    ===================================================== */

    function initializeSmartSearch() {

        const searchBox =
            document.getElementById("searchBox");

        if (!searchBox) {
            return;
        }


        addStyles();

        createSearchArea();


        /* =====================================
           SEARCH BUTTON
        ===================================== */

        const searchBtn =
            document.getElementById("searchBtn");


        if (searchBtn) {

            searchBtn.addEventListener(

                "click",

                function (event) {

                    event.preventDefault();

                    event.stopImmediatePropagation();

                    performSmartSearch();

                },

                true

            );

        }


        /* =====================================
           ENTER KEY SEARCH
        ===================================== */

        searchBox.addEventListener(

            "keydown",

            function (event) {

                if (
                    event.key === "Enter" ||
                    event.keyCode === 13
                ) {

                    event.preventDefault();

                    event.stopImmediatePropagation();

                    performSmartSearch();

                }

            },

            true

        );


        /* =====================================
           CLEAR SEARCH RESULT
        ===================================== */

        searchBox.addEventListener(

            "input",

            function () {

                if (!searchBox.value.trim()) {

                    const resultBox =
                        document.getElementById(
                            "smartSearchResults"
                        );

                    if (resultBox) {

                        resultBox.innerHTML = "";

                    }

                }

            }

        );


        /* =====================================
           GLOBAL UOK SMART SEARCH
        ===================================== */

        window.UOKSmartSearch = {

            search: performSmartSearch,

            findVenue: findVenue,

            venues: venues

        };


    }


    /* =====================================================
       START SMART SEARCH
    ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(

            "DOMContentLoaded",

            initializeSmartSearch

        );

    } else {

        initializeSmartSearch();

    }


})();
