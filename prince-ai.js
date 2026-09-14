/* =========================================================
   PRINCE AI
   UNIVERSITY OF KABIANGA SMART CAMPUS NAVIGATOR

   CLEAN VERSION 100
   Works independently without external dependencies.
========================================================= */

"use strict";

/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let recognition = null;
let isListening = false;

/* =========================================================
   CAMPUS INFORMATION
========================================================= */

const campusKnowledge = [
    {
        keywords: [
            "ltb1",
            "lecture teaching block 1",
            "lecture theatre block 1"
        ],
        answer: "📍 LTB1 is one of the Lecture and Teaching Blocks at the University of Kabianga. From the Main Gate, follow the main campus road and LTB1 is located along the route."
    },
    {
        keywords: [
            "ltb2",
            "lecture teaching block 2",
            "lecture theatre block 2"
        ],
        answer: "📍 LTB2 is a Lecture and Teaching Block at the University of Kabianga. It is located further along the main campus route after LTB1."
    },
    {
        keywords: [
            "ltb3",
            "lecture teaching block 3",
            "lecture theatre block 3"
        ],
        answer: "📍 LTB3 is a major academic and administrative building at the University of Kabianga. It contains lecture halls, offices, and university facilities."
    },
    {
        keywords: [
            "ltb4",
            "lecture teaching block 4",
            "lecture theatre block 4"
        ],
        answer: "📍 LTB4 is one of the Lecture and Teaching Blocks at the University of Kabianga. It is located within the central campus area."
    },
    {
        keywords: [
            "library",
            "university library",
            "books"
        ],
        answer: "📚 The University Library provides learning resources, research materials, and quiet study spaces for students and staff."
    },
    {
        keywords: [
            "cafeteria",
            "canteen",
            "food",
            "mess",
            "restaurant"
        ],
        answer: "🍽️ The University cafeteria provides meal services and refreshments for students and staff near the residential hostels."
    },
    {
        keywords: [
            "vice chancellor",
            "vc",
            "who is the vc",
            "university boss"
        ],
        answer: "👨‍💼 The Vice-Chancellor of the University of Kabianga is Prof. Erick Koech, Ph.D., MBS."
    },
    {
        keywords: [
            "dvc",
            "academic dvc",
            "dvc academic",
            "student affairs"
        ],
        answer: "👨‍💼 The Deputy Vice-Chancellor responsible for Academic and Student Affairs is Prof. Dr. Fredrick Nyongesa Kassilly."
    },
    {
        keywords: [
            "research",
            "planning",
            "planning research",
            "research development"
        ],
        answer: "🔬 Planning, Research, and Development is headed by Prof. Maurice Owino Oduor."
    },
    {
        keywords: [
            "registrar academic",
            "academic registrar"
        ],
        answer: "🏛️ The Registrar responsible for Academic Affairs is Dr. Cecilia Sang."
    },
    {
        keywords: [
            "registrar administration",
            "administration registrar"
        ],
        answer: "🏛️ The Registrar responsible for Administration is Mr. Peter K. Kimalel."
    },
    {
        keywords: [
            "dean of students",
            "student dean",
            "dean students"
        ],
        answer: "🎓 The Dean of Students is Dr. Peter Ngugi."
    },
    {
        keywords: [
            "ict director",
            "director ict",
            "ict",
            "information technology"
        ],
        answer: "💻 The Director of ICT is Mr. Geoffrey Sowek."
    },
    {
        keywords: [
            "finance officer",
            "finance",
            "accounts"
        ],
        answer: "💰 The Finance Officer is CPA Willy Koech."
    },
    {
        keywords: [
            "main gate",
            "gate",
            "entrance"
        ],
        answer: "🚪 The Main Gate is the primary entrance to the University of Kabianga campus and serves as the starting baseline for navigation."
    },
    {
        keywords: [
            "school of business",
            "business school"
        ],
        answer: "🎓 The School of Business administrative offices and lecture halls are situated on the 1st Floor of LTB3."
    },
    {
        keywords: [
            "student portal",
            "portal"
        ],
        answer: "🎓 The Student Portal enables online course registration, fee status tracking, and examination result access."
    },
    {
        keywords: [
            "register units",
            "unit registration",
            "units"
        ],
        answer: "📚 Course registration must be completed via the official University of Kabianga student portal during designated registration windows."
    },
    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "good morning",
            "good afternoon",
            "good evening"
        ],
        answer: "👋 Hello! I am Prince AI, your University of Kabianga Smart Campus Assistant. How can I help you today?"
    },
    {
        keywords: [
            "who are you",
            "what are you",
            "your name"
        ],
        answer: "🤖 I am Prince AI, the intelligent virtual assistant designed for the University of Kabianga Smart Campus Navigator."
    },
    {
        keywords: [
            "thank you",
            "thanks",
            "thank"
        ],
        answer: "You're welcome! 😊 I am always ready to help you navigate the University of Kabianga."
    }
];

