// ===============================
// UNIVERSITY OF KABIANGA
// SMART CAMPUS NAVIGATOR
// MAIN SCRIPT
// ===============================


// ===============================
// OPEN PRINCE AI
// ===============================

function openPrinceAI() {
    window.location.href = "prince-ai.html";
}


// ===============================
// REGISTER SERVICE WORKER
// ===============================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", async () => {

        try {

            await navigator.serviceWorker.register("service-worker.js");

            console.log("✅ Service Worker Registered");

        } catch (err) {

            console.error(
                "❌ Service Worker Registration Failed",
                err
            );

        }

    });

}


// ===============================
// SEARCH VENUES
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");

    if (!searchBtn || !searchBox) return;


    searchBtn.addEventListener("click", () => {

        const place = searchBox.value.trim().toLowerCase();


        if (place === "") {

            alert("Please enter a location.");
            return;

        }


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


        else if (
            place === "library" ||
            place === "university library"
        ) {

            alert("University Library details coming soon.");

        }


        else if (
            place === "administration" ||
            place === "admin"
        ) {

            alert("Administration details coming soon.");

        }


        else {

            alert("Location not found.");

        }

    });

});


// ===============================
// QR SCANNER
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const scanBtn = document.getElementById("scanBtn");

    if (!scanBtn) return;


    scanBtn.addEventListener("click", async () => {

        if (typeof Html5Qrcode === "undefined") {

            alert("QR Scanner library is not loaded.");
            return;

        }


        const qrScanner = new Html5Qrcode("reader");


        try {

            await qrScanner.start(

                { facingMode: "environment" },

                {
                    fps: 10,
                    qrbox: 250
                },

                async (decodedText) => {

                    const scanResult =
                        document.getElementById("scanResult");


                    if (scanResult) {

                        scanResult.innerHTML =
                            "<h3>✅ QR Code Detected</h3>" +
                            "<p><strong>Destination:</strong> " +
                            decodedText +
                            "</p>";

                    }


                    await qrScanner.stop();


                    // If QR code contains a website link,
                    // open it automatically.
                    if (
                        decodedText.startsWith("http://") ||
                        decodedText.startsWith("https://")
                    ) {

                        window.location.href = decodedText;

                    }

                }

            );

        } catch (error) {

            console.error("QR Scanner Error:", error);

            alert(
                "Unable to start camera. Please allow camera permission."
            );

        }

    });

});


// ===============================
// ENABLE NOTIFICATIONS
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

        }

        else {

            alert("Notification permission denied.");

        }

    });

}


// Make available to HTML onclick
window.requestNotificationPermission = requestNotificationPermission;


// ===============================
// LEADERSHIP DIRECTORY
// ===============================

function openLeadershipDirectory() {

    window.location.href = "leadership.html";

}

window.openLeadershipDirectory = openLeadershipDirectory;
