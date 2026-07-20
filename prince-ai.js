function startPrinceAI(){

    const message = new SpeechSynthesisUtterance(
        "Hello, I am Prince AI. How can I help you find a place on campus?"
    );

    message.lang = "en-US";
    message.rate = 1;
    message.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);

}
