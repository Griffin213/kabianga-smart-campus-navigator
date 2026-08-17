// ==========================================
// 🤖 PRINCE AI - UNIVERSITY OF KABIANGA
// ==========================================

// Make sure knowledge.js is loaded first
if (typeof campusKnowledge === "undefined") {
    console.error("❌ campusKnowledge was not loaded.");
}

// ==========================================
// CHAT FUNCTIONS
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

    // Preserve line breaks from knowledge.js
    messageDiv.innerHTML = message.replace(/\n/g, "<br>");

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ==========================================
// FIND ANSWER FROM knowledge.js
// ==========================================

function findKnowledgeAnswer(question) {

    if (typeof campusKnowledge === "undefined") {

        return "Sorry, my campus knowledge is not available right now.";
    }

    const text = question
        .toLowerCase()
        .trim();

    // --------------------------------------
    // 1. Exact match
    // --------------------------------------

    if (campusKnowledge[text]) {

        return campusKnowledge[text].info;
    }

    // --------------------------------------
    // 2. Search for matching keywords
    // --------------------------------------

    const keys = Object.keys(campusKnowledge);

    for (const key of keys) {

        if (text.includes(key)) {

            return campusKnowledge[key].info;
        }

        if (key.includes(text) && text.length > 2) {

            return campusKnowledge[key].info;
        }
    }

    // --------------------------------------
    // 3. Word-by-word matching
    // --------------------------------------

    const words = text
        .split(/\s+/)
        .filter(word => word.length > 2);

    let bestMatch = null;
    let highestScore = 0;

    for (const key of keys) {

        let score = 0;

        const keyWords = key.split(/\s+/);

        words.forEach(word => {

            if (keyWords.includes(word)) {
                score++;
            }

        });

        if (score > highestScore) {

            highestScore = score;
            bestMatch = campusKnowledge[key];
        }
    }

    if (bestMatch && highestScore > 0) {

        return bestMatch.info;
    }

    // --------------------------------------
    // 4. Common questions
    // --------------------------------------

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return "Hello 👋 Welcome to the University of Kabianga. I am Prince AI. How can I help you today?";
    }

    if (
        text.includes("who are you") ||
        text.includes("your name")
    ) {

        return "I am Prince AI 🤖, your Smart Campus Assistant for the University of Kabianga.";
    }

    if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊 I'm always happy to help.";
    }

    if (
        text.includes("what can you do") ||
        text.includes("help me")
    ) {

        return "I can help you find lecture halls, departments, offices and university services. You can also ask me questions about the Student Portal, unit registration, fees, accommodation, examinations and more.";
    }

    // --------------------------------------
    // No answer
    // --------------------------------------

    return "I'm still learning about the University of Kabianga. 🤖 Please try asking about a lecture hall, department, office, Student Portal, unit registration, accommodation, fees or another campus service.";
}


// ==========================================
// SEND MESSAGE
// ==========================================

function sendMessage() {

    const input = document.getElementById("userMessage");

    if (!input) return;

    const question = input.value.trim();

    if (question === "") {

        return;
    }

    // Show user's message
    addUserMessage(question);

    // Clear input
    input.value = "";

    // Find answer
    const answer = findKnowledgeAnswer(question);

    // Small delay to make conversation feel natural
    setTimeout(() => {

        addBotMessage(answer);

        // Speak answer
        speakPrinceAI(answer);

    }, 400);
}


// Make available to HTML
window.sendMessage = sendMessage;


// ==========================================
// 🎤 VOICE RECOGNITION
// ==========================================

let recognition = null;
let isListening = false;


// Check browser support

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


