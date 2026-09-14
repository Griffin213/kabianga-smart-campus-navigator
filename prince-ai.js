// ============================================================
// 🤖 PRINCE AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// VERSION 41
// ============================================================

"use strict";

console.log("======================================");
console.log("🤖 Prince AI JavaScript loading...");
console.log("======================================");


// ============================================================
// BASIC SETTINGS
// ============================================================

const UOK_GOOGLE_MAPS =
    "https://maps.app.goo.gl/KM8xpod3q4yb5DcE8";

let recognition = null;
let isListening = false;


// ============================================================
// CHAT MESSAGE FUNCTIONS
// ============================================================

function addUserMessage(message) {

    const chatBox = document.getElementById("chatBox");

    if (!chatBox) {
        console.error("❌ chatBox not found");
        return;
    }

    const messageDiv = document.createElement("div");

    messageDiv.className =
        "message user-message";

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function addBotMessage(message) {

    const chatBox = document.getElementById("chatBox");

    if (!chatBox) {
        console.error("❌ chatBox not found");
        return;
    }

    const messageDiv =
        document.createElement("div");

    messageDiv.className =
        "message bot-message";

    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


// ============================================================
// GOOGLE MAPS
// ============================================================

function createGoogleMapsLink(destination) {

    const query =
        encodeURIComponent(destination);

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        query
    );
}


// ============================================================
// NAVIGATION DESTINATIONS
// ============================================================

const navigationDestinations = {

    "main gate":
        "University of Kabianga Main Gate, Kenya",

    "gate":
        "University of Kabianga Main Gate, Kenya",

    "ltb1":
        "LTB1, University of Kabianga, Kenya",

    "ltb 1":
        "LTB1, University of Kabianga, Kenya",

    "ltb2":
        "LTB2, University of Kabianga, Kenya",

    "ltb 2":
        "LTB2, University of Kabianga, Kenya",

    "ltb3":
        "LTB3, University of Kabianga, Kenya",

    "ltb 3":
        "LTB3, University of Kabianga, Kenya",

    "ltb4":
        "LTB4, University of Kabianga, Kenya",

    "ltb 4":
        "LTB4, University of Kabianga, Kenya",

    "vc office":
        "Vice Chancellor Office, University of Kabianga, Kenya",

    "vice chancellor":
        "Vice Chancellor Office, University of Kabianga, Kenya",

    "senate chamber":
        "Senate Chamber, LTB3, University of Kabianga, Kenya",

    "school of business":
        "School of Business, University of Kabianga, Kenya",

    "micro teaching lab":
        "Micro Teaching Lab, LTB3, University of Kabianga, Kenya",

    "director of gender office":
        "Director of Gender Office, University of Kabianga, Kenya",

    "postgraduate studies":
        "Director of Postgraduate Studies Office, University of Kabianga, Kenya"
};


// ============================================================
// NAVIGATION BUTTON
// ============================================================

function createNavigateButton(
    destination,
    label
) {

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
            🧭 ${label || "Navigate with Google Maps"}
        </a>
    `;
}


// ============================================================
// DETECT NAVIGATION DESTINATION
// ============================================================

function detectNavigationRequest(question) {

    const text =
        question.toLowerCase().trim();


    if (
        text.includes("vice chancellor") ||
        text.includes("vc office") ||
        text.includes("vc's office")
    ) {
        return navigationDestinations["vc office"];
    }


    if (
        text.includes("senate chamber")
    ) {
        return navigationDestinations[
            "senate chamber"
        ];
    }


    if (
        text.includes("micro teaching") ||
        text.includes("microteaching")
    ) {
        return navigationDestinations[
            "micro teaching lab"
        ];
    }


    if (
        text.includes("gender office") ||
        text.includes("director of gender")
    ) {
        return navigationDestinations[
            "director of gender office"
        ];
    }


    if (
        text.includes("postgraduate") ||
        text.includes("post graduate")
    ) {
        return navigationDestinations[
            "postgraduate studies"
        ];
    }


    if (
        text.includes("school of business") ||
        text.includes("business offices")
    ) {
        return navigationDestinations[
            "school of business"
        ];
    }


    if (
        text.includes("ltb 1") ||
        text.includes("ltb1")
    ) {
        return navigationDestinations["ltb1"];
    }


    if (
        text.includes("ltb 2") ||
        text.includes("ltb2")
    ) {
        return navigationDestinations["ltb2"];
    }


    if (
        text.includes("ltb 3") ||
        text.includes("ltb3")
    ) {
        return navigationDestinations["ltb3"];
    }


    if (
        text.includes("ltb 4") ||
        text.includes("ltb4")
    ) {
        return navigationDestinations["ltb4"];
    }


    if (
        text.includes("main gate") ||
        text === "gate" ||
        text.includes("university gate")
    ) {
        return navigationDestinations[
            "main gate"
        ];
    }


    return null;
}


// ============================================================
// DETECT NAVIGATION QUESTION
// ============================================================

function isNavigationQuestion(question) {

    const text =
        question.toLowerCase();


    const navigationWords = [

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


    return navigationWords.some(
        function(word) {

            return text.includes(word);

        }
    );
}


// ============================================================
// HANDLE NAVIGATION
// ============================================================

function handleNavigationRequest(question) {

    const destination =
        detectNavigationRequest(question);


    if (!destination) {

        return `
            🧭 <strong>Prince AI Navigation</strong>

            <br><br>

            I can help you navigate around
            the University of Kabianga campus.

            <br><br>

            Try asking:

            <br><br>

            • Navigate to LTB1
            <br>
            • Take me to LTB2
            <br>
            • Where is LTB3?
            <br>
            • Directions to LTB4
            <br>
            • Where is the VC Office?

            <br><br>

            Google Maps can provide the
            available route, distance,
            ETA and turn-by-turn navigation.
        `;
    }


    return `
        🧭 <strong>Destination found</strong>

        <br><br>

        ${destination}

        <br><br>

        Tap below to open Google Maps.

        ${createNavigateButton(
            destination,
            "Navigate with Google Maps"
        )}
    `;
}


// ============================================================
// LTB3 INFORMATION
// ============================================================

function getLTB3Information(text) {

    if (
        text.includes("senate") ||
        text.includes("chamber")
    ) {

        return `
            🏛️ The <strong>Senate Chamber</strong>
            is located on the
            <strong>First Floor of LTB3</strong>
            at the University of Kabianga.
        `;
    }


    if (
        text.includes("micro") ||
        text.includes("teaching")
    ) {

        return `
            🎓 The <strong>Micro Teaching Lab</strong>
            is located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }


    if (text.includes("business")) {

        return `
            🏫 The <strong>School of Business Offices</strong>
            are located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }


    if (text.includes("gender")) {

        return `
            👩‍💼 The <strong>Director of Gender Office</strong>
            is located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }


    if (
        text.includes("postgraduate") ||
        text.includes("post graduate")
    ) {

        return `
            🎓 The <strong>Director of Postgraduate Studies</strong>
            is located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }


    if (text.includes("lh1")) {

        return `
            🏫 <strong>LH1</strong> is located on the
            <strong>Ground Floor of LTB3</strong>.
        `;
    }


    if (text.includes("lh2")) {

        return `
            🏫 <strong>LH2</strong> is located on the
            <strong>Ground Floor of LTB3</strong>.
        `;
    }


    if (text.includes("lh3")) {

        return `
            🏫 <strong>LH3</strong> is located on the
            <strong>First Floor of LTB3</strong>.
        `;
    }


    if (
        text.includes("lh5") ||
        text.includes("lh 5")
    ) {

        return `
            🏫 <strong>LH5</strong> is located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }


    if (
        text.includes("lh6") ||
        text.includes("lh 6")
    ) {

        return `
            🏫 <strong>LH6</strong> is located on the
            <strong>Second Floor of LTB3</strong>.
        `;
    }


    if (
        text.includes("lh7") ||
        text.includes("lh 7")
    ) {

        return `
            🏫 <strong>LH7</strong> is located on the
            <strong>Third Floor of LTB3</strong>.
        `;
    }


    if (
        text.includes("lh8") ||
        text.includes("lh 8")
    ) {

        return `
            🏫 <strong>LH8</strong> is located on the
            <strong>Third Floor of LTB3</strong>.
        `;
    }


    return `
        🏢 <strong>LTB3 — University of Kabianga</strong>

        <br><br>

        <strong>Ground Floor</strong>
        <br>
        • Dean, School of Education
        <br>
        • HOD Curriculum & Instruction
        <br>
        • HOD Physiology & Foundations
        <br>
        • LH1
        <br>
        • LH2

        <br><br>

        <strong>First Floor</strong>
        <br>
        • Senate Chamber
        <br>
        • LH3
        <br>
        • Micro Teaching Lab
        <br>
        • School of Business Offices

        <br><br>

        <strong>Second Floor</strong>
        <br>
        • Director of Gender Office
        <br>
        • LH5
        <br>
        • LH6
        <br>
        • Director of Postgraduate Studies

        <br><br>

        <strong>Third Floor</strong>
        <br>
        • LH7
        <br>
        • LH8
    `;
}


