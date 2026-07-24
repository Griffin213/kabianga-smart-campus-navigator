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

function openPrinceAI(){

    window.location.href = "prince-ai.html";

}
// =============================
// Register Service Worker
// =============================
if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker.register("service-worker.js")

        .then(function () {

            console.log("✅ Service Worker Registered");

        })

        .catch(function (error) {

            console.log("❌ Service Worker Failed", error);

        });

    });

}
// =============================
// Notification Permission
// =============================

if ("Notification" in window) {

    if (Notification.permission !== "granted") {

        Notification.requestPermission();

    }

}
// =============================
// Smart Timetable Reminder
// =============================

const timetable = [
    {
        unit: "Business Law",
        lecturer: "Dr. Kiptoo",
        venue: "LTB1",
        time: "08:00"
    },
    {
        unit: "Macroeconomics",
        lecturer: "Prof. Maina",
        venue: "LTB2",
        time: "10:00"
    },
    {
        unit: "Human Resource Management",
        lecturer: "Mrs. Chebet",
        venue: "LTB3",
        time: "14:00"
    }
];

function checkClassReminder(){

    const now = new Date();

    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    timetable.forEach(function(cls){

        const parts = cls.time.split(":");

        const classHour = parseInt(parts[0]);
        const classMinute = parseInt(parts[1]);

        if(currentHour === classHour - 1 && currentMinute === classMinute){

            new Notification("📚 Upcoming Class",{

                body:
                cls.unit +
                "\n👨‍🏫 " + cls.lecturer +
                "\n🏫 " + cls.venue +
                "\nStarts in 1 hour."

            });

        }

    });

}

setInterval(checkClassReminder,60000);
function enableNotifications() {

    if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
        return;
    }

    Notification.requestPermission().then(permission => {

        if (permission === "granted") {

            new Notification("University of Kabianga", {
                body: "Notifications have been enabled successfully!",
                icon: "logo.jpg"
            });

        } else {

            alert("Notification permission denied.");

        }

    });

}
function requestNotificationPermission() {

    alert("Current permission: " + Notification.permission);

    if (Notification.permission === "granted") {

        new Notification("🎉 Prince AI", {
            body: "Notifications are already enabled.",
            icon: "logo.jpg"
        });

        return;
    }

    Notification.requestPermission().then(permission => {

        alert("New permission: " + permission);

        if (permission === "granted") {

            new Notification("🎉 Prince AI", {
                body: "Notifications enabled successfully!",
                icon: "logo.jpg"
            });

        } else {

            alert("Permission denied.");

        }

    });

}
