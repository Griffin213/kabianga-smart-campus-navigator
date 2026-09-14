// ======================================================
// 🤖 PRINCE AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// VERSION 300
//
// IMPORTANT:
// This file contains NO GPS.
// This file contains NO map navigation.
// This file contains NO routing.
// This file contains NO location tracking.
//
// It is only the Prince AI information assistant.
// ======================================================

console.log("Prince AI v300 loading...");


// ======================================================
// UNIVERSITY KNOWLEDGE
// ======================================================

const princeKnowledge = {

    // --------------------------------------------------
    // VICE CHANCELLOR
    // --------------------------------------------------

    vc: {
        keywords: [
            "vice chancellor",
            "vc",
            "chancellor"
        ],

        answer:
        "The Vice Chancellor of the University of Kabianga is Prof. Erick Koech, Ph.D., MBS."
    },


    // --------------------------------------------------
    // DVC
    // --------------------------------------------------

    dvc: {
        keywords: [
            "dvc",
            "academic and student affairs",
            "dvc academic"
        ],

        answer:
        "The Deputy Vice Chancellor responsible for Academic and Student Affairs is Prof. Dr. Fredrick Nyongesa Kassilly."
    },


    // --------------------------------------------------
    // PLANNING
    // --------------------------------------------------

    planning: {
        keywords: [
            "planning",
            "research",
            "development",
            "planning research",
            "research development"
        ],

        answer:
        "Planning, Research and Development is under Prof. Maurice Owino Oduor."
    },


    // --------------------------------------------------
    // REGISTRAR ACADEMIC
    // --------------------------------------------------

    registrarAcademic: {
        keywords: [
            "registrar academic",
            "registrar academics",
            "academic registrar"
        ],

        answer:
        "The Registrar responsible for Academic Affairs is Dr. Cecilia Sang."
    },


    // --------------------------------------------------
    // REGISTRAR ADMINISTRATION
    // --------------------------------------------------

    registrarAdministration: {
        keywords: [
            "registrar administration",
            "administration registrar"
        ],

        answer:
        "The Registrar responsible for Administration is Mr. Peter K. Kimalel."
    },


    // --------------------------------------------------
    // DEAN OF STUDENTS
    // --------------------------------------------------

    deanStudents: {
        keywords: [
            "dean of students",
            "student dean",
            "dean students"
        ],

        answer:
        "The Dean of Students is Dr. Peter Ngugi."
    },


    // --------------------------------------------------
    // ICT
    // --------------------------------------------------

    ict: {
        keywords: [
            "director ict",
            "ict director",
            "ict"
        ],

        answer:
        "The Director of ICT is Mr. Geoffrey Sowek."
    },


    // --------------------------------------------------
    // FINANCE
    // --------------------------------------------------

    finance: {
        keywords: [
            "finance officer",
            "finance",
            "financial officer"
        ],

        answer:
        "The Finance Officer is CPA Willy Koech."
    },


    // --------------------------------------------------
    // LTB1
    // --------------------------------------------------

    ltb1: {
        keywords: [
            "ltb1",
            "ltb 1",
            "lecture theatre 1",
            "lecture theatre one"
        ],

        answer:
        "LTB1 is one of the lecture and learning facilities at the University of Kabianga. You can use the Smart Campus Navigator to access its available information."
    },


    // --------------------------------------------------
    // LTB2
    // --------------------------------------------------

    ltb2: {
        keywords: [
            "ltb2",
            "ltb 2",
            "lecture theatre 2",
            "lecture theatre two"
        ],

        answer:
        "LTB2 is one of the lecture and learning facilities at the University of Kabianga."
    },


    // --------------------------------------------------
    // LTB3
    // --------------------------------------------------

    ltb3: {
        keywords: [
            "ltb3",
            "ltb 3",
            "lecture theatre 3",
            "lecture theatre three"
        ],

        answer:
        "LTB3 is a major academic and administrative building at the University of Kabianga. It contains lecture halls, offices and other facilities across several floors."
    },


    // --------------------------------------------------
    // LTB4
    // --------------------------------------------------

    ltb4: {
        keywords: [
            "ltb4",
            "ltb 4",
            "lecture theatre 4",
            "lecture theatre four"
        ],

        answer:
        "LTB4 is one of the lecture and learning facilities at the University of Kabianga."
    },


    // --------------------------------------------------
    // LTB3 FLOORS
    // --------------------------------------------------

    ltb3Floors: {
        keywords: [
            "ltb3 floors",
            "ltb 3 floors",
            "inside ltb3",
            "inside ltb 3",
            "ltb3 offices",
            "ltb 3 offices",
            "ltb3 building",
            "ltb 3 building"
        ],

        answer:
        "LTB3 has several floors. Ground Floor: Dean School of Education, HOD Curriculum and Instruction, HOD Physiology and Foundations, LH1 and LH2. First Floor: Senate Chamber, LH3, Micro Teaching Lab and School of Business Offices, including the Finance Office, Dean School of Business Office and HODs Office. Second Floor: Director of Gender Office, LH5, LH6 and Director of Postgraduate Studies Office. Third Floor: LH7 and LH8."
    },


    // --------------------------------------------------
    // LIBRARY
    // --------------------------------------------------

    library: {
        keywords: [
            "library",
            "university library"
        ],

        answer:
        "The University Library provides learning resources, research materials and study spaces for students and staff."
    },


    // --------------------------------------------------
    // MAIN GATE
    // --------------------------------------------------

    gate: {
        keywords: [
            "main gate",
            "gate",
            "entrance",
            "campus gate"
        ],

        answer:
        "The Main Gate is the primary entrance and access point to the University of Kabianga campus."
    },


    // --------------------------------------------------
    // SCHOOL OF BUSINESS
    // --------------------------------------------------

    business: {
        keywords: [
            "school of business",
            "business school",
            "business offices"
        ],

        answer:
        "The School of Business has offices in LTB3. The LTB3 School of Business offices include the Finance Office, Dean School of Business Office and HODs Office."
    }

};


