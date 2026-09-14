// ============================================================
// 🤖 PRINCE AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// ============================================================

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

    messageDiv.className = "message user-message";

    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function addBotMessage(message) {

    const chatBox = document.getElementById("chatBox");

    if (!chatBox) {
        console.error("❌ chatBox not found");
        return;
    }

    const messageDiv = document.createElement("div");

    messageDiv.className = "message bot-message";

    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ============================================================
// GOOGLE MAPS
// ============================================================

function createGoogleMapsLink(destination) {

    const query = encodeURIComponent(
        destination + ", University of Kabianga, Kenya"
    );

    return "https://www.google.com/maps/search/?api=1&query=" + query;
}


const navigationDestinations = {

    "main gate":
        "University of Kabianga Main Gate",

    "gate":
        "University of Kabianga Main Gate",

    "ltb1":
        "LTB1, University of Kabianga",

    "ltb 1":
        "LTB1, University of Kabianga",

    "ltb2":
        "LTB2, University of Kabianga",

    "ltb 2":
        "LTB2, University of Kabianga",

    "ltb3":
        "LTB3, University of Kabianga",

    "ltb 3":
        "LTB3, University of Kabianga",

    "ltb4":
        "LTB4, University of Kabianga",

    "ltb 4":
        "LTB4, University of Kabianga",

    "vc office":
        "Vice Chancellor Office, University of Kabianga",

    "vice chancellor":
        "Vice Chancellor Office, University of Kabianga",

    "senate chamber":
        "Senate Chamber, LTB3, University of Kabianga",

    "school of business":
        "School of Business, University of Kabianga",

    "micro teaching lab":
        "Micro Teaching Lab, University of Kabianga",

    "director of gender office":
        "Director of Gender Office, University of Kabianga",

    "postgraduate studies":
        "Director of Postgraduate Studies Office, University of Kabianga"

};


// ============================================================
// NAVIGATION BUTTON
// ============================================================

function createNavigateButton(destination, label) {

    const link = createGoogleMapsLink(destination);

    return `
        <br>
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

    const text = question.toLowerCase().trim();

    // Specific locations first

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
        return navigationDestinations["senate chamber"];
    }

    if (
        text.includes("micro teaching")
    ) {
        return navigationDestinations["micro teaching lab"];
    }

    if (
        text.includes("gender office") ||
        text.includes("director of gender")
    ) {
        return navigationDestinations["director of gender office"];
    }

    if (
        text.includes("postgraduate") ||
        text.includes("post graduate")
    ) {
        return navigationDestinations["postgraduate studies"];
    }

    if (
        text.includes("school of business")
    ) {
        return navigationDestinations["school of business"];
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
        return navigationDestinations["main gate"];
    }

    return null;
}


// ============================================================
// DETECT IF USER WANTS NAVIGATION
// ============================================================

function isNavigationQuestion(question) {

    const text = question.toLowerCase();

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

    return navigationWords.some(word =>
        text.includes(word)
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
            🧭 I can help you navigate around
            the University of Kabianga campus.

            <br><br>

            Tell me the place you want to go to,
            for example:

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

            Google Maps will handle the actual
            route, distance, ETA and turn-by-turn
            navigation.
        `;
    }

    return `
        🧭 I found the destination:

        <br><br>

        <strong>${destination}</strong>

        <br><br>

        Tap the button below to open Google Maps
        and get the current walking route,
        distance, ETA and turn-by-turn directions.

        ${createNavigateButton(
            destination,
            "Navigate with Google Maps"
        )}
    `;
}


// ============================================================
// KNOWLEDGE SEARCH
// ============================================================

