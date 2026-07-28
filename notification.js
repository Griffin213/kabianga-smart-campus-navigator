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
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/kabianga-smart-campus-navigator/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Messaging Service Worker registered");
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    getToken(messaging, {
      vapidKey: BAvYs2OcE8SqgpOOICDhV5TxIZyTBRerx8G0-lHOJ-00R2P22Sf3SIMnWxY-ct5pD54yq3gNelfbu2V9qlMpE9Q
    }).then((token) => {
      console.log("FCM Token:", token);
      alert(token);
    });
  }
});