/* =========================================================
   LTB3 DETAILED INFORMATION
========================================================= */

const ltb3Information = {
    "ground floor": [
        "Dean, School of Education",
        "HOD Curriculum & Instruction",
        "HOD Psychology & Foundations",
        "LH1 (Lecture Hall 1)",
        "LH2 (Lecture Hall 2)"
    ],
    "first floor": [
        "Senate Chamber",
        "LH3 (Lecture Hall 3)",
        "Micro Teaching Lab",
        "School of Business Offices",
        "Finance Office",
        "Dean, School of Business Office",
        "HODs Office, School of Business"
    ],
    "second floor": [
        "Director of Gender Office",
        "LH5 (Lecture Hall 5)",
        "LH6 (Lecture Hall 6)",
        "Director of Postgraduate Studies Office"
    ],
    "third floor": [
        "LH7 (Lecture Hall 7)",
        "LH8 (Lecture Hall 8)"
    ]
};

/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}

function showStatus(message) {
    const status = getElement("status");
    if (status) {
        status.textContent = message;
    }
}

function stripHTML(text) {
    const temp = document.createElement("div");
    temp.innerHTML = text;
    return temp.textContent || temp.innerText || "";
}

/* =========================================================
   CHAT UI RENDERING
========================================================= */

function addUserMessage(message) {
    const chatBox = getElement("chatBox");
    if (!chatBox) return;

    const div = document.createElement("div");
    div.className = "message user-message";
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    const chatBox = getElement("chatBox");
    if (!chatBox) return;

    const div = document.createElement("div");
    div.className = "message bot-message";
    div.innerHTML = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;

    speakPrinceAI(stripHTML(message));
}

/* =========================================================
   KNOWLEDGE SEARCH & NAVIGATION
========================================================= */

function getLTB3Information() {
    let answer = "<strong>🏢 LTB3 Building Layout</strong><br><br>";

    answer += "<strong>Ground Floor:</strong><br>";
    ltb3Information["ground floor"].forEach(item => {
        answer += "• " + item + "<br>";
    });

    answer += "<br><strong>First Floor:</strong><br>";
    ltb3Information["first floor"].forEach(item => {
        answer += "• " + item + "<br>";
    });

    answer += "<br><strong>Second Floor:</strong><br>";
    ltb3Information["second floor"].forEach(item => {
        answer += "• " + item + "<br>";
    });

    answer += "<br><strong>Third Floor:</strong><br>";
    ltb3Information["third floor"].forEach(item => {
        answer += "• " + item + "<br>";
    });

    return answer;
}

function navigationAnswer(question) {
    let destination = "";

    if (question.includes("ltb1")) destination = "LTB1, University of Kabianga";
    else if (question.includes("ltb2")) destination = "LTB2, University of Kabianga";
    else if (question.includes("ltb3")) destination = "LTB3, University of Kabianga";
    else if (question.includes("ltb4")) destination = "LTB4, University of Kabianga";
    else if (question.includes("library")) destination = "University Library, University of Kabianga";
    else if (question.includes("gate") || question.includes("entrance")) destination = "Main Gate, University of Kabianga";

    if (!destination) {
        return `📍 I can help you navigate to LTB1, LTB2, LTB3, LTB4, the Library, or the Main Gate.<br><br>Example: <strong>Where is LTB3?</strong>`;
    }

    const mapsURL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(destination);

    return `📍 <strong>${destination}</strong><br><br>` +
           `Use external mapping for detailed GPS positioning:<br><br>` +
           `<a href="${mapsURL}" target="_blank" rel="noopener noreferrer" ` +
           `style="display:inline-block; background:#0b5ed7; color:white; padding:8px 14px; border-radius:6px; text-decoration:none;">` +
           `🗺️ Open in Google Maps</a>`;
}