function findKnowledgeAnswer(question) {

    const text = question.toLowerCase().trim();


    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------

    if (isNavigationQuestion(text)) {

        return handleNavigationRequest(text);

    }


    // --------------------------------------------------------
    // LTB3 INFORMATION
    // --------------------------------------------------------

    if (
        text.includes("ltb3") ||
        text.includes("ltb 3")
    ) {

        if (
            text.includes("senate") ||
            text.includes("chamber")
        ) {

            return `
                🏛️ The <strong>Senate Chamber</strong>
                is located on the <strong>First Floor of LTB3</strong>
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


        if (
            text.includes("business")
        ) {

            return `
                🏫 The <strong>School of Business Offices</strong>
                are located on the
                <strong>First Floor of LTB3</strong>.
            `;
        }


        if (
            text.includes("gender")
        ) {

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


        return `
            🏢 <strong>LTB3</strong> has the following
            known facilities:

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
        `;
    }


    // --------------------------------------------------------
    // GREETINGS
    // --------------------------------------------------------

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
            buildings, university offices, leadership
            or navigation.
        `;
    }


    // --------------------------------------------------------
    // HELP
    // --------------------------------------------------------

    if (
        text === "help" ||
        text.includes("what can you do")
    ) {

        return `
            🤖 I can help you with:

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

            <strong>
            "Where is LTB3?"
            </strong>
        `;
    }


    // ========================================================
    // USE CAMPUS KNOWLEDGE DATABASE
    // ========================================================

    try {

        if (
            typeof campusKnowledge !== "undefined" &&
            campusKnowledge
        ) {

            // Exact key match

            if (campusKnowledge[text]) {

                const item =
                    campusKnowledge[text];

                if (
                    typeof item === "string"
                ) {
                    return item;
                }

                if (
                    item &&
                    item.info
                ) {
                    return item.info;
                }
            }


            // Search through knowledge

            const keys =
                Object.keys(campusKnowledge);

            for (
                let i = 0;
                i < keys.length;
                i++
            ) {

                const key =
                    keys[i].toLowerCase();

                if (
                    text.includes(key) ||
                    key.includes(text)
                ) {

                    const item =
                        campusKnowledge[keys[i]];

                    if (
                        typeof item === "string"
                    ) {

                        return item;

                    }

                    if (
                        item &&
                        item.info
                    ) {

                        return item.info;

                    }

                }

            }

        }

    } catch (error) {

        console.error(
            "Knowledge database error:",
            error
        );

    }


    // --------------------------------------------------------
    // DEFAULT ANSWER
    // --------------------------------------------------------

    return `
        🤖 I am still learning that information.

        <br><br>

        You can ask me about:

        <br>
        📍 Campus locations
        <br>
        🏢 LTB buildings
        <br>
        👨‍💼 University leadership
        <br>
        🧭 Navigation

        <br><br>

        For navigation, try:
        <strong>"Navigate to LTB3"</strong>.
    `;
}


// ============================================================
// CLEAN TEXT FOR SPEECH
// ============================================================

function cleanTextForSpeech(text) {

    const temp =
        document.createElement("div");

    temp.innerHTML = text;

    let clean =
        temp.textContent ||
        temp.innerText ||
        "";

    clean = clean
        .replace(/Navigate with Google Maps/gi, "")
        .replace(/Google Maps/gi, "")
        .replace(/\s+/g, " ")
        .trim();

    return clean;
}


// ============================================================
// SEND MESSAGE
// ============================================================

async function sendMessage() {

    console.log("📨 sendMessage() called");


    const input =
        document.getElementById("userMessage");


    if (!input) {

        alert(
            "Prince AI error: userMessage input was not found."
        );

        console.error(
            "❌ userMessage not found"
        );

        return;
    }


    const message =
        input.value.trim();


    if (!message) {

        return;

    }


    // Display user's message

    addUserMessage(message);


    // Clear input

    input.value = "";


    // Temporary thinking message

    addBotMessage(
        "🤔 Prince AI is thinking..."
    );


    try {

        const answer =
            findKnowledgeAnswer(message);


        // Remove thinking message

        const chatBox =
            document.getElementById("chatBox");

        if (chatBox) {

            const messages =
                chatBox.querySelectorAll(
                    ".bot-message"
                );

            if (messages.length > 0) {

                const lastMessage =
                    messages[messages.length - 1];

                if (
                    lastMessage.textContent.includes(
                        "Prince AI is thinking"
                    )
                ) {

                    lastMessage.remove();

                }

            }

        }


        // Small delay for natural response

        await new Promise(
            resolve =>
                setTimeout(resolve, 300)
        );


        addBotMessage(answer);


        speakPrinceAI(answer);


    } catch (error) {

        console.error(
            "❌ Send message error:",
            error
        );

        addBotMessage(`
            ⚠️ Sorry, I encountered an error.

            <br><br>

            Please try your question again.
        `);

    }

}


// ============================================================
// MAKE SEND FUNCTION AVAILABLE TO HTML
// ============================================================

window.sendMessage =
    sendMessage;


// ============================================================
// MICROPHONE / SPEECH RECOGNITION
// ============================================================

function startPrinceAI() {

    console.log(
        "🎤 startPrinceAI() called"
    );


    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice recognition is not supported by this browser. Please use Google Chrome on Android."
        );

        console.error(
            "❌ SpeechRecognition not supported"
        );

        return;

    }


    // If already listening, stop it

    if (
        recognition &&
        isListening
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


    // --------------------------------------------------------
    // START
    // --------------------------------------------------------

    recognition.onstart =
        function() {

            console.log(
                "🎤 Microphone started"
            );

            isListening =
                true;

            updateVoiceButton(true);

        };


    // --------------------------------------------------------
    // RESULT
    // --------------------------------------------------------

    recognition.onresult =
        async function(event) {

            console.log(
                "🎤 Voice result received"
            );


            const transcript =
                event.results[0][0].transcript;


            console.log(
                "Voice:",
                transcript
            );


            const input =
                document.getElementById(
                    "userMessage"
                );


            if (input) {

                input.value =
                    transcript;

            }


            // Automatically send

            addUserMessage(
                transcript
            );


            if (input) {

                input.value = "";

            }


            const answer =
                findKnowledgeAnswer(
                    transcript
                );


            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        300
                    )
            );


            addBotMessage(
                answer
            );


            speakPrinceAI(
                answer
            );

        };


    // ----------------
