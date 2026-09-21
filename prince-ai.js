// ======================================================
// 🤖 UOK AI
// UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR
// STABLE VERSION 405
// ======================================================

(function () {

    "use strict";

    console.log("🤖 UOK AI v405 loading...");


    // ==================================================
    // VARIABLES
    // ==================================================

    let chatBox = null;
    let userInput = null;
    let sendBtn = null;
    let clearBtn = null;
    let backBtn = null;
    let voiceBtn = null;
    let status = null;


    // ==================================================
    // GET ELEMENTS
    // ==================================================

    function getElements() {

        chatBox = document.getElementById("chatBox");
        userInput = document.getElementById("userInput");
        sendBtn = document.getElementById("sendBtn");
        clearBtn = document.getElementById("clearBtn");
        backBtn = document.getElementById("backBtn");

        voiceBtn =
            document.getElementById("micBtn") ||
            document.getElementById("voiceBtn");

        status = document.getElementById("status");

    }


    // ==================================================
    // NORMALIZE TEXT
    // ==================================================

    function normalizeText(text) {

        return String(text || "")
            .toLowerCase()
            .replace(/[’']/g, "")
            .replace(/[^\w\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    }


    // ==================================================
    // FIND KNOWLEDGE
    // ==================================================

    function findKnowledge(question) {

        if (
            typeof window.campusKnowledge === "undefined"
        ) {

            console.warn(
                "⚠️ campusKnowledge is not available."
            );

            return null;

        }


        const text =
            normalizeText(question);


        const entries =
            Object.values(window.campusKnowledge);


        let bestMatch = null;
        let bestLength = 0;


        entries.forEach(function (item) {

            if (
                !item ||
                !Array.isArray(item.keywords)
            ) {

                return;

            }


            item.keywords.forEach(function (keyword) {

                const key =
                    normalizeText(keyword);


                if (
                    key &&
                    text.includes(key) &&
                    key.length > bestLength
                ) {

                    bestMatch = item;
                    bestLength = key.length;

                }

            });

        });


        return bestMatch;

    }


    // ==================================================
    // GET ANSWER
    // ==================================================

    function getAnswer(question) {

        const text =
            normalizeText(question);


        // ----------------------------------------------
        // GREETINGS
        // ----------------------------------------------

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


        // ----------------------------------------------
        // THANK YOU
        // ----------------------------------------------

        if (
            text.includes("thank you") ||
            text === "thanks" ||
            text.includes("thank u")
        ) {

            return (
                "You're welcome! 😊 I am happy to help you " +
                "with University of Kabianga information."
            );

        }


        // ----------------------------------------------
        // WHO ARE YOU
        // ----------------------------------------------

        if (
            text.includes("who are you") ||
            text.includes("what are you") ||
            text.includes("your name")
        ) {

            return (
                "I am UOK AI 🤖, the University of Kabianga " +
                "Smart Campus Assistant. I can help you find " +
                "campus buildings, lecture halls, offices, " +
                "services, directions and University information."
            );

        }


        // ----------------------------------------------
        // HELP
        // ----------------------------------------------

        if (
            text === "help" ||
            text.includes("what can you do") ||
            text.includes("how can you help")
        ) {

            return (
                "I can help you with UOK buildings, lecture halls, " +
                "offices, leadership, student services, LTB1, " +
                "LTB2, LTB3, LTB4, the Library, Health Centre, " +
                "Main Gate, VC Office and other campus information."
            );

        }


        // ----------------------------------------------
        // HEALTH CENTRE
        // ----------------------------------------------

        if (
            text.includes("health centre") ||
            text.includes("health center")
        ) {

            const item =
                window.campusKnowledge &&
                window.campusKnowledge.healthCentre;


            if (item) {

                if (item.directions) {

                    return (
                        item.info +
                        "\n\nDirections:\n• " +
                        item.directions.join("\n• ")
                    );

                }

                return item.info;

            }

        }


        // ----------------------------------------------
        // VC OFFICE
        // ----------------------------------------------

        if (
            text.includes("vc office") ||
            text.includes("vice chancellor office") ||
            text.includes("vice chancellors office")
        ) {

            const item =
                window.campusKnowledge &&
                window.campusKnowledge.viceChancellorOffice;


            if (item) {

                if (item.directions) {

                    return (
                        item.info +
                        "\n\nDirections:\n• " +
                        item.directions.join("\n• ")
                    );

                }

                return item.info;

            }

        }


        // ----------------------------------------------
        // LTB3 FLOORS
        // ----------------------------------------------

        if (
            text.includes("ltb3") ||
            text.includes("ltb 3")
        ) {

            if (
                text.includes("ground floor") &&
                window.campusKnowledge &&
                window.campusKnowledge.ltb3GroundFloor
            ) {

                return window.campusKnowledge
                    .ltb3GroundFloor.info;

            }


            if (
                text.includes("first floor") &&
                window.campusKnowledge &&
                window.campusKnowledge.ltb3FirstFloor
            ) {

                return window.campusKnowledge
                    .ltb3FirstFloor.info;

            }


            if (
                text.includes("second floor") &&
                window.campusKnowledge &&
                window.campusKnowledge.ltb3SecondFloor
            ) {

                return window.campusKnowledge
                    .ltb3SecondFloor.info;

            }


            if (
                text.includes("third floor") &&
                window.campusKnowledge &&
                window.campusKnowledge.ltb3ThirdFloor
            ) {

                return window.campusKnowledge
                    .ltb3ThirdFloor.info;

            }


            if (
                text.includes("floor") &&
                window.campusKnowledge &&
                window.campusKnowledge.ltb3Floors
            ) {

                return window.campusKnowledge
                    .ltb3Floors.info;

            }

        }


        // ----------------------------------------------
        // GENERAL KNOWLEDGE
        // ----------------------------------------------

        const result =
            findKnowledge(question);


        if (result && result.info) {

            return result.info;

        }


        // ----------------------------------------------
        // DEFAULT
        // ----------------------------------------------

        return (
            "I’m sorry, I don't have that information yet. " +
            "You can ask me about LTB1, LTB2, LTB3, LTB4, " +
            "the Library, Health Centre, Main Gate, VC Office, " +
            "University leadership, student services and " +
            "other campus information."
        );

    }


    // ==================================================
    // ADD USER MESSAGE
    // ==================================================

    function addUserMessage(message) {

        if (!chatBox) return;


        const div =
            document.createElement("div");


        div.className =
            "message user";


        div.textContent =
            message;


        chatBox.appendChild(div);


        scrollChat();

    }


    // ==================================================
    // ADD BOT MESSAGE
    // ==================================================

    function addBotMessage(message) {

        if (!chatBox) return;


        const div =
            document.createElement("div");


        div.className =
            "message bot";


        div.textContent =
            message;


        chatBox.appendChild(div);


        scrollChat();

    }


    // ==================================================
    // SCROLL
    // ==================================================

    function scrollChat() {

        if (chatBox) {

            chatBox.scrollTop =
                chatBox.scrollHeight;

        }

    }


    // ==================================================
    // SEND MESSAGE
    // ==================================================

    function sendMessage() {

        getElements();


        if (!userInput || !chatBox) {

            console.error(
                "❌ UOK AI: Chat elements not found."
            );

            return;

        }


        const question =
            userInput.value.trim();


        if (!question) {

            return;

        }


        addUserMessage(question);


        userInput.value = "";


        const answer =
            getAnswer(question);


        setTimeout(function () {

            addBotMessage(answer);

            speak(answer);

        }, 250);

    }


    // ==================================================
    // QUICK QUESTIONS
    // ==================================================

    function askQuick(question) {

        getElements();


        if (!userInput) {

            console.error(
                "❌ UOK AI: Input box not found."
            );

            return;

        }


        userInput.value =
            question;


        sendMessage();

    }


    // ==================================================
    // CLEAR CHAT
    // ==================================================

    function clearChat() {

        getElements();


        if (!chatBox) return;


        chatBox.innerHTML = "";


        addBotMessage(
            "Hello again! 👋 I am UOK AI. How can I help you?"
        );

    }


    // ==================================================
    // BACK
    // ==================================================

    function goBack() {

        window.location.href =
            "main-campus.html";

    }


    // ==================================================
    // TEXT TO SPEECH
    // ==================================================

    function speak(text) {

        if (
            !("speechSynthesis" in window)
        ) {

            return;

        }


        try {

            window.speechSynthesis.cancel();


            const speech =
                new SpeechSynthesisUtterance(text);


            speech.lang =
                "en-KE";


            speech.rate =
                0.95;


            speech.pitch =
                1;


            window.speechSynthesis.speak(
                speech
            );

        } catch (error) {

            console.log(
                "UOK AI speech error:",
                error
            );

        }

    }


    // ==================================================
    // VOICE INPUT
    // ==================================================

    function startVoiceInput() {

        getElements();


        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if (!SpeechRecognition) {

            alert(
                "Voice input is not supported by this browser. " +
                "Please use Google Chrome."
            );

            return;

        }


        const recognition =
            new SpeechRecognition();


        recognition.lang =
            "en-KE";


        recognition.continuous =
            false;


        recognition.interimResults =
            false;


        if (status) {

            status.textContent =
                "🎤 Listening...";

        }


        recognition.onresult =
            function (event) {

                const transcript =
                    event.results[0][0].transcript;


                if (userInput) {

                    userInput.value =
                        transcript;

                }


                if (status) {

                    status.textContent =
                        "🟢 UOK AI is ready";

                }

            };


        recognition.onerror =
            function (event) {

                console.log(
                    "Voice recognition error:",
                    event.error
                );


                if (status) {

                    status.textContent =
                        "🟢 UOK AI is ready";

                }

            };


        recognition.onend =
            function () {

                if (status) {

                    status.textContent =
                        "🟢 UOK AI is ready";

                }

            };


        try {

            recognition.start();

        } catch (error) {

            console.log(
                "Voice start error:",
                error
            );

        }

    }


    // ==================================================
    // INITIALIZE
    // ==================================================

    function initialize() {

        getElements();


        console.log(
            "🤖 UOK AI v405 initializing..."
        );


        if (!chatBox) {

            console.error(
                "❌ UOK AI: chatBox not found."
            );

            return;

        }


        if (!userInput) {

            console.error(
                "❌ UOK AI: userInput not found."
            );

            return;

        }


        if (sendBtn) {

            sendBtn.onclick =
                sendMessage;

        }


        if (clearBtn) {

            clearBtn.onclick =
                clearChat;

        }


        if (backBtn) {

            backBtn.onclick =
                goBack;

        }


        if (voiceBtn) {

            voiceBtn.onclick =
                startVoiceInput;

        }


        userInput.onkeydown =
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendMessage();

                }

            };


        if (status) {

            status.textContent =
                "🟢 UOK AI is ready";

        }


        console.log(
            "✅ UOK AI v405 is ready."
        );

    }


    // ==================================================
    // GLOBAL FUNCTIONS
    // ==================================================

    window.sendMessage =
        sendMessage;

    window.clearChat =
        clearChat;

    window.goBack =
        goBack;

    window.askQuick =
        askQuick;

    window.getAnswer =
        getAnswer;

    window.startVoiceInput =
        startVoiceInput;


    // ==================================================
    // START
    // ==================================================

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


})();
