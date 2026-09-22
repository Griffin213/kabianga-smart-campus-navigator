// ======================================================
// 🤖 UOK AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// VERSION 406
//
// Controls:
// - Chat
// - Knowledge search
// - Quick questions
// - Voice input
// - Text-to-speech
// - Campus directions
//
// University information is stored in knowledge.js.
// ======================================================

console.log("🤖 UOK AI v406 loading...");


// ======================================================
// DOM ELEMENTS
// ======================================================

let chatBox = null;
let userInput = null;
let sendBtn = null;
let clearBtn = null;
let backBtn = null;
let voiceBtn = null;
let status = null;


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("🤖 UOK AI v406 initializing...");

    chatBox = document.getElementById("chatBox");
    userInput = document.getElementById("userInput");
    sendBtn = document.getElementById("sendBtn");
    clearBtn = document.getElementById("clearBtn");
    backBtn = document.getElementById("backBtn");

    // Support both microphone IDs
    voiceBtn =
        document.getElementById("micBtn") ||
        document.getElementById("voiceBtn");

    status = document.getElementById("status");


    // ==================================================
    // CHECK INTERFACE
    // ==================================================

    if (!chatBox || !userInput || !sendBtn || !clearBtn || !backBtn) {

        console.log(
            "ℹ️ UOK AI chat interface not found on this page."
        );

        return;
    }


    // ==================================================
    // SEND BUTTON
    // ==================================================

    sendBtn.addEventListener("click", function () {

        sendMessage();

    });


    // ==================================================
    // CLEAR BUTTON
    // ==================================================

    clearBtn.addEventListener("click", function () {

        clearChat();

    });


    // ==================================================
    // BACK BUTTON
    // ==================================================

    backBtn.addEventListener("click", function () {

        goBack();

    });


    // ==================================================
    // ENTER KEY
    // ==================================================

    userInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();

        }

    });


    // ==================================================
    // MICROPHONE
    // ==================================================

    if (voiceBtn) {

        voiceBtn.addEventListener("click", function () {

            startVoiceInput();

        });

    }


    // ==================================================
    // READY STATUS
    // ==================================================

    if (status) {

        status.textContent =
            "🟢 UOK AI is ready";

    }


    console.log("✅ UOK AI v406 is ready.");

});


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    if (!userInput || !chatBox) {

        return;

    }


    const question =
        userInput.value.trim();


    if (question === "") {

        return;

    }


    // Show user message
    addUserMessage(question);


    // Clear input
    userInput.value = "";


    // Find answer
    const answer =
        getAnswer(question);


    // Natural response delay
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
// NORMALIZE TEXT
// ======================================================

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}


// ======================================================
// FIND KNOWLEDGE
// ======================================================

function findKnowledge(question) {

    if (
        typeof campusKnowledge === "undefined" ||
        !campusKnowledge
    ) {

        console.error(
            "❌ UOK AI: campusKnowledge is not available."
        );

        return null;

    }


    const text =
        normalizeText(question);


    const entries =
        Object.values(campusKnowledge);


    const matches = [];


    entries.forEach(function (item) {

        if (
            !item ||
            !Array.isArray(item.keywords)
        ) {

            return;

        }


        item.keywords.forEach(function (keyword) {

            const normalizedKeyword =
                normalizeText(keyword);


            if (!normalizedKeyword) {

                return;

            }


            if (
                text.includes(normalizedKeyword)
            ) {

                matches.push({

                    item: item,

                    keyword: normalizedKeyword,

                    length: normalizedKeyword.length

                });

            }

        });

    });


    if (matches.length === 0) {

        return null;

    }


    // Most specific match first
    matches.sort(function (a, b) {

        return b.length - a.length;

    });


    return matches[0].item;

}


// ======================================================
// GET ANSWER
// ======================================================