// ============================================================
// FIND KNOWLEDGE ANSWER
// ============================================================

function findKnowledgeAnswer(question) {

    const text =
        question.toLowerCase().trim();


    // GREETINGS

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {

        return `
            👋 Hello!

            <br><br>

            I am <strong>Prince AI</strong>,
            the University of Kabianga Smart Campus
            Assistant.

            <br><br>

            You can ask me about campus locations,
            buildings, university offices,
            leadership or navigation.
        `;
    }


    // WHO ARE YOU

    if (
        text.includes("who are you") ||
        text.includes("what are you") ||
        text.includes("your name")
    ) {

        return `
            🤖 I am <strong>Prince AI</strong>.

            <br><br>

            I am the Smart Campus Assistant
            for the University of Kabianga.
        `;
    }


    // THANK YOU

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return `
            😊 You're welcome!

            <br><br>

            I'm here to help you navigate
            the University of Kabianga.
        `;
    }


    // HELP

    if (
        text === "help" ||
        text.includes("what can you do")
    ) {

        return `
            🤖 <strong>I can help you with:</strong>

            <br><br>

            📍 Campus locations
            <br>
            🏢 LTB1, LTB2, LTB3 and LTB4
            <br>
            👨‍💼 University leadership
            <br>
            🏫 Offices and facilities
            <br>
            🧭 Campus navigation
            <br>
            🎤 Voice questions

            <br><br>

            Try asking:

            <br><br>

            <strong>"Where is LTB3?"</strong>
        `;
    }


    // VICE CHANCELLOR

    if (
        text.includes("vice chancellor") ||
        text === "vc" ||
        text.includes("erick koech")
    ) {

        return `
            👨‍💼 <strong>Vice Chancellor</strong>

            <br><br>

            Prof. Erick Koech, Ph.D., MBS

            <br><br>

            He is the Vice Chancellor
            of the University of Kabianga.
        `;
    }


    // DVC

    if (
        text.includes("dvc") ||
        text.includes("fredrick nyongesa") ||
        text.includes("kassilly")
    ) {

        return `
            👨‍💼 <strong>DVC –
            Academic & Student Affairs</strong>

            <br><br>

            Prof. Dr. Fredrick Nyongesa Kassilly.
        `;
    }


    // RESEARCH / PLANNING

    if (
        text.includes("maurice owino") ||
        text.includes("planning research") ||
        text.includes("research and development")
    ) {

        return `
            👨‍💼 <strong>Planning,
            Research & Development</strong>

            <br><br>

            Prof. Maurice Owino Oduor.
        `;
    }


    // REGISTRAR ACADEMIC

    if (
        text.includes("registrar academic") ||
        text.includes("cecilia sang")
    ) {

        return `
            👩‍💼 <strong>Registrar –
            Academic Affairs</strong>

            <br><br>

            Dr. Cecilia Sang.
        `;
    }


    // REGISTRAR ADMINISTRATION

    if (
        text.includes("registrar administration") ||
        text.includes("peter k kimalel") ||
        text.includes("peter kimalel")
    ) {

        return `
            👨‍💼 <strong>Registrar –
            Administration</strong>

            <br><br>

            Mr. Peter K. Kimalel.
        `;
    }


    // DEAN OF STUDENTS

    if (
        text.includes("dean of students") ||
        text.includes("peter ngugi")
    ) {

        return `
            👨‍💼 <strong>Dean of Students</strong>

            <br><br>

            Dr. Peter Ngugi.
        `;
    }


    // DIRECTOR ICT

    if (
        text.includes("director ict") ||
        text.includes("geoffrey sowek")
    ) {

        return `
            👨‍💼 <strong>Director ICT</strong>

            <br><br>

            Mr. Geoffrey Sowek.
        `;
    }


    // FINANCE OFFICER

    if (
        text.includes("finance officer") ||
        text.includes("willy koech")
    ) {

        return `
            💰 <strong>Finance Officer</strong>

            <br><br>

            CPA Willy Koech.
        `;
    }


    // LTB3

    if (
        text.includes("ltb3") ||
        text.includes("ltb 3")
    ) {

        if (
            isNavigationQuestion(text)
        ) {

            return handleNavigationRequest(
                text
            );
        }

        return getLTB3Information(text);
    }


    // LTB1

    if (
        text.includes("ltb1") ||
        text.includes("ltb 1")
    ) {

        return `
            🏢 <strong>LTB1</strong>

            <br><br>

            LTB1 is one of the Lecture Theatre
            Buildings at the University of Kabianga.

            <br><br>

            It contains lecture halls used
            for teaching and learning.
        `;
    }


    // LTB2

    if (
        text.includes("ltb2") ||
        text.includes("ltb 2")
    ) {

        return `
            🏢 <strong>LTB2</strong>

            <br><br>

            LTB2 is one of the Lecture Theatre
            Buildings at the University of Kabianga.
        `;
    }


    // LTB4

    if (
        text.includes("ltb4") ||
        text.includes("ltb 4")
    ) {

        return `
            🏢 <strong>LTB4</strong>

            <br><br>

            LTB4 is one of the Lecture Theatre
            Buildings at the University of Kabianga.
        `;
    }


    // LIBRARY

    if (
        text.includes("library")
    ) {

        return `
            📚 <strong>University Library</strong>

            <br><br>

            The University Library provides
            learning resources, research materials
            and study spaces for students.
        `;
    }


    // CAFETERIA

    if (
        text.includes("cafeteria") ||
        text.includes("canteen")
    ) {

        return `
            🍽️ <strong>University Cafeteria</strong>

            <br><br>

            The cafeteria provides food and
            refreshments for students and staff.
        `;
    }


    // NAVIGATION

    if (
        isNavigationQuestion(text)
    ) {

        return handleNavigationRequest(
            text
        );
    }


    // FALLBACK

    return `
        🤖 I am still learning that information.

        <br><br>

        You can ask me about:

        <br>
        📍 Campus locations
        <br>
        🏢 LTB1, LTB2, LTB3 and LTB4
        <br>
        👨‍💼 University leadership
        <br>
        🏫 Offices and facilities
        <br>
        🧭 Navigation

        <br><br>

        Try:

        <br>

        <strong>"Who is the Vice Chancellor?"</strong>
    `;
}


// ============================================================
// SPEECH SYNTHESIS
// ============================================================

function speakPrinceAI(text) {

    if (
        !("speechSynthesis" in window)
    ) {
        return;
    }


    try {

        window.speechSynthesis.cancel();


        const temp =
            document.createElement("div");

        temp.innerHTML = text;


        const cleanText =
            temp.textContent ||
            temp.innerText ||
            "";


        if (!cleanText.trim()) {
            return;
        }


        const speech =
            new SpeechSynthesisUtterance(
                cleanText
            );


        speech.lang = "en-KE";

        speech.rate = 0.95;

        speech.pitch = 1;

        speech.volume = 1;


        window.speechSynthesis.speak(
            speech
        );

    } catch (error) {

        console.error(
            "Speech error:",
            error
        );
    }
}


//
