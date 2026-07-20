function speak(text){

    const message = new SpeechSynthesisUtterance(text);
    message.lang = "en-US";
    message.rate = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);

}


function startPrinceAI(){

    speak("Hello, I am Prince AI. Tell me the place you want to find.");

    startListening();

}


function startListening(){

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        speak("Sorry, your browser does not support voice recognition.");
        return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function(){
        speak("I am listening. Please say your destination.");
    };

    recognition.onresult = function(event){

        const question = event.results[0][0].transcript.toLowerCase();

        console.log("You said:", question);

        answerQuestion(question);

    };

    recognition.onerror = function(event){

        console.log("Voice error:", event.error);
        speak("I could not hear you. Please try again.");

    };

    recognition.start();

}


    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    speak("I am listening. Please tell me your destination.");
recognition.start();


    recognition.onresult = function(event){

        const question = event.results[0][0].transcript.toLowerCase();

        answerQuestion(question);

    };


}


function answerQuestion(question){


    if(question.includes("ltb1")){

        speak("LTB 1 is located near the main lecture block area.");

    }

    else if(question.includes("ltb2")){

        speak("LTB 2 is located next to LTB 1.");

    }

    else if(question.includes("library")){

        speak("The library is located at the academic section of the campus.");

    }

    else if(question.includes("cafeteria") || question.includes("canteen")){

        speak("The cafeteria is located near the student centre.");

    }

    else{

        speak("Sorry, I don't know that location yet. Please try another venue.");

    }

}
