import { db } from "./firebase.js";
import {
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const announcementRef = doc(db, "announcements", "announcement1");

onSnapshot(announcementRef, (docSnap) => {

    if (!docSnap.exists()) return;

    const data = docSnap.data();

    if (Notification.permission === "granted") {

        navigator.serviceWorker.ready.then((registration) => {

            registration.showNotification(data.Title, {
                body: data.Message,
                icon: "logo.jpg",
                badge: "logo.jpg"
            });

        });

    }

});
