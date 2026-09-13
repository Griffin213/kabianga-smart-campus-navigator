// ===============================
// FIREBASE ANNOUNCEMENTS
// UNIVERSITY OF KABIANGA
// ===============================

import { db } from "./firebase.js";

import {
    collection,
    query,
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// ==========================================
// ANNOUNCEMENTS COLLECTION
// ==========================================

const announcementsQuery = query(
    collection(db, "announcements"),
    orderBy("createdAt", "desc")
);


// ==========================================
// DISPLAY ANNOUNCEMENTS
// ==========================================

onSnapshot(

    announcementsQuery,

    (snapshot) => {

        console.log("📢 Announcements received:", snapshot.size);

        const titleElement =
            document.getElementById("announcementTitle");

        const messageElement =
            document.getElementById("announcementMessage");

        const dateElement =
            document.getElementById("announcementDate");

        const imageContainer =
            document.getElementById("announcementImages");


        // No announcements available
        if (snapshot.empty) {

            if (titleElement) {
                titleElement.textContent =
                    "No Announcements";
            }

            if (messageElement) {
                messageElement.textContent =
                    "No announcement available at the moment.";
            }

            if (dateElement) {
                dateElement.textContent =
                    "Latest Update";
            }

            if (imageContainer) {
                imageContainer.innerHTML = "";
            }

            return;

        }


        // Get the latest announcement
        const latestDoc = snapshot.docs[0];

        const data = latestDoc.data();

        console.log("📢 Latest announcement:", data);


        // ======================================
        // UPDATE TITLE
        // ======================================

        if (titleElement) {

            titleElement.textContent =
                data.title || "University of Kabianga";

        }


        // ======================================
        // UPDATE MESSAGE
        // ======================================

        if (messageElement) {

            messageElement.textContent =
                data.message || "No announcement available.";

        }


        // ======================================
        // UPDATE DATE
        // ======================================

        if (dateElement) {

            let announcementDate = "Latest Update";


            if (data.createdAt && data.createdAt.toDate) {

                announcementDate =
                    data.createdAt.toDate().toLocaleString();

            } else if (data.time) {

                announcementDate =
                    new Date(data.time).toLocaleString();

            }


            dateElement.textContent =
                announcementDate;

        }


        // ======================================
        // DISPLAY ANNOUNCEMENT PHOTOS
        // ======================================

        if (imageContainer) {

            imageContainer.innerHTML = "";


            if (
                data.photos &&
                Array.isArray(data.photos) &&
                data.photos.length > 0
            ) {


                data.photos.forEach((photoURL) => {


                    const image =
                        document.createElement("img");


                    image.src = photoURL;

                    image.alt =
                        "University Announcement Photo";

                    image.className =
                        "announcement-photo";


                    imageContainer.appendChild(image);

                });

            }

        }


        // ======================================
        // NOTIFICATION
        // ======================================

        if (
            "Notification" in window &&
            Notification.permission === "granted"
        ) {

            navigator.serviceWorker.ready.then((registration) => {

                registration.showNotification(

                    data.title ||
                    "University Announcement",

                    {

                        body:
                            data.message || "",

                        icon: "logo.jpg",

                        badge: "logo.jpg"

                    }

                );

            });

        }

    },


    (error) => {

        console.error(
            "🔥 Error loading announcements:",
            error
        );

    }

);
