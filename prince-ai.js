// ============================================================
// 🤖 PRINCE AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// COMPLETE VERSION 42
// ============================================================

"use strict";

console.log("🤖 Prince AI v42 loading...");


// ============================================================
// SETTINGS
// ============================================================

const UOK_GOOGLE_MAPS =
    "https://maps.app.goo.gl/KM8xpod3q4yb5DcE8";

let recognition = null;
let isListening = false;


// ============================================================
// STATUS
// ============================================================

function showStatus(message) {

    const status =
        document.getElementById("status");

    if (!status) return;

    status.textContent = message;
    status.style.display = "block";
}


function hideStatus() {

    const status =
        document.getElementById("status");

    if (!status) return;

    status.style.display = "none";
}


// ============================================================
// CHAT
// ============================================================

function addUserMessage(message) {

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) return;

    const div =
        document.createElement("div");

    div.className =
        "message user-message";

    div.textContent = message;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function addBotMessage(message) {

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) return;

    const div =
        document.createElement("div");

    div.className =
        "message bot-message";

    div.innerHTML = message;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


// ============================================================
// GOOGLE MAPS
// ============================================================

function createGoogleMapsLink(destination) {

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(destination)
    );
}


function createNavigateButton(destination) {

    const link =
        createGoogleMapsLink(destination);

    return `
        <br><br>
        <a
            href="${link}"
            target="_blank"
            rel="noopener noreferrer"
            class="navigate-btn"
        >
            🧭 Navigate with Google Maps
        </a>
    `;
}


// ============================================================
// NAVIGATION DESTINATIONS
// ============================================================

const navigationDestinations = {

    "main gate":
        "University of Kabianga Main Gate, Kenya",

    "ltb1":
        "LTB1, University of Kabianga, Kenya",

    "ltb2":
        "LTB2, University of Kabianga, Kenya",

    "ltb3":
        "LTB3, University of Kabianga, Kenya",

    "ltb4":
        "LTB4, University of Kabianga, Kenya",

    "vc office":
        "Vice Chancellor Office, University of Kabianga, Kenya",

    "senate chamber":
        "Senate Chamber, LTB3, University of Kabianga, Kenya",

    "school of business":
        "School of Business, University of Kabianga, Kenya",

    "micro teaching lab":
        "Micro Teaching Lab, LTB3, University of Kabianga, Kenya",

    "gender office":
        "Director of Gender Office, University of Kabianga, Kenya",

    "postgraduate":
        "Director of Postgraduate Studies Office, University of Kabianga, Kenya"
};


// ============================================================
// NAVIGATION DETECTION
// ============================================================

function detectDestination(text) {

    const q =
        text.toLowerCase();

    if (
        q.includes("vice chancellor") ||
        q.includes("vc office") ||
        q.includes("vc's office")
    ) {
        return navigationDestinations["vc office"];
    }

    if (q.includes("senate chamber")) {
        return navigationDestinations["senate chamber"];
    }

    if (
        q.includes("micro teaching") ||
        q.includes("microteaching")
    ) {
        return navigationDestinations[
            "micro teaching lab"
        ];
    }

    if (
        q.includes("gender office") ||
        q.includes("director of gender")
    ) {
        return navigationDestinations[
            "gender office"
        ];
    }

    if (
        q.includes("postgraduate") ||
        q.includes("post graduate")
    ) {
        return navigationDestinations[
            "postgraduate"
        ];
    }

    if (
        q.includes("school of business") ||
        q.includes("business offices")
    ) {
        return navigationDestinations[
            "school of business"
        ];
    }

    if (
        q.includes("ltb1") ||
        q.includes("ltb 1")
    ) {
        return navigationDestinations["ltb1"];
    }

    if (
        q.includes("ltb2") ||
        q.includes("ltb 2")
    ) {
        return navigationDestinations["ltb2"];
    }

    if (
        q.includes("ltb3") ||
        q.includes("ltb 3")
    ) {
        return navigationDestinations["ltb3"];
    }

    if (
        q.includes("ltb4") ||
        q.includes("ltb 4")
    ) {
        return navigationDestinations["ltb4"];
    }

    if (
        q.includes("main gate") ||
        q === "gate" ||
        q.includes("university gate")
    ) {
        return navigationDestinations["main gate"];
    }

    return null;
}