function getAnswer(question) {

    const text =
        normalizeText(question);


    // ==================================================
    // GREETINGS
    // ==================================================

    if (
        text === "hi" ||
        text === "hello" ||
        text === "hey" ||
        text.includes("good morning") ||
        text.includes("good afternoon") ||
        text.includes("good evening")
    ) {

        return (
            "Hello! 👋 I am UOK AI, the University of Kabianga " +
            "Smart Campus Assistant. How can I help you?"
        );

    }


    // ==================================================
    // THANK YOU
    // ==================================================

    if (
        text.includes("thank you") ||
        text === "thanks" ||
        text.includes("thank u")
    ) {

        return (
            "You're welcome! 😊 I am happy to help you with " +
            "University of Kabianga information."
        );

    }


    // ==================================================
    // WHO ARE YOU?
    // ==================================================

    if (
        text.includes("who are you") ||
        text.includes("what are you") ||
        text.includes("your name")
    ) {

        return (
            "I am UOK AI 🤖, the University of Kabianga " +
            "Smart Campus Assistant. I can help you find " +
            "campus information, buildings, offices, services " +
            "and important University information."
        );

    }


    // ==================================================
    // HELP
    // ==================================================

    if (
        text === "help" ||
        text.includes("what can you do") ||
        text.includes("how can you help")
    ) {

        return (
            "I can help you with University of Kabianga " +
            "buildings, lecture halls, offices, leadership, " +
            "student services, LTB3 floors, the Library, " +
            "Health Centre, Main Gate, Student Finance, " +
            "Security Offices, VC Office and other campus information."
        );

    }


    // ==================================================
    // DIRECTIONS — HEALTH CENTRE
    // ==================================================

    if (
        text.includes("where is the health centre") ||
        text.includes("where is the health center") ||
        text.includes("location of health centre") ||
        text.includes("location of health center") ||
        text.includes("how do i get to the health centre") ||
        text.includes("how do i get to the health center") ||
        text.includes("directions to the health centre") ||
        text.includes("directions to the health center")
    ) {

        const item =
            campusKnowledge.healthCentre;


        if (
            item &&
            item.directions
        ) {

            return (
                item.info +
                "\n\nDirections:\n• " +
                item.directions.join("\n• ")
            );

        }

    }


    // ==================================================
    // DIRECTIONS — VC OFFICE
    // ==================================================

    if (
        text.includes("where is the vc office") ||
        text.includes("where is the vice chancellor office") ||
        text.includes("where is the vice chancellors office") ||
        text.includes("location of vc office") ||
        text.includes("location of vice chancellor office") ||
        text.includes("how do i get to the vc office") ||
        text.includes("how do i get to the vice chancellor office") ||
        text.includes("how can i get to the vc office") ||
        text.includes("directions to the vc office") ||
        text.includes("directions to the vice chancellor office")
    ) {

        const item =
            campusKnowledge.viceChancellorOffice;


        if (
            item &&
            item.directions
        ) {

            return (
                item.info +
                "\n\nDirections:\n• " +
                item.directions.join("\n• ")
            );

        }

    }


    // ==================================================
    // DIRECTIONS — STUDENT FINANCE
    // ==================================================

    if (
        text.includes("student finance") ||
        text.includes("where is student finance") ||
        text.includes("where is the student finance") ||
        text.includes("location of student finance") ||
        text.includes("student finance location") ||
        text.includes("directions to student finance") ||
        text.includes("directions to the student finance") ||
        text.includes("how do i get to student finance") ||
        text.includes("how can i get to student finance")
    ) {

        const item =
            campusKnowledge.studentFinance;


        if (
            item &&
            item.directions
        ) {

            return (
                item.info +
                "\n\nDirections:\n• " +
                item.directions.join("\n• ")
            );

        }

    }


    // ==================================================
    // DIRECTIONS — SECURITY OFFICES
    // ==================================================

    if (
        text.includes("security office") ||
        text.includes("security offices") ||
        text.includes("where is security") ||
        text.includes("where is the security") ||
        text.includes("where are the security offices") ||
        text.includes("location of security office") ||
        text.includes("location of security offices") ||
        text.includes("security office location") ||
        text.includes("directions to security") ||
        text.includes("directions to the security office") ||
        text.includes("how do i get to security") ||
        text.includes("how do i get to the security office") ||
        text.includes("how can i get to security")
    ) {

        const item =
            campusKnowledge.securityOffice;


        if (
            item &&
            item.directions
        ) {

            return (
                item.info +
                "\n\nDirections:\n• " +
                item.directions.join("\n• ")
            );

        }

    }


    // ==================================================
    // LTB3 GROUND FLOOR
    // ==================================================

    if (
        text.includes("ground floor") &&
        (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        )
    ) {

        if (
            campusKnowledge.ltb3GroundFloor
        ) {

            return campusKnowledge
                .ltb3GroundFloor
                .info;

        }

    }


    // ==================================================
    // LTB3 FIRST FLOOR
    // ==================================================

    if (
        text.includes("first floor") &&
        (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        )
    ) {

        if (
            campusKnowledge.ltb3FirstFloor
        ) {

            return campusKnowledge
                .ltb3FirstFloor
                .info;

        }

    }


    // ==================================================
    // LTB3 SECOND FLOOR
    // ==================================================

    if (
        text.includes("second floor") &&
        (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        )
    ) {

        if (
            campusKnowledge.ltb3SecondFloor
        ) {

            return campusKnowledge
                .ltb3SecondFloor
                .info;

        }

    }


    // ==================================================
    // LTB3 THIRD FLOOR
    // ==================================================

    if (
        text.includes("third floor") &&
        (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        )
    ) {

        if (
            campusKnowledge.ltb3ThirdFloor
        ) {

            return campusKnowledge
                .ltb3ThirdFloor
                .info;

        }

    }


    // ==================================================
    // LTB3 FLOORS
    // ==================================================

    if (
        text.includes("floor") &&
        (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        )
    ) {

        if (
            campusKnowledge.ltb3Floors
        ) {

            return campusKnowledge
                .ltb3Floors
                .info;

        }

    }


    // ==================================================
    // GENERAL KNOWLEDGE SEARCH
    // ==================================================

    const result =
        findKnowledge(question);


    if (result) {

        return result.info;

    }


    // ==================================================
    // DEFAULT RESPONSE
    // ==================================================

    return (
        "I’m sorry, I don't have that information yet. " +
        "You can ask me about University buildings, LTB1, " +
        "LTB2, LTB3, LTB4, LTB3 floors, the Library, " +
        "Health Centre, Main Gate, Student Finance, " +
        "Security Offices, VC Office, University leadership, " +
        "student services and other campus information."
    );

}


// ======================================================
// ADD USER MESSAGE
// ======================================================

function addUserMessage(message) {

    if (!chatBox) {

        return;

    }


    const div =
        document.createElement("div");


    div.className =
        "message user";


    div.textContent =
        message;


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


    const div =
        document.createElement("div");


    div.className =
        "message bot";


    div.textContent =
        message;


    chatBox.appendChild(div);

    scrollChat();

}


// ======================================================
// SCROLL CHAT
// ======================================================

function scrollChat() {

    if (chatBox) {

        chatBox.scrollTop =
            chatBox.scrollHeight;

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
        "Hello again! 👋
