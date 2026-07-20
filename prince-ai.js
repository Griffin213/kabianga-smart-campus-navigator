console.log(campusKnowledge);
let chatMemory = [];
function speak(text){

    const message = new SpeechSynthesisUtterance(text);
    message.lang = "en-US";
    message.rate = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(message);

}


// Voice button
function startPrinceAI(){

    speak("Hello, I am Prince AI. Tell me the place you want to find.");

    startListening();

}


// Voice listening
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



// Voice answers
function answerQuestion(question){

    if(question.includes("ltb1")){

        speak("I do not have the exact direction for LTB 1 yet, but I can help you once the campus map is added.");

    }

    else if(question.includes("ltb2")){

        speak("I do not have the exact direction for LTB 2 yet.");

    }

    else if(question.includes("library")){

        speak("I can help you locate the library once the campus information is fully added.");

    }

    else if(question.includes("cafeteria") || question.includes("canteen")){

        speak("The cafeteria information will be available after adding campus locations.");

    }

    else{

        speak("Sorry, I am still learning about the campus. Please try another question.");

    }

}



// Text chat
function sendMessage(){

    let input = document.getElementById("userMessage");

    let message = input.value.trim();


    if(message === ""){

        return;

    }


    addMessage(message, "user-message");
chatMemory.push({
    role: "user",
    text: message
});

    input.value = "";


    // Typing indicator
    let typing = document.createElement("div");

    typing.className = "ai-message";

    typing.id = "typing";

    typing.innerHTML = "Prince AI is typing...";

    document.getElementById("chatBox").appendChild(typing);



    setTimeout(function(){


        document.getElementById("typing").remove();


        let reply = princeReply(message.toLowerCase());


        addMessage(reply, "ai-message");
chatMemory.push({
    role: "ai",
    text: reply
});

        speak(reply);


    },1500);


}



// Add messages to chat box
function addMessage(text, className){

    let chatBox = document.getElementById("chatBox");

    let messageDiv = document.createElement("div");

    messageDiv.className = className;

    messageDiv.innerHTML = text;


    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

}



// Prince AI brain

function princeReply(message){

    // Search campus knowledge
    for(let place in campusKnowledge){

        if(message.includes(place)){

            return campusKnowledge[place].name + ": " + campusKnowledge[place].info;

        }

    }


    if(message.includes("hello") || message.includes("hi")){

        return "Hello 👋. I am Prince AI, your University of Kabianga smart campus assistant.";

    }


    else if(message.includes("who are you")){

        return "I am Prince AI, created to help students navigate the campus and access information.";

    }


    else if(message.includes("help")){

        return "I can help you with campus locations, facilities, and navigation information.";

    }


    else if(message.includes("thank")){

        return "You are welcome 😊. I am always ready to help.";

    }


    else{

        return "I am still learning about the University of Kabianga campus. Please ask me about a place or facility.";

    }

}

    else if(message.includes("who are you")){

        return "I am Prince AI, created to help students navigate the campus and find information easily.";

    }


    else if(message.includes("help")){

        return "I can help you with campus navigation, venues, and student information.";

    }


    else if(message.includes("thank")){

        return "You are welcome. I am always ready to help.";

    }


    else if(message.includes("name")){

        return "My name is Prince AI.";

    }


    else{

        return "I am still learning. More campus information will be added soon.";

    }

}
function goHome(){

    window.location.href = "index.html";

}
