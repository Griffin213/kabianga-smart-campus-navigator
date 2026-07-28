import { db } from "./firebase.js";

alert("1. announcements.js loaded");

alert("2. db = " + db);

console.log(db);
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getMessaging,
  getToken,
  onMessage
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "uok-smart-campus-navigator.firebaseapp.com",
  projectId: "uok-smart-campus-navigator",
  storageBucket: "uok-smart-campus-navigator.firebasestorage.app",
  messagingSenderId: "465257479615",
  appId: "1:465257479615:web:31620a772eff1b603df50a"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    getToken(messaging, {
      vapidKey: "PASTE_YOUR_VAPID_KEY_HERE"
    }).then((token) => {
      console.log("FCM Token:", token);
      alert(token);
    });
  }
});
