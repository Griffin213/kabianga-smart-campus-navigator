// ===============================
// University of Kabianga
// Smart Campus Navigator
// Main Script
// ===============================

// Open Prince AI
function openPrinceAI() {
    window.location.href = "prince-ai.html";
}

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            await navigator.serviceWorker.register("service-worker.js");
            console.log("✅ Service Worker Registered");
        } catch (err) {
            console.error("❌ Service Worker Registration Failed", err);
        }
    });
}

// Search Button
document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");

    if (searchBtn) {

        searchBtn.addEventListener("click", () => {

            const place = searchBox.value.trim().toLowerCase();

            if (place === "ltb1") {
                window.location.href = "ltb1.html";
            }

            else if (place === "ltb2") {
                alert("LTB2 page coming soon.");
            }

            else if (place === "ltb3") {
                alert("LTB3 page coming soon.");
            }

            else if (place === "ltb4") {
                alert("LTB4 page coming soon.");
            }

            else if (place === "") {
                alert("Please enter a location.");
            }

            else {
                alert("Location not found.");
            }

        });

    }

});
// ===============================
// QR Scanner
// ===============================

const scanBtn = document.getElementById("scanBtn");

if (scanBtn) {

    scanBtn.addEventListener("click", () => {

        const qrScanner = new Html5Qrcode("reader");

        qrScanner.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250
            },
            (decodedText) => {

                document.getElementById("scanResult").innerHTML =
                    "<h3>✅ QR Code Detected</h3>" +
                    "<p><strong>Current Location:</strong> " +
                    decodedText +
                    "</p>";

                qrScanner.stop();

            }
        );

    });

}

// ===============================
// Enable Notifications
// ===============================

function requestNotificationPermission() {

    if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
        return;
    }

    Notification.requestPermission().then(permission => {

        if (permission === "granted") {

            navigator.serviceWorker.ready.then(registration => {

                registration.showNotification(
                    "🎓 University of Kabianga",
                    {
                        body: "Notifications enabled successfully.",
                        icon: "logo.jpg",
                        badge: "logo.jpg"
                    }
                );

            });

        } else {

            alert("Notification permission denied.");

        }

    });

}

// Make the function available to your HTML onclick
window.requestNotificationPermission = requestNotificationPermission;
