/* =========================================================
   PRINCE AI
   UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR

   CLEAN VERSION 100

   This file works independently.
   It does NOT require knowledge.js.
========================================================= */


"use strict";


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let recognition = null;

let isListening = false;


/* =========================================================
   CAMPUS INFORMATION
========================================================= */

const campusKnowledge = [

    {
        keywords: [
            "ltb1",
            "lecture teaching block 1",
            "lecture theatre block 1"
        ],

        answer:
            "📍 LTB1 is one of the Lecture and Teaching Blocks at the University of Kabianga. From the Main Gate, follow the main campus road and LTB1 is located along the route."
    },


    {
        keywords: [
            "ltb2",
            "lecture teaching block 2",
            "lecture theatre block 2"
        ],

        answer:
            "📍 LTB2 is a Lecture and Teaching Block at the University of Kabianga. It is located further along the main campus route after LTB1."
    },


    {
        keywords: [
            "ltb3",
            "lecture teaching block 3",
            "lecture theatre block 3"
        ],

        answer:
            "📍 LTB3 is a major academic and administrative building at the University of Kabianga. It contains lecture halls, offices and other university facilities."
    },


    {
        keywords: [
            "ltb4",
            "lecture teaching block 4",
            "lecture theatre block 4"
        ],

        answer:
            "📍 LTB4 is one of the Lecture and Teaching Blocks at the University of Kabianga. It is located within the central campus area."
    },


    {
        keywords: [
            "library",
            "university library"
        ],

        answer:
            "📚 The University Library provides learning resources, research materials and study spaces for students and staff."
    },


    {
        keywords: [
            "cafeteria",
            "canteen",
            "food",
            "restaurant"
        ],

        answer:
            "🍽️ The University cafeteria provides food and refreshments for students and staff. Ask the campus navigation system for the latest verified location."
    },


    {
        keywords: [
            "vice chancellor",
            "vc",
            "who is the vc",
            "university boss"
        ],

        answer:
            "👨‍💼 The Vice Chancellor of the University of Kabianga is Prof. Erick Koech, Ph.D., MBS."
    },


    {
        keywords: [
            "dvc",
            "academic dvc",
            "dvc academic",
            "student affairs"
        ],

        answer:
            "👨‍💼 The Deputy Vice Chancellor responsible for Academic and Student Affairs is Prof. Dr. Fredrick Nyongesa Kassilly."
    },


    {
        keywords: [
            "research",
            "planning",
            "planning research",
            "research development"
        ],

        answer:
            "🔬 Planning, Research and Development is under Prof. Maurice Owino Oduor."
    },


    {
        keywords: [
            "registrar academic",
            "academic registrar"
        ],

        answer:
            "🏛️ The Registrar responsible for Academic Affairs is Dr. Cecilia Sang."
    },


    {
        keywords: [
            "registrar administration",
            "administration registrar"
        ],

        answer:
            "🏛️ The Registrar responsible for Administration is Mr. Peter K. Kimalel."
    },


    {
        keywords: [
            "dean of students",
            "student dean",
            "dean students"
        ],

        answer:
            "🎓 The Dean of Students is Dr. Peter Ngugi."
    },


    {
        keywords: [
            "ict director",
            "director ict",
            "ict",
            "information technology"
        ],

        answer:
            "💻 The Director of ICT is Mr. Geoffrey Sowek."
    },


    {
        keywords: [
            "finance officer",
            "finance",
            "accounts"
        ],

        answer:
            "💰 The Finance Officer is CPA Willy Koech."
    },


    {
        keywords: [
            "main gate",
            "gate",
            "entrance"
        ],

        answer:
            "🚪 The Main Gate is the primary entrance to the University of Kabianga campus and can be used as a starting point for campus navigation."
    },


    {
        keywords: [
            "school of business",
            "business school"
        ],

        answer:
            "🎓 The School of Business has offices and facilities within the university campus. Some School of Business offices are located in LTB3."
    },


    {
        keywords: [
            "student portal",
            "portal"
        ],

        answer:
            "🎓 The Student Portal provides access to important student services such as academic information and other university services."
    },


    {
        keywords: [
            "register units",
            "unit registration",
            "units"
        ],

        answer:
            "📚 Unit registration is normally completed through the university's student academic systems. Please use the official University of Kabianga student portal and follow the current registration instructions."
    },


    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "good morning",
            "good afternoon",
            "good evening"
        ],

        answer:
            "👋 Hello! I am Prince AI, your University of Kabianga Smart Campus Assistant. How can I help you?"
    },


    {
        keywords: [
            "who are you",
            "what are you",
            "your name"
        ],

        answer:
            "🤖 I am Prince AI, the intelligent campus assistant for the University of Kabianga Smart Campus Navigator."
    },


    {
        keywords: [
            "thank you",
            "thanks",
            "thank"
        ],

        answer:
            "You're welcome! 😊 I am always ready to help you navigate the University of Kabianga."
    }

];


/* =========================================================
   LTB3 DETAILED INFORMATION
========================================================= */

