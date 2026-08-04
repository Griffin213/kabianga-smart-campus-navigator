import { db } from "./firebase.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const announcementRef = doc(db, "announcements", "latest");

onSnapshot(announcementRef, (docSnap) => {

    if (!docSnap.exists()) return;

    const data = docSnap.data();

    document.getElementById("announcementTitle").textContent = data.title;
    document.getElementById("announcementMessage").textContent = data.message;
    document.getElementById("announcementDate").textContent =
        new Date(data.time).toLocaleString();

    if (Notification.permission === "granted") {

        navigator.serviceWorker.ready.then((registration) => {

            registration.showNotification(data.title, {
                body: data.message,
                icon: "logo.jpg",
                badge: "logo.jpg"
            });

        });

    }

});