function findKnowledgeAnswer(question) {
    const q = question.toLowerCase().trim();

    if (!q) {
        return "Please type a question first.";
    }

    // Detailed floor/office search for LTB3
    if (q.includes("ltb3") && (q.includes("floor") || q.includes("office") || q.includes("room") || q.includes("inside") || q.includes("contains"))) {
        return getLTB3Information();
    }

    // Keyword matching engine
    for (let i = 0; i < campusKnowledge.length; i++) {
        const item = campusKnowledge[i];
        for (let j = 0; j < item.keywords.length; j++) {
            if (q.includes(item.keywords[j])) {
                return item.answer;
            }
        }
    }

    // Generic location query fallback
    if (q.includes("where") || q.includes("find") || q.includes("locate") || q.includes("direction") || q.includes("navigate")) {
        return navigationAnswer(q);
    }

    // Fallback message
    return `🤖 I don't have a verified answer for that query yet.<br><br>` +
           `Try asking about:<br>` +
           `• LTB1, LTB2, LTB3, or LTB4<br>` +
           `• University Library or Cafeteria<br>` +
           `• Vice Chancellor or DVC Academic Affairs<br>` +
           `• Dean of Students or ICT Services`;
}

/* =========================================================
   CORE CONTROLLER
========================================================= */

function sendMessage() {
    const input = getElement("userMessage");
    if (!input) {
        alert("Prince AI input box was not found.");
        return;
    }

    const message = input.value.trim();
    if (!message) {
        showStatus("Please type a question.");
        input.focus();
        return;
    }

    addUserMessage(message);
    input.value = "";
    showStatus("🤖 Prince AI is thinking...");

    setTimeout(() => {
        const answer = findKnowledgeAnswer(message);
        addBotMessage(answer);
        showStatus("🟢 Prince AI is ready.");
    }, 250);
}

/* =========================================================
   SPEECH SYNTHESIS & RECOGNITION
========================================================= */

function speakPrinceAI(text) {
    if (!("speechSynthesis" in window)) return;

    try {
        window.speechSynthesis.cancel();
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "en-KE";
        speech.rate = 0.95;
        speech.pitch = 1;
        speech.volume = 1;
        window.speechSynthesis.speak(speech);
    } catch (error) {
        console.log("Speech synthesis error:", error);
    }
}

function setupVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        recognition = null;
        showStatus("🟢 Text chat ready. Speech recognition is unsupported by this browser.");
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = "en-KE";

    recognition.onstart = function() {
        isListening = true;
        showStatus("🎤 Listening... Speak into your microphone.");
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const input = getElement("userMessage");
        if (input) {
            input.value = transcript;
        }
        isListening = false;
        showStatus("🟢 Voice received. Processing...");
        sendMessage();
    };

    recognition.onerror = function(event) {
        isListening = false;
        if (event.error === "not-allowed") {
            showStatus("🎤 Microphone access denied. Check browser permissions.");
        } else if (event.error === "no-speech") {
            showStatus("🎤 No speech detected. Click microphone to try again.");
        } else {
            showStatus("🎤 Speech recognition error. Use text input.");
        }
    };

    recognition.onend = function() {
        isListening = false;
    };
}

function startPrinceAI() {
    if (!recognition) {
        setupVoiceRecognition();
    }

    if (!recognition) {
        alert("Voice recognition is not supported in this browser. Please use text chat.");
        return;
    }

    if (isListening) {
        try {
            recognition.stop();
        } catch (error) {
            console.log(error);
        }
        return;
    }

    try {
        recognition.start();
    } catch (error) {
        console.log("Could not start microphone:", error);
        showStatus("🎤 Could not start microphone. Try again.");
    }
}

/* =========================================================
   SESSION & DOM MANAGEMENT
========================================================= */

function newChat() {
    const chatBox = getElement("chatBox");
    if (!chatBox) return;

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    chatBox.innerHTML = `
        <div class="message bot-message">
            👋 Hello! I am <strong>Prince AI</strong>.<br><br>
            Chat session refreshed. How can I assist you with the campus today?
        </div>
    `;

    showStatus("🟢 Prince AI is ready.");
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No previous page found in navigation history.");
    }
}

/* =========================================================
   INITIALIZATION & EVENT LISTENERS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Button bindings
    const sendBtn = getElement("sendBtn");
    if (sendBtn) sendBtn.addEventListener("click", sendMessage);

    const voiceBtn = getElement("voiceBtn");
    if (voiceBtn) voiceBtn.addEventListener("click", startPrinceAI);

    const newChatBtn = getElement("newChatBtn");
    if (newChatBtn) newChatBtn.addEventListener("click", newChat);

    const backBtn = getElement("backBtn");
    if (backBtn) backBtn.addEventListener("click", goBack);

    // Enter key execution
    const input = getElement("userMessage");
    if (input) {
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        });
    }

    // Quick action buttons execution
    const quickButtons = document.querySelectorAll(".quick-btn");
    quickButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const question = btn.getAttribute("data-question");
            if (question) {
                const userMsgInput = getElement("userMessage");
                if (userMsgInput) userMsgInput.value = question;
                sendMessage();
            }
        });
    });

    // Initialize voice subsystem
    setupVoiceRecognition();
});
       
