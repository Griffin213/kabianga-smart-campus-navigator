// ==========================================
// 🤖 PRINCE AI - UNIVERSITY OF KABIANGA
// 🗺️ SMART GOOGLE MAPS NAVIGATION
// ==========================================


// ==========================================
// 💬 CHAT FUNCTIONS
// ==========================================

function addUserMessage(message) {

    const chatBox = document.getElementById("chatBox");

    if (!chatBox) return;

    const messageDiv = document.createElement("div");

    messageDiv.className = "user-message";

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function addBotMessage(message) {

    const chatBox = document.getElementById("chatBox");

    if (!chatBox) return;

    const messageDiv = document.createElement("div");

    messageDiv.className = "bot-message";

    messageDiv.innerHTML =
        String(message).replace(/\n/g, "<br>");

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ==========================================
// 🗺️ GOOGLE MAPS
// ==========================================

const UOK_GOOGLE_MAPS =
    "https://maps.app.goo.gl/KM8xpod3q4yb5DcE8";


function createGoogleMapsLink(destination) {

    const query =
        encodeURIComponent(
            destination + " University of Kabianga Kenya"
        );

    return (
        "https://www.google.com/maps/search/?api=1&query=" +
        query
    );
}


// ==========================================
// 🗺️ NAVIGATION DESTINATIONS
// ==========================================

const navigationDestinations = {

    "main gate": {
        name: "University Main Gate",
        search: "University Main Gate University of Kabianga Kenya"
    },

    "gate": {
        name: "University Main Gate",
        search: "University Main Gate University of Kabianga Kenya"
    },

    "ltb1": {
        name: "LTB1",
        search: "LTB1 University of Kabianga Kenya"
    },

    "ltb2": {
        name: "LTB2",
        search: "LTB2 University of Kabianga Kenya"
    },

    "ltb3": {
        name: "LTB3",
        search: "LTB3 University of Kabianga Kenya"
    },

    "ltb4": {
        name: "LTB4",
        search: "LTB4 University of Kabianga Kenya"
    },

    "vc office": {
        name: "Vice Chancellor's Office",
        search: "Vice Chancellor Office University of Kabianga Kenya"
    },

    "vice chancellor": {
        name: "Vice Chancellor's Office",
        search: "Vice Chancellor Office University of Kabianga Kenya"
    },

    "senate chamber": {
        name: "Senate Chamber",
        search: "Senate Chamber LTB3 University of Kabianga Kenya"
    },

    "school of business": {
        name: "School of Business",
        search: "School of Business LTB3 University of Kabianga Kenya"
    },

    "micro teaching lab": {
        name: "Micro Teaching Lab",
        search: "Micro Teaching Lab LTB3 University of Kabianga Kenya"
    },

    "director of gender office": {
        name: "Director of Gender Office",
        search: "Director of Gender Office LTB3 University of Kabianga Kenya"
    },

    "postgraduate studies": {
        name: "Director of Postgraduate Studies Office",
        search: "Director of Postgraduate Studies LTB3 University of Kabianga Kenya"
    }

};


// ==========================================
// 🗺️ CREATE NAVIGATION BUTTON
// ==========================================

function createNavigateButton(destination, label) {

    const encodedDestination =
        encodeURIComponent(destination);

    const mapsUrl =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodedDestination;

    return `
        <div style="
            margin-top:12px;
            padding:12px;
            background:#f0f7ff;
            border-radius:12px;
            border:1px solid #cfe2ff;
        ">

            <strong>🗺️ Ready to navigate?</strong>

            <br>

            <span style="
                font-size:14px;
                color:#555;
            ">
                Google Maps will use your phone's location
                and provide walking navigation.
            </span>

            <br><br>

            <a
                href="${mapsUrl}"
                target="_blank"
                rel="noopener noreferrer"
                style="
                    display:inline-block;
                    background:#0b5ed7;
                    color:white;
                    padding:11px 18px;
                    border-radius:25px;
                    text-decoration:none;
                    font-weight:bold;
                    box-shadow:0 3px 8px rgba(0,0,0,.18);
                "
            >
                🗺️ Navigate to ${label}
            </a>

        </div>
    `;
}


// ==========================================
// 🗺️ DETECT DESTINATION
// ==========================================

function detectNavigationRequest(question) {

    const text =
        String(question)
            .toLowerCase()
            .trim();


    // SPECIFIC DESTINATIONS FIRST

    if (text.includes("senate chamber")) {

        return navigationDestinations[
            "senate chamber"
        ];

    }


    if (
        text.includes("micro teaching lab") ||
        text.includes("microteaching lab")
    ) {

        return navigationDestinations[
            "micro teaching lab"
        ];

    }


    if (
        text.includes("director of gender") ||
        text.includes("gender office")
    ) {

        return navigationDestinations[
            "director of gender office"
        ];

    }


    if (
        text.includes("postgraduate studies") ||
        text.includes("post graduate studies") ||
        text.includes("postgraduate office")
    ) {

        return navigationDestinations[
            "postgraduate studies"
        ];

    }


    if (text.includes("school of business")) {

        return navigationDestinations[
            "school of business"
        ];

    }


    if (
        text.includes("vice chancellor") ||
        text.includes("vc office") ||
        text.includes("vc's office")
    ) {

        return navigationDestinations[
            "vc office"
        ];

    }


    // LTB1

    if (
        /\bltb\s*1\b/i.test(text) ||
        /\bltb1\b/i.test(text)
    ) {

        return navigationDestinations["ltb1"];

    }


    // LTB2

    if (
        /\bltb\s*2\b/i.test(text) ||
        /\bltb2\b/i.test(text)
    ) {

        return navigationDestinations["ltb2"];

    }


    // LTB3

    if (
        /\bltb\s*3\b/i.test(text) ||
        /\bltb3\b/i.test(text)
    ) {

        return navigationDestinations["ltb3"];

    }


    // LTB4

    if (
        /\bltb\s*4\b/i.test(text) ||
        /\bltb4\b/i.test(text)
    ) {

        return navigationDestinations["ltb4"];

    }


    // MAIN GATE

    if (
        text.includes("main gate") ||
        text.includes("university gate")
    ) {

        return navigationDestinations[
            "main gate"
        ];

    }


    return null;
}


// ==========================================
// 🗺️ CHECK NAVIGATION QUESTION
// ==========================================

function isNavigationQuestion(question) {

    const text =
        String(question)
            .toLowerCase()
            .trim();


    const navigationWords = [

        "navigate",
        "navigation",
        "direction",
        "directions",
        "take me",
        "how do i get",
        "how can i get",
        "where is",
        "where can i find",
        "find",
        "go to",
        "get to",
        "walk to",
        "walking to",
        "route",
        "guide me",
        "lead me"

    ];


    return navigationWords.some(
        word => text.includes(word)
    );
}


// ==========================================
// 🗺️ HANDLE NAVIGATION
// ==========================================

function handleNavigationRequest(question) {

    const destination =
        detectNavigationRequest(question);


    if (!destination) {

        return null;

    }


    return (

        "📍 <strong>" +
        destination.name +
        "</strong><br><br>" +

        "I can help you navigate there. " +

        "Tap the button below to open Google Maps. " +

        "Google Maps will use your phone's current location " +
        "and provide the route, distance, ETA and voice guidance." +

        createNavigateButton(
            destination.search,
            destination.name
        )

    );

}


// ==========================================
// 🧠 FIND KNOWLEDGE ANSWER
// ==========================================

function findKnowledgeAnswer(question) {

    if (
        typeof campusKnowledge === "undefined"
    ) {

        return (
            "Sorry, my campus knowledge database " +
            "is not available right now."
        );

    }


    const text =
        String(question)
            .toLowerCase()
            .trim();


    if (!text) {

        return (
            "Please tell me what you would like to know."
        );

    }


    // ======================================
    // NAVIGATION FIRST
    // ======================================

    const navigationAnswer =
        handleNavigationRequest(text);


    if (
        navigationAnswer &&
        isNavigationQuestion(text)
    ) {

        return navigationAnswer;

    }


    // ======================================
    // SPECIFIC LTB3 LOCATIONS
    // ======================================

    const cleanText =
        text.replace(/\s+/g, "");


    if (
        cleanText.includes("ltb3lh1") ||
        cleanText.includes("lh1ltb3")
    ) {

        return (
            "📍 LH1 is located on the Ground Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh2") ||
        cleanText.includes("lh2ltb3")
    ) {

        return (
            "📍 LH2 is located on the Ground Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh3") ||
        cleanText.includes("lh3ltb3")
    ) {

        return (
            "📍 LH3 is located on the First Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh5") ||
        cleanText.includes("lh5ltb3")
    ) {

        return (
            "📍 LH5 is located on the Second Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh6") ||
        cleanText.includes("lh6ltb3")
    ) {

        return (
            "📍 LH6 is located on the Second Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh7") ||
        cleanText.includes("lh7ltb3")
    ) {

        return (
            "📍 LH7 is located on the Third Floor of LTB3."
        );

    }


    if (
        cleanText.includes("ltb3lh8") ||
        cleanText.includes("lh8ltb3")
    ) {

        return (
            "📍 LH8 is located on the Third Floor of LTB3."
        );

    }


    // ======================================
    // OTHER LTB3 LOCATIONS
    // ======================================

    if (text.includes("senate chamber")) {

        return (
            "📍 The Senate Chamber is located on the First Floor of LTB3."
        );

    }


    if (
        text.includes("micro teaching lab") ||
        text.includes("microteaching lab")
    ) {

        return (
            "📍 The Micro Teaching Lab is located on the First Floor of LTB3."
        );

    }


    if (
        text.includes("finance") &&
        text.includes("ltb3")
    ) {

        return (
            "📍 The Finance Office is located on the First Floor of LTB3."
        );

    }


    if (text.includes("school of business offices")) {

        return (
            "📍 The School of Business offices are located on the First Floor of LTB3."
        );

    }


    if (
        text.includes("dean") &&
        text.includes("business")
    ) {

        return (
            "📍 The Dean, School of Business Office is located on the First Floor of LTB3."
        );

    }


    if (
        text.includes("hod") &&
        text.includes("business")
    ) {

        return (
            "📍 The HODs Office, School of Business, is located on the First Floor of LTB3."
        );

    }


    if (
        text.includes("gender office") ||
        text.includes("director of gender")
    ) {

        return (
            "📍 The Director of Gender Office is located on the Second Floor of LTB3."
        );

    }


    if (
        text.includes("postgraduate") ||
        text.includes("post graduate studies")
    ) {

        return (
            "📍 The Director of Postgraduate Studies Office is located on the Second Floor of LTB3."
        );

    }


    if (
        text.includes("dean school of education")
    ) {

        return (
            "📍 The Dean, School of Education, is located on the Ground Floor of LTB3."
        );

    }


    if (
        text.includes("hod curriculum") ||
        text.includes("curriculum instruction")
    ) {

        return (
            "📍 The HOD, Curriculum & Instruction, is located on the Ground Floor of LTB3."
        );

    }


    if (
        text.includes("hod physiology") ||
        text.includes("physiology foundations")
    ) {

        return (
            "📍 The HOD, Physiology & Foundations, is located on the Ground Floor of LTB3."
        );

    }


    if (text.includes("physiology department")) {

        return (
            "📍 The Physiology Department is located on the Ground Floor of LTB3."
        );

    }


    // ======================================
    // GENERAL LTB3
    // ======================================

    if (
        text === "ltb3" ||
        text.includes("tell me about ltb3") ||
        text.includes("what is in ltb3") ||
        text.includes("what is found in ltb3") ||
        text.includes("locations in ltb3") ||
        text.includes("rooms in ltb3")
    ) {

        return campusKnowledge["ltb3"].info;

    }


    // ======================================
    // EXACT KNOWLEDGE MATCH
    // ======================================

    if (campusKnowledge[text]) {

        return campusKnowledge[text].info;

    }


    // ======================================
    // KEYWORD MATCH
    // ======================================

    const keys =
        Object.keys(campusKnowledge)
            .sort(
                (a, b) =>
                    b.length - a.length
            );


    for (const key of keys) {

        if (text.includes(key)) {

            return campusKnowledge[key].info;

        }

    }


    // ======================================
    // WORD MATCHING
    // ======================================

    const words =
        text
            .split(/\s+/)
            .filter(
                word =>
                    word.length > 2
            );


    let bestMatch = null;

    let highestScore = 0;


    for (const key of keys) {

        let score = 0;

        const keyWords =
            key.split(/\s+/);


        words.forEach(word => {

            if (keyWords.includes(word)) {

                score++;

            }

        });


        if (score > highestScore) {

            highestScore = score;

            bestMatch =
                campusKnowledge[key];

        }

    }


    if (
        bestMatch &&
        highestScore > 0
    ) {

        return bestMatch.info;

    }


    // ======================================
    // COMMON QUESTIONS
    // ======================================

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return (
            "Hello 👋 Welcome to the University of Kabianga. " +
            "I am Prince AI. How can I help you today?"
        );

    }


    if (
        text.includes("who are you") ||
        text.includes("your name")
    ) {

        return (
            "I am Prince AI 🤖, your Smart Campus Assistant " +
            "for the University of Kabianga."
        );

    }


    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return (
            "You're welcome! 😊 I'm always happy to help."
        );

    }


    if (
        text.includes("what can you do") ||
        text.includes("help me")
    ) {

        return (
            "I can help you find lecture halls, departments, " +
            "offices and university services. I can also help " +
            "you open Google Maps for campus navigation. 🗺️"
        );

    }


    return (
        "I'm still learning about the University of Kabianga. 🤖 " +
        "Please ask me about a specific lecture hall, department, " +
        "office or campus service."
    );

}


