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