// ======================================================
// GET DOM ELEMENTS
// ======================================================

let chatBox;
let userInput;
let sendBtn;
let clearBtn;
let backBtn;
let voiceBtn;
let status;


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Prince AI v300 initialized.");

    chatBox = document.getElementById("chatBox");
    userInput = document.getElementById("userInput");
    sendBtn = document.getElementById("sendBtn");
    clearBtn = document.getElementById("clearBtn");
    backBtn = document.getElementById("backBtn");
    voiceBtn = document.getElementById("voiceBtn");
    status = document.getElementById("status");


    // --------------------------------------------------
    // CHECK ELEMENTS
    // --------------------------------------------------

    if (!chatBox || !userInput || !sendBtn || !clearBtn || !backBtn) {

        console.error("Prince AI: Required HTML elements are missing.");

        if (status) {
            status.textContent = "🔴 Prince AI failed to load";
        }

        return;
    }


    // --------------------------------------------------
    // SEND BUTTON
    // --------------------------------------------------

    sendBtn.addEventListener("click", function () {

        sendMessage();

    });


    // --------------------------------------------------
    // CLEAR BUTTON
    // --------------------------------------------------

    clearBtn.addEventListener("click", function () {

        clearChat();

    });


    // --------------------------------------------------
    // BACK BUTTON
    // --------------------------------------------------

    backBtn.addEventListener("click", function () {

        goBack();

    });


    // --------------------------------------------------
    // ENTER KEY
    // --------------------------------------------------

    userInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();

        }

    });


    // --------------------------------------------------
    // MICROPHONE
    // --------------------------------------------------

    if (voiceBtn) {

        voiceBtn.addEventListener("click", function () {

            startVoiceInput();

        });

    }


    // --------------------------------------------------
    // FINAL STATUS
    // --------------------------------------------------

    if (status) {

        status.textContent = "🟢 Prince AI is ready";

    }

    console.log("Prince AI v300 is ready.");

});


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    if (!userInput) {

        return;

    }

    const question = userInput.value.trim();

    if (question === "") {

        return;

    }


    // Show user message

    addUserMessage(question);


    // Clear input

    userInput.value = "";


    // Generate answer

    const answer = getAnswer(question);


    // Small delay for natural response

    setTimeout(function () {

        addBotMessage(answer);

        speak(answer);

    }, 300);

}


// ======================================================
// QUICK QUESTIONS
// ======================================================

function askQuick(question) {

    if (!userInput) {

        return;

    }

    userInput.value = question;

    sendMessage();

}


// ======================================================
// FIND ANSWER
// ======================================================

