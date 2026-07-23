// =====================================
// Prince AI v2.0
// University of Kabianga
// Part 1 - Core + Voice + Chat
// =====================================

// Chat Memory
let chatMemory = [];

// Voice Variables
let recognition = null;
let greeted = false;
let voiceMode = false;


// Speak text
function speak(text) {

    // Stop anything currently speaking
    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1.1;
    speech.pitch = 1;
    speech.volume = 1;

    // Prevent microphone from listening while speaking
    isListening = false;

    speech.onend = function () {

        const btn = document.getElementById("voiceBtn");

        if(btn){
            btn.innerHTML = "🎤 Ask Prince";
        }

    };

    speechSynthesis.speak(speech);

}
// --------------------
// Home
// --------------------
function goHome() {

    window.location.href = "index.html";

}
// --------------------
// Start Voice Assistant
// --------------------
function startPrinceAI() {

    if (!greeted) {

        greeted = true;

        voiceMode = true;

        speak("Hello. I am Prince AI. How can I help you today?");

        speechSynthesis.onvoiceschanged = function () {
            startListening();
        };

    } else {

        voiceMode = true;

        startListening();

    }

}


// --------------------
// Stop Voice Assistant
// --------------------
function stopPrinceAI() {

    voiceMode = false;

    window.speechSynthesis.cancel();

    if (recognition) {

        recognition.stop();

    }

}

// --------------------
// Voice Recognition
// --------------------
function startListening() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert("Voice recognition is not supported on this browser.");

        return;

    }

    recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.onstart = function () {

        console.log("Prince AI Listening...");

    };

    recognition.onresult = function (event) {

        const message =
            event.results[0][0].transcript;

        addMessage(message, "user-message");

        const reply =
            princeReply(message.toLowerCase());

        addMessage(reply, "ai-message");
        voiceMode = false;
        if (voiceMode) {
    speak(reply);
}

// Stop listening after answering


    };

    recognition.onerror = function () {

    voiceMode = false;

    console.log("Voice recognition stopped.");


        

    };

    recognition.onend = function () {

    voiceMode = false;

    console.log("Listening finished.");

    const btn = document.getElementById("voiceBtn");

    if(btn){
        btn.innerHTML = "🎤 Ask Prince";
    }

};

    };

    recognition.start();

}

// =====================================
// Part 2 - Chat Engine
// =====================================

// Send Text Message
function sendMessage() {

    const input = document.getElementById("userMessage");

    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");

    chatMemory.push({
        role: "user",
        text: message
    });

    input.value = "";

    // Typing Animation
    const typing = document.createElement("div");

    typing.id = "typing";

    typing.className = "ai-message";

    typing.innerHTML = "🤖 Prince AI is typing...";

    document.getElementById("chatBox").appendChild(typing);

    document.getElementById("chatBox").scrollTop =
        document.getElementById("chatBox").scrollHeight;

    setTimeout(function () {

        typing.remove();

        const reply = princeReply(message.toLowerCase());

        addMessage(reply, "ai-message");

        chatMemory.push({
            role: "assistant",
            text: reply
        });

        // Speak ONLY when voice mode is active
        if (voiceMode) {

            speak(reply);

        }

    }, 900);

}



// Add Chat Bubble
function addMessage(text, className) {

    const chatBox = document.getElementById("chatBox");

    const bubble = document.createElement("div");

    bubble.className = className;

    bubble.innerHTML = text.replace(/\n/g, "<br>");

    chatBox.appendChild(bubble);

    chatBox.scrollTop = chatBox.scrollHeight;

}



// =====================================
// Prince AI Brain
// =====================================

function princeReply(message) {
// Check administrator knowledge first

let knowledge = JSON.parse(localStorage.getItem("princeKnowledge")) || [];

for(let item of knowledge){

    if(message.toLowerCase().includes(item.question.toLowerCase())){

        return item.answer;

    }

}
    message = message.toLowerCase();



    // Search Knowledge Base

    if (typeof campusKnowledge !== "undefined") {

        for (let place in campusKnowledge) {

            if (message.includes(place.toLowerCase())) {

                return "📍 <b>" +

                    campusKnowledge[place].name +

                    "</b><br><br>" +

                    campusKnowledge[place].info;

            }

        }

    }



    // Greetings

    if (

        message.includes("hello") ||

        message.includes("hi") ||

        message.includes("hey")

    ) {

        return "Hello 👋 Welcome to the University of Kabianga. How can I assist you today?";

    }



    // About AI

    if (

        message.includes("who are you")

    ) {

        return "I am Prince AI, your Smart Campus Assistant. I help students, staff and visitors navigate and access university services.";

    }



    // Help

    if (

        message.includes("help")

    ) {

        return "I can help you find offices, lecture halls, departments, student services, the library, hostels, and many other university facilities.";

    }



    // Thanks

    if (

        message.includes("thank")

    ) {

        return "You're welcome 😊 Happy to help.";

    }



    // Default Reply

    return "Sorry, I don't have information about that yet. We are continuously improving Prince AI. 😊";

}

// =====================================
// Part 3 - Utilities & Initialization
// =====================================

// New Chat
function newChat() {

    chatMemory = [];

    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML = `

        <div class="ai-message">

            👋 Hello! I am <b>Prince AI</b>.<br><br>

            Welcome to the University of Kabianga Smart Campus Navigator.<br><br>

            Ask me about:
            <br>📍 Buildings
            <br>🏢 Offices
            <br>🎓 Schools
            <br>📚 Student Services
            <br>🗺 Campus Navigation

        </div>

    `;

}



// Clear Chat
function clearChat() {

    if (confirm("Clear this conversation?")) {

        newChat();

    }

}



// Send message with Enter key
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("userMessage");

    if (input) {

        input.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                sendMessage();

            }

        });

    }

});



// Stop voice when page closes
window.addEventListener("beforeunload", function () {

    voiceMode = false;

    if (recognition) {

        recognition.stop();

    }

    window.speechSynthesis.cancel();

});



// Start with a welcome chat only
window.onload = function () {

    newChat();

};



// =====================================
// Prince AI v2.0 Loaded
// =====================================

console.log("✅ Prince AI v2.0 Loaded Successfully");
