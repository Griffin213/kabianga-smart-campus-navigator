alert("Prince AI JavaScript loaded");
// ========================================
// PRINCE AI 2.0
// University of Kabianga
// ========================================


// ========================================
// HOME
// ========================================

function goHome(){

    window.location.href = "index.html";

}


// ========================================
// NEW CHAT
// ========================================

function newChat(){

    const chatBox =
        document.getElementById("chatBox");

    chatBox.innerHTML = `

        <div class="bot-message">

            👋 Hello again!

            <br><br>

            I am <strong>Prince AI</strong> 🤖.

            <br><br>

            How can I help you?

        </div>

    `;

}


// ========================================
// SEND MESSAGE
// ========================================

function sendMessage(){

    const input =
        document.getElementById("userMessage");

    const chatBox =
        document.getElementById("chatBox");


    const message =
        input.value.trim();


    // Nothing typed

    if(message === ""){

        return;

    }


    // Show user's message

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.innerHTML =
        escapeHTML(message);

    chatBox.appendChild(
        userMessage
    );


    // Clear input

    input.value = "";


    // Scroll down

    chatBox.scrollTop =
        chatBox.scrollHeight;


    // Show typing

    const typing =
        document.createElement("div");

    typing.className =
        "bot-message";

    typing.id =
        "typing";

    typing.innerHTML =
        "🤖 Prince AI is thinking...";

    chatBox.appendChild(
        typing
    );


    setTimeout(() => {

        typing.remove();

        const answer =
            getPrinceAIAnswer(message);


        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";

        botMessage.innerHTML =
            answer;


        chatBox.appendChild(
            botMessage
        );


        chatBox.scrollTop =
            chatBox.scrollHeight;

    }, 500);

}


// ========================================
// PRINCE AI ANSWERS
// ========================================

function getPrinceAIAnswer(message){

    const question =
        message.toLowerCase().trim();


    // LTB1

    if(
        question.includes("ltb1") ||
        question.includes("lecture theatre 1") ||
        question.includes("lecture theater 1")
    ){

        return `

        📍 <strong>LTB1</strong>

        <br><br>

        LTB1 is one of the lecture facilities
        at the University of Kabianga.

        <br><br>

        🗺️ I can help you navigate there
        once the campus route information
        is configured.

        `;

    }


    // LTB2

    if(
        question.includes("ltb2") ||
        question.includes("lecture theatre 2")
    ){

        return `

        📍 <strong>LTB2</strong>

        <br><br>

        LTB2 is one of the lecture facilities
        at the University of Kabianga.

        `;

    }


    // LTB3

    if(
        question.includes("ltb3") ||
        question.includes("lecture theatre 3")
    ){

        return `

        📍 <strong>LTB3</strong>

        <br><br>

        LTB3 is one of the lecture facilities
        at the University of Kabianga.

        `;

    }


    // LTB4

    if(
        question.includes("ltb4") ||
        question.includes("lecture theatre 4")
    ){

        return `

        📍 <strong>LTB4</strong>

        <br><br>

        LTB4 is one of the lecture facilities
        at the University of Kabianga.

        `;

    }


    // GREETING

    if(
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ){

        return `

        👋 Hello!

        <br><br>

        I'm <strong>Prince AI</strong>,
        your University of Kabianga
        Smart Campus Assistant. 🤖

        <br><br>

        What can I help you find?

        `;

    }


    // WHO ARE YOU

    if(
        question.includes("who are you") ||
        question.includes("what are you")
    ){

        return `

        🤖 I am <strong>Prince AI</strong>.

        <br><br>

        I am the Smart Campus Assistant
        for the University of Kabianga.

        <br><br>

        I can help students find places,
        understand campus information and
        navigate around the university.

        `;

    }


    // UOK

    if(
        question.includes("university of kabianga") ||
        question.includes("uok")
    ){

        return `

        🎓 <strong>University of Kabianga</strong>

        <br><br>

        Welcome to UOK! 🤝

        <br><br>

        I can help you explore the campus,
        find facilities and access useful
        university information.

        `;

    }


    // MAP

    if(
        question.includes("map") ||
        question.includes("campus map")
    ){

        return `

        🗺️ I can help you with the
        University of Kabianga campus map.

        <br><br>

        <button
            onclick="window.location.href='campus-map.html'"
            style="
            padding:10px 15px;
            border:none;
            border-radius:8px;
            background:#0b5ed7;
            color:white;
            cursor:pointer;
            ">

            🗺️ Open Campus Map

        </button>

        `;

    }


    // NAVIGATION

    if(
        question.includes("where") ||
        question.includes("find") ||
        question.includes("locate") ||
        question.includes("take me")
    ){

        return `

        📍 I can help you find that place.

        <br><br>

        Try telling me the exact
        building or facility, for example:

        <br><br>

        • LTB1

        <br>

        • LTB2

        <br>

        • Library

        <br>

        • Administration

        `;

    }


    // HELP

    if(
        question.includes("help") ||
        question.includes("what can you do")
    ){

        return `

        🤖 <strong>Here's what I can help with:</strong>

        <br><br>

        📍 Campus locations

        <br>
        🏢 Buildings

        <br>
        📚 Lecture halls

        <br>
        🗺️ Campus map

        <br>
        🎓 University information

        <br>
        📅 Student information

        <br><br>

        Just ask me a question!

        `;

    }


    // DEFAULT

    return `

        🤔 I'm still learning about that.

        <br><br>

        Try asking me about:

        <br>

        📍 LTB1

        <br>

        📍 LTB2

        <br>

        🗺️ Campus map

        <br>

        🎓 University of Kabianga

        <br>

        🤖 What can you do?

    `;

}


// ========================================
// VOICE ASSISTANT
// ========================================

function startPrinceAI(){

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if(!SpeechRecognition){

        alert(
            "Your browser does not support voice recognition."
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


    const voiceBtn =
        document.getElementById("voiceBtn");


    voiceBtn.innerHTML =
        "🔴";


    recognition.start();


    recognition.onresult =
        function(event){

            const spokenText =
                event.results[0][0].transcript;


            document.getElementById(
                "userMessage"
            ).value = spokenText;


            voiceBtn.innerHTML =
                "🎤";


            sendMessage();

        };


    recognition.onerror =
        function(){

            voiceBtn.innerHTML =
                "🎤";

        };


    recognition.onend =
        function(){

            voiceBtn.innerHTML =
                "🎤";

        };

}


// ========================================
// ENTER KEY
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const input =
            document.getElementById(
                "userMessage"
            );


        if(input){

            input.addEventListener(
                "keydown",
                function(event){

                    if(
                        event.key === "Enter"
                    ){

                        event.preventDefault();

                        sendMessage();

                    }

                }
            );

        }

    }
);


// ========================================
// SECURITY
// ========================================

function escapeHTML(text){

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


// ========================================
// MAKE FUNCTIONS AVAILABLE
// ========================================

window.goHome =
    goHome;

window.newChat =
    newChat;

window.sendMessage =
    sendMessage;

window.startPrinceAI =
    startPrinceAI;
