// ==========================================
// 🤖 PRINCE AI - UNIVERSITY OF KABIANGA
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
// 🧠 FIND ANSWER
// ==========================================

function findKnowledgeAnswer(question) {

    if (
        typeof campusKnowledge === "undefined"
    ) {

        return "Sorry, my campus knowledge database is not available right now.";
    }

    const text = String(question)
        .toLowerCase()
        .trim();

    if (!text) {

        return "Please tell me what you would like to know.";
    }


    // Exact match
    if (campusKnowledge[text]) {

        return campusKnowledge[text].info;
    }


    // Keyword matching
    const keys = Object.keys(campusKnowledge);

    for (const key of keys) {

        if (text.includes(key)) {

            return campusKnowledge[key].info;
        }

        if (
            key.includes(text) &&
            text.length > 2
        ) {

            return campusKnowledge[key].info;
        }
    }


    // Word matching
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

    if (
        bestMatch &&
        highestScore > 0
    ) {

        return bestMatch.info;
    }


    // Common questions
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

        return "I can help you find lecture halls, departments, offices and university services. You can also ask about the Student Portal, unit registration, fees, accommodation, examinations and more.";
    }


    return "I'm still learning about the University of Kabianga. 🤖 Please try asking about a lecture hall, department, office, Student Portal, unit registration, accommodation, fees or another campus service.";
}


// ==========================================
// ⌨️ SEND MESSAGE
// ==========================================

function sendMessage() {

    const input =
        document.getElementById("userMessage");

    if (!input) return;

    const question =
        input.value.trim();

    if (!question) return;

    addUserMessage(question);

    input.value = "";

    const answer =
        findKnowledgeAnswer(question);

    setTimeout(function () {

        addBotMessage(answer);

        speakPrinceAI(answer);

    }, 400);
}

window.sendMessage = sendMessage;


// ==========================================
// 🎤 PRINCE AI VOICE RECOGNITION
// ==========================================

let recognition = null;

let isListening = false;


function startPrinceAI() {

    console.log("🎤 Prince AI button clicked.");


    // Detect browser support HERE
    // instead of only when the page loads.

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    // Browser does not support it
    if (!SpeechRecognition) {

        alert(
            "🎤 Prince AI voice recognition is not available in this browser.\n\n" +
            "Please open the website using Google Chrome on Android."
        );

        console.error(
            "❌ SpeechRecognition API not supported."
        );

        return;
    }


    // Stop current listening session
    if (
        isListening &&
        recognition
    ) {

        console.log(
            "🛑 Stopping Prince AI..."
        );

        recognition.stop();

        return;
    }


    // Create new recognition
    recognition =
        new SpeechRecognition();


    // ======================================
    // SETTINGS
    // ======================================

    recognition.lang = "en-KE";

    recognition.continuous = false;

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    // ======================================
    // START
    // ======================================

    recognition.onstart = function () {

        isListening = true;

        updateVoiceButton(true);

        console.log(
            "🎤 Prince AI is listening..."
        );
    };


    try {

        recognition.start();

    }

    catch (error) {

        console.error(
            "❌ Could not start microphone:",
            error
        );

        isListening = false;

        updateVoiceButton(false);

        alert(
            "⚠️ Prince AI could not start.\n\n" +
            "Please check your microphone permission and try again."
        );

        return;
    }


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
                "🎤 User said:",
                spokenText
            );


            if (!spokenText) {

                return;
            }


            // Show user's speech
            addUserMessage(
                spokenText
            );


            // Find answer
            const answer =
                findKnowledgeAnswer(
                    spokenText
                );


            // Respond
            setTimeout(
                function() {

                    addBotMessage(
                        answer
                    );

                    speakPrinceAI(
                        answer
                    );

                },
                400
            );
        };


    // ======================================
    // RECOGNITION END
    // ======================================

    recognition.onend =
        function() {

            isListening = false;

            updateVoiceButton(false);

            console.log(
                "🎤 Prince AI stopped listening."
            );
        };


    // ======================================
    // RECOGNITION ERROR
    // ======================================

    recognition.onerror =
        function(event) {

            console.error(
                "🎤 Prince AI error:",
                event.error
            );


            isListening = false;

            updateVoiceButton(false);


            switch (event.error) {

                case "not-allowed":

                    alert(
                        "🎤 Microphone permission was denied.\n\n" +
                        "Please allow microphone access for this website."
                    );

                    break;


                case "audio-capture":

                    alert(
                        "🎤 Prince AI cannot access your microphone.\n\n" +
                        "Check that your phone microphone is working."
                    );

                    break;


                case "network":

                    alert(
                        "🌐 Voice recognition requires an internet connection."
                    );

                    break;


                case "no-speech":

                    console.log(
                        "No speech detected."
                    );

                    break;


                case "aborted":

                    console.log(
                        "Voice recognition stopped."
                    );

                    break;


                default:

                    alert(
                        "⚠️ Prince AI voice recognition encountered an error.\n\n" +
                        "Please try again."
                    );

                    break;
            }
        };
}


window.startPrinceAI =
    startPrinceAI;


// ==========================================
// 🎤 VOICE BUTTON
// ==========================================

function updateVoiceButton(listening) {

    const button =
        document.getElementById(
            "voiceBtn"
        );

    if (!button) return;


    if (listening) {

        button.innerHTML = "🔴";

        button.title =
            "Prince AI is listening...";

        button.style.background =
            "#dc3545";
    }

    else {

        button.innerHTML = "🎤";

        button.title =
            "Talk to Prince AI";

        button.style.background =
            "";
    }
}


// ==========================================
// 🔊 TEXT TO SPEECH
// ==========================================

function speakPrinceAI(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        console.log(
            "🔊 Text-to-speech is not supported."
        );

        return;
    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    speech.lang = "en-KE";

    speech.rate = 0.95;

    speech.pitch = 1;

    speech.volume = 1;


    window.speechSynthesis.speak(
        speech
    );
}

window.speakPrinceAI =
    speakPrinceAI;


// ==========================================
// 🏠 HOME
// ==========================================

function goHome() {

    window.location.href =
        "index.html";
}

window.goHome = goHome;


// ==========================================
// ➕ NEW CHAT
// ==========================================

function newChat() {

    const chatBox =
        document.getElementById(
            "chatBox"
        );

    if (!chatBox) return;


    chatBox.innerHTML = `

        <div class="bot-message">

            👋 Hello again!

            <br><br>

            I am
            <strong>Prince AI 🤖</strong>,
            your Smart Campus Assistant.

            <br><br>

            Ask me about:

            <br>📍 Lecture halls

            <br>🏢 Departments

            <br>📚 Offices

            <br>🗺️ Campus navigation

            <br>🎓 University services

            <br>📚 Student Portal

            <br>📝 Unit registration

            <br>❓ General campus questions.

            <br><br>

            What would you like to know?

        </div>

    `;


    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();
    }
}

window.newChat = newChat;


// ==========================================
// ⌨️ ENTER KEY
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "userMessage"
            );

        if (!input) return;


        input.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendMessage();
                }
            }
        );
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

console.log(
    "🎤 Voice API:",
    (
        window.SpeechRecognition ||
        window.webkitSpeechRecognition
    )
        ? "Available"
        : "Not available"
);
