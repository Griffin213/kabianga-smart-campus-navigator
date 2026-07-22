// ===============================
// Prince AI - University of Kabianga
// ===============================

let chatMemory = [];
let recognition;
let isListening = false;
let greeted = false;
// Speak text


// Go back to home page
function goHome() {
    window.location.href = "index.html";
}

// Voice Recognition
function startListening() {

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Sorry, your browser does not support voice recognition.");
        return;
    }

    if (!recognition) {

        recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.continuous = false;

        recognition.onstart = function () {

            isListening = true;

            const btn = document.getElementById("voiceBtn");
            if (btn) btn.innerHTML = "🔴 Listening...";

        };

        recognition.onresult = function (event) {

            const message = event.results[0][0].transcript.toLowerCase();

            addMessage(message, "user-message");

            const reply = princeReply(message);

            addMessage(reply, "ai-message");

            speak(reply);

        };

        recognition.onend = function () {

    const btn = document.getElementById("voiceBtn");
    if (btn) btn.innerHTML = "🎤 Listening...";

    if (isListening) {

        setTimeout(function () {
            recognition.start();
        }, 300);

    }

};

        recognition.onerror = function () {

            isListening = false;

            const btn = document.getElementById("voiceBtn");
            if (btn) btn.innerHTML = "🎤 Prince AI";

        };

    }

    recognition.start();

}

// Speak text
function speak(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;

    speech.onend = function () {

    if (greeted && isListening) {

        setTimeout(function () {
            startListening();
        }, 500);

    }

};

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

}

// Send text message
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

    let typing = document.createElement("div");

    typing.id = "typing";
    typing.className = "ai-message";
    typing.innerHTML = "Prince AI is typing...";

    document.getElementById("chatBox").appendChild(typing);

    setTimeout(function () {

        typing.remove();

        const reply = princeReply(message.toLowerCase());

        addMessage(reply, "ai-message");

        chatMemory.push({
            role: "ai",
            text: reply
        });

    }, 1200);

}

// Add chat bubble
function addMessage(text, className) {

    const chatBox = document.getElementById("chatBox");

    const div = document.createElement("div");

    div.className = className;

    div.innerHTML = text;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;

}

// Prince AI Brain
function princeReply(message) {

    // Search campus knowledge

if (typeof campusKnowledge !== "undefined") {

    // Understand common questions about the Dean
    if (
        message.includes("dean") &&
        !message.includes("education") &&
        !message.includes("science")
    ) {
        return "📍 Dean, School of Business\n\n🏢 Building: LTB3\n⬆ Floor: First Floor\n\nThe Dean's Office is located on the First Floor of LTB3.";
    }

    // Understand common questions about the HOD
    if (
        message.includes("hod") ||
        message.includes("head of department")
    ) {
        return "📍 Head of Department - School of Business\n\n🏢 Building: LTB3\n⬆ Floor: First Floor\n\nThe HOD Office is located on the First Floor of LTB3.";
    }

    // Search all other places
    for (let place in campusKnowledge) {

        if (message.includes(place)) {

            return "📍 " +
                campusKnowledge[place].name +
                "\n\n" +
                campusKnowledge[place].info;

        }

    }

}

    if (message.includes("hello") || message.includes("hi")) {

        return "Hello 👋. Welcome to the University of Kabianga Smart Campus Navigator. How can I assist you today?";

    }

    if (message.includes("who are you")) {

        return "I am Prince AI, your smart campus assistant created to help students and visitors navigate the University of Kabianga.";

    }

    if (message.includes("help")) {

        return "I can help you find campus locations, answer university questions, and provide navigation assistance.";

    }

    if (message.includes("thank")) {

        return "You're welcome 😊. I'm always happy to help.";

    }

    if (message.includes("name")) {

        return "My name is Prince AI.";

    }

    return "I'm still learning about the University of Kabianga. More campus information will be added soon.";

}

// Press Enter to send
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
function newChat() {

    chatMemory = [];

    document.getElementById("chatBox").innerHTML = `
        <div class="ai-message">
            Hello 👋 I am Prince AI. How can I help you today?
        </div>
    `;

}

function clearChat() {

    if (confirm("Clear this conversation?")) {
        newChat();
    }

}
