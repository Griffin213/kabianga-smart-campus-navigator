import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",
  authDomain: "uok-smart-campus-navigator.firebaseapp.com",
  projectId: "uok-smart-campus-navigator",
  storageBucket: "uok-smart-campus-navigator.firebasestorage.app",
  messagingSenderId: "465257479615",
  appId: "1:465257479615:web:31620a772eff1b603df50a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const notificationRef = ref(db, "notifications");

onValue(notificationRef, (snapshot) => {
    const data = snapshot.val();

    if (data && Notification.permission === "granted") {
        new Notification(data.Title, {
            body: data.Message,
            icon: "logo.jpg"
        });
    }
});

export { app, db };
