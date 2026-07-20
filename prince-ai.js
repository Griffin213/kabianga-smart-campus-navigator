// ===============================
// PRINCE AI
// University of Kabianga
// ===============================

function speak(text){

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-KE";

    speech.onend = startListening;

    speechSynthesis.speak(speech);

}

function startPrinceAI(){

    const hour = new Date().getHours();

    let greeting="";

    if(hour<12){

        greeting="Good morning";

    }else if(hour<18){

        greeting="Good afternoon";

    }else{

        greeting="Good evening";

    }

    speak(
        greeting +
        ". Welcome to the University of Kabianga. I am Prince AI, your personal campus assistant. How may I help you today?"
    );

}

function startListening(){

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if(!SpeechRecognition){

        alert("Speech Recognition is not supported.");

        return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang="en-KE";

    recognition.start();

    recognition.onresult=function(event){

        const command =
        event.results[0][0].transcript.toLowerCase();

        answerQuestion(command);

    };

}
function answerQuestion(command){

    for(const key in campusKnowledge){

        if(command.includes(key)){

            const place = campusKnowledge[key];

            speak(place.response);

            if(place.destination){

                setTimeout(function(){

                    window.location.href =
                    "campus-map.html?destination=" + place.destination;

                },3000);

            }

            return;

        }

    }

    speak("Sorry, I don't have information about that location yet. My campus database is still being updated.");

}


    else if(command.includes("ltb2")){

        speak("Lecture Theatre Block Two is available. Opening navigation.");

        window.location.href="campus-map.html?destination=LTB2";

    }

    else if(command.includes("library")){

        speak("The library information has not been added yet.");

    }

    else if(command.includes("human resource")){

        speak("The Human Resource Department will be added to my campus database soon.");

    }

    else{

        speak("Sorry. I do not know that location yet. I am still learning the University of Kabianga.");

    }

}