function isNavigationQuestion(text) {

    const words = [
        "navigate",
        "navigation",
        "direction",
        "directions",
        "take me",
        "how do i get",
        "how can i get",
        "where is",
        "find",
        "go to",
        "get to",
        "walk to",
        "walking",
        "route",
        "location of"
    ];

    return words.some(
        word => text.includes(word)
    );
}


function handleNavigation(text) {

    const destination =
        detectDestination(text);

    if (!destination) {

        return `
            🧭 <strong>Prince AI Navigation</strong>

            <br><br>

            I can help you find places around
            the University of Kabianga.

            <br><br>

            Try:

            <br>• Navigate to LTB1
            <br>• Take me to LTB2
            <br>• Where is LTB3?
            <br>• Directions to LTB4
            <br>• Where is the VC Office?
        `;
    }

    return `
        🧭 <strong>Destination found</strong>

        <br><br>

        ${destination}

        ${createNavigateButton(destination)}
    `;
}


// ============================================================
// LTB3
// ============================================================

function getLTB3Information(text) {

    if (text.includes("senate")) {

        return `
            🏛️ <strong>Senate Chamber</strong>

            <br><br>

            The Senate Chamber is located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }

    if (
        text.includes("micro") ||
        text.includes("teaching")
    ) {

        return `
            🎓 <strong>Micro Teaching Lab</strong>

            <br><br>

            Located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }

    if (text.includes("business")) {

        return `
            🏫 <strong>School of Business Offices</strong>

            <br><br>

            Located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }

    if (text.includes("gender")) {

        return `
            👩‍💼 <strong>Director of Gender Office</strong>

            <br><br>

            Located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }

    if (
        text.includes("postgraduate") ||
        text.includes("post graduate")
    ) {

        return `
            🎓 <strong>Director of Postgraduate Studies</strong>

            <br><br>

            Located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }

    if (text.includes("lh1")) {

        return `
            🏫 <strong>LH1</strong>

            <br><br>

            Ground Floor of LTB3.
        `;
    }

    if (text.includes("lh2")) {

        return `
            🏫 <strong>LH2</strong>

            <br><br>

            Ground Floor of LTB3.
        `;
    }

    if (text.includes("lh3")) {

        return `
            🏫 <strong>LH3</strong>

            <br><br>

            First Floor of LTB3.
        `;
    }

    if (
        text.includes("lh5") ||
        text.includes("lh 5")
    ) {

        return `
            🏫 <strong>LH5</strong>

            <br><br>

            Second Floor of LTB3.
        `;
    }

    if (
        text.includes("lh6") ||
        text.includes("lh 6")
    ) {

        return `
            🏫 <strong>LH6</strong>

            <br><br>

            Second Floor of LTB3.
        `;
    }

    if (
        text.includes("lh7") ||
        text.includes("lh 7")
    ) {

        return `
            🏫 <strong>LH7</strong>

            <br><br>

            Third Floor of LTB3.
        `;
    }

    if (
        text.includes("lh8") ||
        text.includes("lh 8")
    ) {

        return `
            🏫 <strong>LH8</strong>

            <br><br>

            Third Floor of LTB3.
        `;
    }

    return `
        🏢 <strong>LTB3</strong>

        <br><br>

        <strong>Ground Floor</strong>
        <br>• Dean, School of Education
        <br>• HOD Curriculum & Instruction
        <br>• HOD Physiology & Foundations
        <br>• LH1
        <br>• LH2

        <br><br>

        <strong>First Floor</strong>
        <br>• Senate Chamber
        <br>• LH3
        <br>• Micro Teaching Lab
        <br>• School of Business Offices

        <br><br>

        <strong>Second Floor</strong>
        <br>• Director of Gender Office
        <br>• LH5
        <br>• LH6
        <br>• Director of Postgraduate Studies

        <br><br>

        <strong>Third Floor</strong>
        <br>• LH7
        <br>• LH8
    `;
}


// ============================================================
// KNOWLEDGE
// ============================================================

function findKnowledgeAnswer(question) {

    const text =
        question.toLowerCase().trim();


    // GREETING

    if (
       
