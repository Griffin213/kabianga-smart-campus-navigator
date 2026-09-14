// ======================================================
// 🤖 PRINCE AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// VERSION 40
// ======================================================

(function () {

    "use strict";


    // ==================================================
    // BASIC CONFIGURATION
    // ==================================================

    const GOOGLE_MAPS_CAMPUS =
        "https://maps.app.goo.gl/KM8xpod3q4yb5DcE8";


    // ==================================================
    // CAMPUS KNOWLEDGE
    // ==================================================

    const knowledge = [

        // ----------------------------------------------
        // UNIVERSITY
        // ----------------------------------------------

        {
            keywords: [
                "vice chancellor",
                "vc",
                "chancellor",
                "professor erick koech",
                "erick koech"
            ],

            answer:
                "<strong>Vice Chancellor</strong><br><br>" +
                "Prof. Erick Koech, Ph.D., MBS<br><br>" +
                "He is the Vice Chancellor of the University of Kabianga."
        },


        {
            keywords: [
                "dvc",
                "academic",
                "student affairs",
                "academic and student affairs",
                "fredrick nyongesa kassilly",
                "kassilly"
            ],

            answer:
                "<strong>DVC – Academic & Student Affairs</strong><br><br>" +
                "Prof. Dr. Fredrick Nyongesa Kassilly."
        },


        {
            keywords: [
                "planning",
                "research",
                "development",
                "planning research development",
                "maurice owino",
                "owino oduor"
            ],

            answer:
                "<strong>Planning, Research & Development</strong><br><br>" +
                "Prof. Maurice Owino Oduor."
        },


        {
            keywords: [
                "registrar academic",
                "registrar academic affairs",
                "cecilia sang"
            ],

            answer:
                "<strong>Registrar – Academic Affairs</strong><br><br>" +
                "Dr. Cecilia Sang."
        },


        {
            keywords: [
                "registrar administration",
                "registrar admin",
                "peter k kimalel",
                "peter kimalel"
            ],

            answer:
                "<strong>Registrar – Administration</strong><br><br>" +
                "Mr. Peter K. Kimalel."
        },


        {
            keywords: [
                "dean of students",
                "dean students",
                "peter ngugi"
            ],

            answer:
                "<strong>Dean of Students</strong><br><br>" +
                "Dr. Peter Ngugi."
        },


        {
            keywords: [
                "director ict",
                "ict director",
                "geoffrey sowek",
                "ict"
            ],

            answer:
                "<strong>Director ICT</strong><br><br>" +
                "Mr. Geoffrey Sowek."
        },


        {
            keywords: [
                "finance officer",
                "finance",
                "willy koech",
                "cpa willy"
            ],

            answer:
                "<strong>Finance Officer</strong><br><br>" +
                "CPA Willy Koech."
        },


        // ----------------------------------------------
        // LTB1
        // ----------------------------------------------

        {
            keywords: [
                "ltb1",
                "ltb 1",
                "lecture theatre building 1"
            ],

            answer:
                "<strong>LTB1</strong><br><br>" +
                "LTB1 is one of the Lecture Theatre Buildings at the University of Kabianga.<br><br>" +
                "It contains lecture halls used for teaching and learning."
        },


        // ----------------------------------------------
        // LTB2
        // ----------------------------------------------

        {
            keywords: [
                "ltb2",
                "ltb 2",
                "lecture theatre building 2"
            ],

            answer:
                "<strong>LTB2</strong><br><br>" +
                "LTB2 is one of the Lecture Theatre Buildings at the University of Kabianga.<br><br>" +
                "You can use Google Maps for navigation to the campus location."
        },


        // ----------------------------------------------
        // LTB3
        // ----------------------------------------------

        {
            keywords: [
                "ltb3",
                "ltb 3",
                "lecture theatre building 3"
            ],

            answer:
                "<strong>LTB3</strong><br><br>" +

                "<strong>Ground Floor</strong><br>" +
                "• Dean, School of Education<br>" +
                "• HOD Curriculum & Instruction<br>" +
                "• HOD Physiology & Foundations<br>" +
                "• Physiology Department<br>" +
                "• LH1<br>" +
                "• LH2<br><br>" +

                "<strong>First Floor</strong><br>" +
                "• Senate Chamber<br>" +
                "• LH3<br>" +
                "• Micro Teaching Lab<br>" +
                "• School of Business Offices<br>" +
                "• Finance Office<br>" +
                "• Dean School of Business Office<br>" +
                "• HODs Office, School of Business<br><br>" +

                "<strong>Second Floor</strong><br>" +
                "• Director of Gender Office<br>" +
                "• LH5<br>" +
                "• LH6<br>" +
                "• Director of Postgraduate Studies Office<br><br>" +

                "<strong>Third Floor</strong><br>" +
                "• LH7<br>" +
                "• LH8"
        },


        // ----------------------------------------------
        // LTB4
        // ----------------------------------------------

        {
            keywords: [
                "ltb4",
                "ltb 4",
                "lecture theatre building 4"
            ],

            answer:
                "<strong>LTB4</strong><br><br>" +
                "LTB4 is one of the Lecture Theatre Buildings at the University of Kabianga."
        },


        // ----------------------------------------------
        // SENATE CHAMBER
        // ----------------------------------------------

        {
            keywords: [
                "senate chamber",
                "senate"
            ],

            answer:
                "<strong>Senate Chamber</strong><br><br>" +
                "The Senate Chamber is located on the first floor of LTB3."
        },


        // ----------------------------------------------
        // MICRO TEACHING LAB
        // ----------------------------------------------

        {
            keywords: [
                "micro teaching",
                "micro teaching lab",
                "microteaching"
            ],

            answer:
                "<strong>Micro Teaching Lab</strong><br><br>" +
                "The Micro Teaching Lab is located on the first floor of LTB3."
        },


        // ----------------------------------------------
        // SCHOOL OF BUSINESS
        // ----------------------------------------------

        {
            keywords: [
                "school of business",
                "business school"
            ],

            answer:
                "<strong>School of Business</strong><br><br>" +
                "School of Business offices are located on the first floor of LTB3."
        },


        // ----------------------------------------------
        // FINANCE OFFICE
        // ----------------------------------------------

        {
            keywords: [
                "finance office"
            ],

            answer:
                "<strong>Finance Office</strong><br><br>" +
                "The Finance Office is located within the School of Business offices on the first floor of LTB3."
        },


        // ----------------------------------------------
        // DIRECTOR OF GENDER
        // ----------------------------------------------

        {
            keywords: [
                "director of gender",
                "gender office",
                "gender"
            ],

            answer:
                "<strong>Director of Gender Office</strong><br><br>" +
                "The Director of Gender Office is located on the second floor of LTB3."
        },


        // ----------------------------------------------
        // POSTGRADUATE STUDIES
        // ----------------------------------------------

        {
            keywords: [
                "postgraduate",
                "post graduate",
                "director of postgraduate",
                "postgraduate studies"
            ],

            answer:
                "<strong>Director of Postgraduate Studies</strong><br><br>" +
                "The Director of Postgraduate Studies Office is located on the second floor of LTB3."
        },


        // ----------------------------------------------
        // LIBRARY
        // ----------------------------------------------

        {
            keywords: [
                "library",
                "university library"
            ],

            answer:
                "<strong>University Library</strong><br><br>" +
                "The University Library provides learning resources, research materials and study spaces for students."
        },


        // ----------------------------------------------
        // CAFETERIA
        // ----------------------------------------------

        {
            keywords: [
                "cafeteria",
                "food",
                "canteen",
                "eating"
            ],

            answer:
                "<strong>University Cafeteria</strong><br><br>" +
                "The cafeteria provides food and refreshments for students and university staff."
        },


        // ----------------------------------------------
        // MAIN GATE
        // ----------------------------------------------

        {
            keywords: [
                "main gate",
                "gate",
                "entrance"
            ],

            answer:
                "<strong>Main Gate</strong><br><br>" +
                "The Main Gate is the primary entrance to the University of Kabianga campus."
        }

    ];


    // ==================================================
    // DOM ELEMENTS
    // ==================================================

    let chatBox;
    let userMessage;
    let sendBtn;
    let voiceBtn;
    let backBtn;
    let newChatBtn;
    let statusBox;


    // ==================================================
    // INITIALIZATION
    // ==================================================

    function initializePrinceAI() {

        console.log("🤖 Prince AI starting...");

        chatBox = document.getElementById("chatBox");
        userMessage = document.getElementById("userMessage");
        sendBtn = document.getElementById("sendBtn");
        voiceBtn = document.getElementById("voiceBtn");
        backBtn = document.getElementById("backBtn");
        newChatBtn = document.getElementById("newChatBtn");
        statusBox = document.getElementById("status");


        if (!chatBox) {
            console.error("❌ chatBox not found.");
            return;
        }

        if (!userMessage) {
            console.error("❌ userMessage not found.");
            return;
        }

        if (!sendBtn) {
            console.error("❌ sendBtn not found.");
            return;
        }


        // SEND BUTTON

        sendBtn.addEventListener(
            "click",
            function () {

                console.log("🟢 Send button clicked.");

                sendMessage();

            }
        );


        // ENTER KEY

        userMessage.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();

                }

            }
        );


        // NEW CHAT

        if (newChatBtn) {

            newChatBtn.addEventListener(
                "click",
                newChat
            );

        }


        // BACK BUTTON

        if (backBtn) {

            backBtn.addEventListener(
                "click",
                goBack
            );

        }


        // MICROPHONE

        if (voiceBtn) {

            voiceBtn.addEventListener(
                "click",
                startVoiceRecognition
            );

        }


        console.log("✅ Prince AI initialized successfully.");

    }


    // ==================================================
    // SHOW STATUS
    // ==================================================

    function showStatus(message) {

        if (!statusBox) {
            return;
        }

        statusBox.textContent = message;

        statusBox.style.display = "block";

    }


    function hideStatus() {

        if (!statusBox) {
            return;
        }

        statusBox.style.display = "none";

    }


    // ==================================================
    // ADD USER MESSAGE
    // ==================================================

    function addUserMessage(message) {

        const div = document.createElement("div");

        div.className = "message user-message";

        div.textContent = message;

        chatBox.appendChild(div);

        scrollChat();

    }


    // ==================================================
    // ADD PRINCE AI MESSAGE
    // ==================================================

    function addBotMessage(message) {

        const div = document.createElement("div");

        div.className = "message bot-message";

        div.innerHTML = message;

        chatBox.appendChild(div);

        scrollChat();

    }


    // ==================================================
    // SCROLL CHAT
    // ==================================================

    function scrollChat() {

        chatBox.scrollTop = chatBox.scrollHeight;

    }


    // ==================================================
    // CLEAN USER QUESTION
    // ==================================================

    function cleanText(text) {

        return text
            .toLowerCase()
            .trim()
            .replace(/[?!.,]/g, "");

    }


    // ==================================================
    // FIND KNOWLEDGE ANSWER
    // ==================================================

    function findKnowledgeAnswer(question) {

        const text = cleanText(question);


        for (let i = 0; i < knowledge.length; i++) {

            const item = knowledge[i];

            for (let j = 0; j < item.keywords.length; j++) {

                if (text.includes(item.keywords[j])) {

                    return item.answer;

                }

            }

        }


        // GENERAL GREETINGS

        if (
            text === "hi" ||
            text === "hello" ||
            text === "hey" ||
            text.includes("good morning") ||
            text.includes("good afternoon") ||
            text.includes("good evening")
        ) {

            return (
                "Hello 👋<br><br>" +
                "I am <strong>Prince AI</strong>, " +
                "your University of Kabianga Smart Campus Assistant.<br><br>" +
                "How can I help you?"
            );

        }


        // WHO ARE YOU

        if (
            text.includes("who are you") ||
            text.includes("what are you") ||
            text.includes("your name")
        ) {

            return (
                "I am <strong>Prince AI</strong> 🤖<br><br>" +
                "I am the Smart Campus Assistant for the University of Kabianga."
            );

        }


        // THANK YOU

        if (
            text.includes("thank you") ||
            text.includes("thanks")
        ) {

            return (
                "You're welcome! 😊<br><br>" +
                "I'm here to help you navigate the University of Kabianga."
            );

        }


        // HELP

        if (
            text.includes("help") ||
            text.includes("what can you do")
        ) {

            return (
                "<strong>I can help you with:</strong><br><br>" +
                "📍 Campus locations<br>" +
                "🏫 LTB1, LTB2, LTB3 and LTB4<br>" +
                "🏢 LTB3 offices and facilities<br>" +
                "👨‍💼 University leadership<br>" +
                "🧭 Campus navigation<br>" +
                "🎓 General university information"
            );

        }


        return null;

    }


    // ==================================================
    // NAVIGATION DETECTION
    // ==================================================

    function getNavigationPlace(question) {

        const text = cleanText(question);


        if (
            text.includes("ltb1") ||
            text.includes("ltb 1")
        ) {
            return "LTB1";
        }


        if (
            text.includes("ltb2") ||
            text.includes("ltb 2")
        ) {
            return "LTB2";
        }


        if (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        ) {
            return "LTB3";
        }


        if (
            text.includes("ltb4") ||
            text.includes("ltb 4")
        ) {
            return "LTB4";
        }


        if (
            text.includes("main gate") ||
            text === "gate" ||
            text.includes("university gate")
        ) {
            return "Main Gate";
        }


        if (
            text.includes("senate chamber") ||
            text === "senate"
        ) {
            return "Senate Chamber";
        }


        if (
            text.includes("school of business") ||
            text.includes("business school")
        ) {
            return "School of Business";
        }


        if (
            text.includes("micro teaching")
        ) {
            return "Micro Teaching Lab";
        }


        if (
            text.includes("director of gender") ||
            text.includes("gender office")
        ) {
            return "Director of Gender Office";
        }


        if (
            text.includes("postgraduate")
        ) {
            return "Director of Postgraduate Studies";
        }


        return null;

    }


    // ==================================================
    // CHECK IF USER WANTS NAVIGATION
    // ==================================================

    function isNavigationQuestion(question) {

        const text = cleanText(question);

        return (
            text.includes("where is") ||
            text.includes("how do i get") ||
            text.includes("how can i get") ||
            text.includes("take me to") ||
            text.includes("navigate to") ||
            text.includes("directions to") ||
            text.includes("route to") ||
            text.includes("show me") ||
            text.includes("location of") ||
            text.includes("find")
        );

    }


    // ==================================================
    // NAVIGATION RESPONSE
    // ==================================================

    function navigationResponse(place) {

        const query =
            encodeURIComponent(
                place + " University of Kabianga Kenya"
            );

        const mapsURL =
            "https://www.google.com/maps/search/?api=1&query=" +
            query;

                