function getAnswer(question) {

    const text = question
        .toLowerCase()
        .trim();


    // --------------------------------------------------
    // GREETINGS
    // --------------------------------------------------

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {

        return "Hello! 👋 I am Prince AI, the University of Kabianga Smart Campus Assistant. How can I help you?";

    }


    // --------------------------------------------------
    // THANK YOU
    // --------------------------------------------------

    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {

        return "You're welcome! 😊 I am always happy to help with University of Kabianga information.";

    }


    // --------------------------------------------------
    // HELP
    // --------------------------------------------------

    if (
        text === "help" ||
        text.includes("what can you do")
    ) {

        return "I can provide information about University of Kabianga leadership, LTB1, LTB2, LTB3, LTB4, LTB3 floors, the Library, Main Gate and School of Business.";

    }


    // --------------------------------------------------
    // SPECIFIC LTB3 FLOOR QUESTION
    // --------------------------------------------------

    if (
        text.includes("floor") &&
        text.includes("ltb3")
    ) {

        return princeKnowledge.ltb3Floors.answer;

    }


    if (
        text.includes("floor") &&
        text.includes("ltb 3")
    ) {

        return princeKnowledge.ltb3Floors.answer;

    }


    // --------------------------------------------------
    // CHECK KNOWLEDGE
    // --------------------------------------------------

    const categories = Object.values(princeKnowledge);


    for (let i = 0; i < categories.length; i++) {

        const item = categories[i];

        for (let j = 0; j < item.keywords.length; j++) {

            if (text.includes(item.keywords[j])) {

                return item.answer;

            }

        }

    }


    // --------------------------------------------------
    // DEFAULT ANSWER
    // --------------------------------------------------

    return "I’m sorry, I don't have that information yet. Please ask me about University of Kabianga leadership, LTB1, LTB2, LTB3, LTB4, LTB3 floors, the Library, Main Gate or School of Business.";

}


// ======================================================
// ADD USER MESSAGE
// ======================================================

function addUserMessage(message) {

    if (!chatBox) {

        return;

    }

    const div = document.createElement("div");

    div.className = "message user";

    div.textContent = message;

    chatBox.appendChild(div);

    scrollChat();

}


// ======================================================
// ADD BOT MESSAGE
// ======================================================

function addBotMessage(message) {

    if (!chatBox) {

        return;

    }

    const div = document.createElement("div");

    div.className = "message bot";

    div.textContent = message;

    chatBox.appendChild(div);

    scrollChat();

}


// ======================================================
// SCROLL CHAT
// ======================================================

function scrollChat() {

    if (chatBox) {

        chatBox.scrollTop = chatBox.scrollHeight;

    }

}


// ======================================================
// CLEAR CHAT
// ======================================================

function clearChat() {

    if (!chatBox) {

        return;

    }

    chatBox.innerHTML = "";

    addBotMessage(
        "Hello again! 👋 I am Prince AI. How can I help you?"
    );

}


// ======================================================
// BACK
// ======================================================

function goBack() {

    window.location.href = "home.html";

}


// ======================================================
// TEXT TO SPEECH
// ======================================================

function speak(text) {

    if (!("speechSynthesis" in window)) {

        return;

    }

    try {

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-KE";

        speech.rate = 0.95;

        speech.pitch = 1;

        window.speechSynthesis.speak(speech);

    } catch (error) {

        console.log("Speech error:", error);

    }

}


// ======================================================
// VOICE INPUT
// ======================================================

function startVoiceInput() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice input is not supported by this browser. Please use Google Chrome."
        );

        return;

    }


    const recognition = new SpeechRecognition();

    recognition.lang = "en-KE";

    recognition.continuous = false;

    recognition.interimResults = false;


    if (status) {

        status.textContent = "🎤 Listening...";

    }


    recognition.start();


    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;


        if (userInput) {

            userInput.value = transcript;

        }


        if (status) {

            status.textContent = "🟢 Prince AI is ready";

        }

    };


    recognition.onerror = function (event) {

        console.log("Voice recognition error:", event.error);


        if (status) {

            status.textContent = "🟢 Prince AI is ready";

        }

    };


    recognition.onend = function () {

        if (status) {

            status.textContent = "🟢 Prince AI is ready";

        }

    };

}


// ======================================================
// GLOBAL FUNCTIONS
// ======================================================

window.sendMessage = sendMessage;

window.clearChat = clearChat;

window.goBack = goBack;

window.askQuick = askQuick;

window.getAnswer = getAnswer;

window.startVoiceInput = startVoiceInput;


// ======================================================
// FINISHED
// ======================================================

console.log(
    "Prince AI v300 loaded successfully — navigation removed."
);
