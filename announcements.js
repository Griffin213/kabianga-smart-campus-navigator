// ===============================
// FIREBASE ANNOUNCEMENTS
// UNIVERSITY OF KABIANGA
// ===============================

import { db } from "./firebase.js";

import {
    doc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// Firestore announcement document
const announcementRef = doc(
    db,
    "announcements",
    "announcement1"
);


// Display announcements on the homepage
onSnapshot(announcementRef, (docSnap) => {

    if (!docSnap.exists()) {

        console.log("No announcement found.");
        return;

    }


    const data = docSnap.data();

    console.log("📢 Announcement received:", data);


    // Update homepage announcement section
    const titleElement =
        document.getElementById("announcementTitle");

    const messageElement =
        document.getElementById("announcementMessage");

    const dateElement =
        document.getElementById("announcementDate");


    if (titleElement) {

        titleElement.textContent =
            data.title || "University of Kabianga";

    }


    if (messageElement) {

        messageElement.textContent =
            data.message || "No announcement available.";

    }


    if (dateElement) {

        dateElement.textContent =
            data.date || "Latest Update";

    }


    // Show notification only if permission is granted
    if (
        "Notification" in window &&
        Notification.permission === "granted"
    ) {

        navigator.serviceWorker.ready.then((registration) => {

            registration.showNotification(
                data.title || "University Announcement",
                {
                    body: data.message || "",
                    icon: "logo.jpg",
                    badge: "logo.jpg"
                }
            );

        });

    }

});
