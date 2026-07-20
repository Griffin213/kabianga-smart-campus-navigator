document.addEventListener("DOMContentLoaded", function () {

    const navigateBtn = document.getElementById("navigateBtn");

    if (navigateBtn) {

        navigateBtn.addEventListener("click", function () {

            const current = document.getElementById("currentLocation").value;
            const destination = document.getElementById("destination").value;

            let message = "";

            if (current === destination) {
                message = "✅ You are already at " + destination + ".";
            } else {
                if(current==="Main Gate" && destination==="LTB1"){

message="📍 Start at Main Gate.<br><br>⬆ Walk straight along the main road.<br><br>🏫 LTB1 will be on your left.<br><br>✅ You have arrived.";

}

else if(current==="Main Gate" && destination==="LTB2"){

message="📍 Start at Main Gate.<br><br>⬆ Walk straight past LTB1.<br><br>🏫 Continue ahead to LTB2.<br><br>✅ You have arrived.";

}

else if(current==="Main Gate" && destination==="LTB3"){

message="📍 Start at Main Gate.<br><br>⬆ Walk to the central open area.<br><br>➡ Turn right towards LTB3.<br><br>✅ You have arrived.";

}

else if(current==="Main Gate" && destination==="LTB4"){

message="📍 Start at Main Gate.<br><br>⬆ Walk through the central area.<br><br>⬅ Turn left towards LTB4.<br><br>✅ You have arrived.";

}

else{

message="📍 Walk from "+current+" to "+destination+".";
}
            }

            document.getElementById("routeResult").innerHTML =
                "<h3>Navigation Instructions</h3><p>" + message + "</p>";

        });

    }

});
// QR Code Scanner

const scanBtn = document.getElementById("scanBtn");

if (scanBtn) {

    scanBtn.addEventListener("click", function () {

        const qrScanner = new Html5Qrcode("reader");

        qrScanner.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250
            },
            function (decodedText) {

                document.getElementById("scanResult").innerHTML =
                    "<h3>✅ QR Code Detected</h3>" +
                    "<p><strong>Current Location:</strong> " + decodedText + "</p>";

                qrScanner.stop();

            },
            function (errorMessage) {
                // Ignore scan errors while searching
            }
        );

    });

}
// Voice Assistant

const voiceBtn = document.getElementById("voiceBtn");

if (voiceBtn) {

    voiceBtn.addEventListener("click", function () {

        const welcome = new SpeechSynthesisUtterance(
            "Welcome to the University of Kabianga Smart Campus Navigation System. Where would you like to go today?"
        );

        speechSynthesis.speak(welcome);

        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function(event){

            const destination = event.results[0][0].transcript.toLowerCase();

            if(destination.includes("ltb1")){

                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(
                        "Opening navigation to Lecture Theatre Block One."
                    )
                );

                window.location.href="ltb1.html";

            }

            else if(destination.includes("ltb2")){

                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(
                        "Opening navigation to Lecture Theatre Block Two."
                    )
                );

                window.location.href="ltb2.html";

            }

            else if(destination.includes("ltb3")){

                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(
                        "Opening navigation to Lecture Theatre Block Three."
                    )
                );

                window.location.href="ltb3.html";

            }

            else if(destination.includes("ltb4")){

                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(
                        "Opening navigation to Lecture Theatre Block Four."
                    )
                );

                window.location.href="ltb4.html";

            }

            else{

                speechSynthesis.speak(
                    new SpeechSynthesisUtterance(
                        "Sorry, I could not find that destination."
                    )
                );

            }

        };

    });

}