const ltb3Information = {

    "ground floor": [
        "Dean School of Education",
        "HOD Curriculum & Instruction",
        "HOD Physiology & Foundations",
        "LH1",
        "LH2"
    ],

    "first floor": [
        "Senate Chamber",
        "LH3",
        "Micro Teaching Lab",
        "School of Business Offices",
        "Finance Office",
        "Dean School of Business Office",
        "HODs Office, School of Business"
    ],

    "second floor": [
        "Director of Gender Office",
        "LH5",
        "LH6",
        "Director of Postgraduate Studies Office"
    ],

    "third floor": [
        "LH7",
        "LH8"
    ]

};


/* =========================================================
   GET ELEMENTS
========================================================= */

function getElement(id) {

    return document.getElementById(id);

}


/* =========================================================
   STATUS
========================================================= */

function showStatus(message) {

    const status =
        getElement("status");

    if (status) {

        status.textContent =
            message;

    }

}


/* =========================================================
   ADD USER MESSAGE
========================================================= */

function addUserMessage(message) {

    const chatBox =
        getElement("chatBox");

    if (!chatBox) return;


    const div =
        document.createElement("div");

    div.className =
        "message user-message";

    div.textContent =
        message;


    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;

}


/* =========================================================
   ADD BOT MESSAGE
========================================================= */

function addBotMessage(message) {

    const chatBox =
        getElement("chatBox");

    if (!chatBox) return;


    const div =
        document.createElement("div");

    div.className =
        "message bot-message";


    div.innerHTML =
        message;


    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;


    speakPrinceAI(
        stripHTML(message)
    );

}


/* =========================================================
   REMOVE HTML FROM SPEECH
========================================================= */

function stripHTML(text) {

    const temp =
        document.createElement("div");

    temp.innerHTML =
        text;

    return temp.textContent ||
           temp.innerText ||
           "";

}


/* =========================================================
   SEARCH KNOWLEDGE
========================================================= */

function findKnowledgeAnswer(question) {

    const q =
        question
            .toLowerCase()
            .trim();


    if (!q) {

        return "Please type a question first.";

    }


    /* -----------------------------------------
       LTB3 FLOOR INFORMATION
    ----------------------------------------- */

    if (
        q.includes("ltb3") &&
        (
            q.includes("floor") ||
            q.includes("office") ||
            q.includes("room") ||
            q.includes("inside") ||
            q.includes("contains")
        )
    ) {

        return getLTB3Information();

    }


    /* -----------------------------------------
       NORMAL KNOWLEDGE
    ----------------------------------------- */

    for (
        let i = 0;
        i < campusKnowledge.length;
        i++
    ) {

        const item =
            campusKnowledge[i];


        for (
            let j = 0;
            j < item.keywords.length;
            j++
        ) {

            if (
                q.includes(
                    item.keywords[j]
                )
            ) {

                return item.answer;

            }

        }

    }


    /* -----------------------------------------
       NAVIGATION QUESTIONS
    ----------------------------------------- */

    if (
        q.includes("where") ||
        q.includes("find") ||
        q.includes("locate") ||
        q.includes("direction") ||
        q.includes("navigate")
    ) {

        return navigationAnswer(q);

    }


    /* -----------------------------------------
       DEFAULT ANSWER
    ----------------------------------------- */

    return `
        🤖 I don't have a verified answer for that yet.

        <br><br>

        Try asking me about:

        <br>
        • LTB1
        <br>
        • LTB2
        <br>
        • LTB3
        <br>
        • LTB4
        <br>
        • University Library
        <br>
        • Main Gate
        <br>
        • Vice Chancellor
        <br>
        • DVC Academic & Student Affairs
        <br>
        • Registrar
        <br>
        • Dean of Students
        <br>
        • ICT
    `;

}


/* =========================================================
   LTB3 INFORMATION
========================================================= */

function getLTB3Information() {

    let answer =
        "<strong>🏢 LTB3 Facilities</strong><br><br>";


    answer +=
        "<strong>Ground Floor</strong><br>";

    ltb3Information["ground floor"]
        .forEach(item => {

            answer +=
                "• " + item + "<br>";

        });


    answer +=
        "<br><strong>First Floor</strong><br>";

    ltb3Information["first floor"]
        .forEach(item => {

            answer +=
                "• " + item + "<br>";

        });


    answer +=
        "<br><strong>Second Floor</strong><br>";

    ltb3Information["second floor"]
        .forEach(item => {

            answer +=
                "• " + item + "<br>";

        });


    answer +=
        "<br><strong>Third Floor</strong><br>";

    ltb3Information["third floor"]
        .forEach(item => {

            answer +=
                "• " + item + "<br>";

        });


    return answer;

}


/* =========================================================
   NAVIGATION ANSWER
========================================================= */

