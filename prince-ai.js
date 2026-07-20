// ================================
// PRINCE AI
// University of Kabianga
// ================================

function speak(text) {

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    speechSynthesis.speak(speech);

}

function startPrinceAI() {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "Good morning.";

    } else if (hour < 18) {

        greeting = "Good afternoon.";

    } else {

        greeting = "Good evening.";

    }

    speak(
        greeting +
        " Welcome to the University of Kabianga. I am Prince AI, your personal campus assistant. How may I help you today?"
    );

}