function startPrinceAI() {

    // --------------------------------------
    // Check microphone support
    // --------------------------------------

    if (!SpeechRecognition) {

        alert(
            "🎤 Voice recognition is not supported by this browser.\n\n" +
            "Please use Google Chrome on your phone."
        );

        return;
    }


    // If already listening, stop
    if (isListening && recognition) {

        recognition.stop();

        return;
    }


    // Create recognition
    recognition = new SpeechRecognition();


    // --------------------------------------
    // Settings
    // --------------------------------------

    recognition.lang = "en-KE";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    // --------------------------------------
    // Start listening
    // --------------------------------------

    try {

        recognition.start();

        isListening = true;

        updateVoiceButton(true);

        console.log("🎤 Prince AI is listening...");

    } catch (error) {

        console.error("Microphone error:", error);

        isListening = false;

        updateVoiceButton(false);
    }


    // --------------------------------------
    // When speech is detected
    // --------------------------------------

    recognition.onresult = function(event) {

        const spokenText =
            event.results[0][0].transcript.trim();


        console.log("🎤 User said:", spokenText);


        // Put speech into input box
        const input =
            document.getElementById("userMessage");

        if (input) {

            input.value = spokenText;
        }


        // Show user message
        addUserMessage(spokenText);


        // Find answer
        const answer =
            findKnowledgeAnswer(spokenText);


        // Display answer
        setTimeout(() => {

            addBotMessage(answer);

            // Speak answer
            speakPrinceAI(answer);

        }, 400);


        // Clear input after processing
        if (input) {

            input.value = "";
        }

    };


    // --------------------------------------
    // Recognition ended
    // --------------------------------------

    recognition.onend = function() {

        isListening = false;

        updateVoiceButton(false);

        console.log("🎤 Listening stopped.");

    };


    // --------------------------------------
    // Recognition error
    // --------------------------------------

    recognition.onerror = function(event) {

        console.error(
            "🎤 Speech recognition error:",
            event.error
        );

        isListening = false;

        updateVoiceButton(false);


        if (event.error === "not-allowed") {

            alert(
                "🎤 Microphone permission was denied.\n\n" +
                "Please allow microphone access for this website."
            );
        }

        else if (event.error === "no-speech") {

            console.log("No speech detected.");
        }

        else if (event.error === "network") {

            alert(
                "🌐 Voice recognition needs an internet connection."
            );
        }

    };

}


// Make available to HTML
window.startPrinceAI = startPrinceAI;


// ==========================================
// 🎤 UPDATE MICROPHONE BUTTON
// ==========================================

function updateVoiceButton(listening) {

    const button =
        document.getElementById("voiceBtn");

    if (!button) return;


    if (listening) {

        button.innerHTML = "🔴";

        button.title = "Listening... Tap to stop";

        button.style.background = "#dc3545";

    }

    else {

        button.innerHTML = "🎤";

        button.title = "Talk to Prince AI";

        button.style.background = "";

    }

}


// ==========================================
// 🔊 PRINCE AI TEXT-TO-SPEECH
// ==========================================

function speakPrinceAI(text) {

    // Check speech synthesis
    if (!("speechSynthesis" in window)) {

        console.log(
            "🔊 Text-to-speech is not supported."
        );

        return;
    }


    // Stop previous speech
    window.speechSynthesis.cancel();


    // Create speech
    const speech =
        new SpeechSynthesisUtterance(text);


    // Voice settings
    speech.lang = "en-KE";

    speech.rate = 0.95;

    speech.pitch = 1;

    speech.volume = 1;


    // Speak
    window.speechSynthesis.speak(speech);

}


// Make available if needed
window.speakPrinceAI = speakPrinceAI;


// ==========================================
// 🏠 HOME BUTTON
// ==========================================

function goHome() {

    window.location.href = "index.html";

}

window.goHome = goHome;


// ==========================================
// ➕ NEW CHAT
// ==========================================

function newChat() {

    const chatBox =
        document.getElementById("chatBox");

    if (!chatBox) return;


    chatBox.innerHTML = `

        <div class="bot-message">

            👋 Hello again!

            <br><br>

            I am <strong>Prince AI 🤖</strong>,
            your Smart Campus Assistant.

            <br><br>

            Ask me about:

            <br>📍 Lecture halls

            <br>🏢 Departments

            <br>📚 Offices

            <br>🎓 University services

            <br>📚 Student Portal

            <br>📝 Unit registration

            <br>❓ General campus questions.

            <br><br>

            What would you like to know?

        </div>

    `;


    // Stop speech
    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}

window.newChat = newChat;


// ==========================================
// ⌨️ ENTER KEY SUPPORT
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById("userMessage");


        if (input) {

            input.addEventListener(
                "keydown",
                function(event) {

                    if (event.key === "Enter") {

                        event.preventDefault();

                        sendMessage();

                    }

                }
            );

        }

    }
);


// ==========================================
// ✅ PRINCE AI READY
// ==========================================

console.log(
    "🤖 Prince AI loaded successfully."
);

console.log(
    "📚 Campus knowledge:",
    typeof campusKnowledge !== "undefined"
        ? "Loaded"
        : "NOT LOADED"
);