function navigationAnswer(question) {

    let destination = "";


    if (question.includes("ltb1")) {

        destination = "LTB1, University of Kabianga";

    }

    else if (question.includes("ltb2")) {

        destination = "LTB2, University of Kabianga";

    }

    else if (question.includes("ltb3")) {

        destination = "LTB3, University of Kabianga";

    }

    else if (question.includes("ltb4")) {

        destination = "LTB4, University of Kabianga";

    }

    else if (
        question.includes("library")
    ) {

        destination =
            "University Library, University of Kabianga";

    }

    else if (
        question.includes("gate") ||
        question.includes("entrance")
    ) {

        destination =
            "Main Gate, University of Kabianga";

    }


    if (!destination) {

        return `
            📍 I can help you navigate to LTB1,
            LTB2, LTB3, LTB4, the Library or the
            Main Gate.

            <br><br>

            Example:

            <br>

            <strong>Where is LTB3?</strong>
        `;

    }


    const mapsURL =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(destination);


    return `
        📍 <strong>${destination}</strong>

        <br><br>

        I can open Google Maps to help you find
        this destination.

        <br><br>

        <a
            href="${mapsURL}"
            target="_blank"
            rel="noopener noreferrer"
            style="
                display:inline-block;
                background:#0b5ed7;
                color:white;
                padding:10px 15px;
                border-radius:8px;
                text-decoration:none;
            "
        >
            🗺️ Open in Google Maps
        </a>
    `;

}


/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage() {

    const input =
        getElement("userMessage");


    if (!input) {

        alert(
            "Prince AI input box was not found."
        );

        return;

    }


    const message =
        input.value.trim();


    if (!message) {

        showStatus(
            "Please type a question."
        );

        input.focus();

        return;

    }


    addUserMessage(
        message
    );


    input.value = "";


    showStatus(
        "🤖 Prince AI is thinking..."
    );


    setTimeout(() => {

        const answer =
            findKnowledgeAnswer(
                message
            );


        addBotMessage(
            answer
        );


        showStatus(
            "🟢 Prince AI is ready."
        );

    }, 250);

}


/* =========================================================
   VOICE / SPEECH SYNTHESIS
========================================================= */

function speakPrinceAI(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        return;

    }


    try {

        window.speechSynthesis.cancel();


        const speech =
            new SpeechSynthesisUtterance(
                text
            );


        speech.lang =
            "en-KE";


        speech.rate =
            0.95;


        speech.pitch =
            1;


        speech.volume =
            1;


        window.speechSynthesis.speak(
            speech
        );

    }

    catch (error) {

        console.log(
            "Speech synthesis error:",
            error
        );

    }

}


/* =========================================================
   VOICE RECOGNITION
========================================================= */

function setupVoiceRecognition() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        recognition = null;

        showStatus(
            "🟢 Text chat is ready. Voice recognition is not supported by this browser."
        );

        return;

    }


    recognition =
        new SpeechRecognition();


    recognition.continuous =
        false;


    recognition.interimResults =
        false;


    recognition.maxAlternatives =
        1;


    recognition.lang =
        "en-KE";


    recognition.onstart =
        function() {

            isListening =
                true;

            showStatus(
                "🎤 Listening... Please speak now."
            );

        };


    recognition.onresult =
        function(event) {

            const transcript =
                event
                    .results[0][0]
                    .transcript;


            const input =
                getElement(
                    "userMessage"
                );


            if (input) {

                input.value =
                    transcript;

            }


            isListening =
                false;


            showStatus(
                "🟢 Speech received. Sending..."
            );


            sendMessage();

        };


    recognition.onerror =
        function(event) {

            isListening =
                false;


            console.log(
                "Speech recognition error:",
                event.error
            );


            if (
                event.error ===
                "not-allowed"
            ) {

                showStatus(
                    "🎤 Microphone permission was denied. Please allow microphone access in your browser."
                );

            }

            else if (
                event.error ===
                "no-speech"
            ) {

                showStatus(
                    "🎤 No speech detected. Tap the microphone and speak again."
                );

            }

            else {

                showStatus(
                    "🎤 Voice recognition could not start. You can still use text chat."
                );

            }

        };


    recognition.onend =
        function() {

            isListening =
                false;

        };

}


/* =========================================================
   START VOICE
========================================================= */

function startPrinceAI() {

    if (!recognition) {

        setupVoiceRecognition();

    }


    if (!recognition) {

        alert(
            "Voice recognition is not supported in this browser. Please use the text box."
        );

        return;

    }


    if (isListening) {

        try {

            recognition.stop();

        }

        catch (error) {

            console.log(error);

        }

        return;

    }


    try {

        recognition.start();

    }

    catch (error) {

        console.log(
            "Could not start microphone:",
            error
        );

        showStatus(
            "🎤 Could not start the microphone. Please try again."
        );

    }

}


/* =========================================================
   NEW CHAT
========================================================= */

function newChat() {

    const chatBox =
        getElement("chatBox");


    if (!chatBox) return;


    chatBox.innerHTML = `

        <div class="message bot-message">

            👋 Hello again!

            <br><br>

            I am <strong>Prince AI</strong>,
            your 
