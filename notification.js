import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getMessaging,
  getToken
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",
  authDomain: "uok-smart-campus-navigator.firebaseapp.com",
  projectId: "uok-smart-campus-navigator",
  storageBucket: "uok-smart-campus-navigator.firebasestorage.app",
  messagingSenderId: "465257479615",
  appId: "1:465257479615:web:31620a772eff1b603df50a"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

window.requestNotificationPermission = async function () {
    try {

        const permission = await Notification.requestPermission();

        if (permission !== "granted") {
            alert("Notifications denied.");
            return;
        }

        const registration = await navigator.serviceWorker.register(
            "/kabianga-smart-campus-navigator/firebase-messaging-sw.js"
        );

        const token = await getToken(messaging, {
            vapidKey: "BAvYs2OcE8SqgpOOICDhV5TxIZyTBRerx8G0-lHOJ-00R2P22Sf3SIMnWxY-ct5pD54yq3gNelfbu2V9qlMpE9Q",
            serviceWorkerRegistration: registration
        });

        if (token) {
            alert("FCM Token:\n\n" + token);
            console.log(token);
        } else {
            alert("No FCM token received.");
        }

    } catch (error) {
        alert("Firebase Error:\n" + error.message);
        console.error(error);
    }
};