// ==========================================
// 🔊 CLEAN TEXT FOR SPEECH
// ==========================================

function cleanTextForSpeech(text) {

    const temp =
        document.createElement("div");


    temp.innerHTML =
        String(text);


    let clean =
        temp.textContent ||
        temp.innerText ||
        "";


    clean =
        clean.replace(
            /Ready to navigate\?/gi,
            ""
        );


    clean =
        clean.replace(
            /Google Maps will use your phone's location and provide walking navigation\./gi,
            "Opening Google Maps for navigation."
        );


    clean =
        clean.replace(
            /Navigate to .*/gi,
            ""
        );


    return clean.trim();

}


// ==========================================
// ⌨️ SEND MESSAGE
// ==========================================

function sendMessage() {

    console.log("📨 sendMessage() called.");


    const input =
        document.getElementById(
            "userMessage"
        );


    if (!input) {

        console.error(
            "❌ userMessage input not found."
        );

        return;

    }


    const question =
        input.value.trim();


    if (!question) {

        return;

    }


    addUserMessage(question);


    input.value = "";


    const answer =
        findKnowledgeAnswer(question);


    setTimeout(function() {

        addBotMessage(answer);


        speakPrinceAI(
            cleanTextForSpeech(answer)
        );

    }, 400);

}


window.sendMessage =
    sendMessage;


// ==========================================
// 🎤 VOICE RECOGNITION
// ==========================================

let recognition = null;

let isListening = false;


function startPrinceAI() {

    console.log(
        "🎤 Prince AI microphone clicked."
    );


    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "🎤 Voice recognition is not available in this browser.\n\n" +
            "Please use Google Chrome on Android."
        );

        return;

    }


    // STOP LISTENING

    if (
        isListening &&
        recognition
    ) {

        recognition.stop();

        return;

    }


    recognition =
        new SpeechRecognition();


    recognition.lang =
        "en-KE";


    recognition.continuous =
        false;


    recognition.interimResults =
        false;


    recognition.maxAlternatives =
        1;


    // ======================================
    // LISTENING STARTED
    // ======================================

    recognition.onstart =
        function() {

            isListening = true;

            updateVoiceButton(true);

            console.log(
                "🎤 Prince AI is listening..."
            );

        };


    // ======================================
    // SPEECH RESULT
    // ======================================

    recognition.onresult =
        function(event) {

            const spokenText =
                event.results[0][0]
                    .transcript
                    .trim();


            console.log(
                "🎤 User said
