import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    getMessaging,
    getToken
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain:
        "uok-smart-campus-navigator.firebaseapp.com",

    projectId:
        "uok-smart-campus-navigator",

    storageBucket:
        "uok-smart-campus-navigator.firebasestorage.app",

    messagingSenderId:
        "465257479615",

    appId:
        "1:465257479615:web:31620a772eff1b603df50a"
};


const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

const db = getFirestore(app);


window.requestNotificationPermission = async function () {

    try {

        if (!("Notification" in window)) {

            alert("This browser does not support notifications.");

            return;
        }


        const permission =
            await Notification.requestPermission();


        if (permission !== "granted") {

            alert("Notifications were not allowed.");

            return;
        }


        const registration =
            await navigator.serviceWorker.register(
                "/kabianga-smart-campus-navigator/firebase-messaging-sw.js"
            );


        const token = await getToken(messaging, {

            vapidKey:
                "YOUR_VAPID_KEY",

            serviceWorkerRegistration:
                registration

        });


        if (!token) {

            alert("Unable to generate notification token.");

            return;
        }


        console.log("✅ FCM Token:", token);


        // Save device token
        await addDoc(
            collection(db, "notificationTokens"),
            {

                token: token,

                platform: "web",

                createdAt:
                    serverTimestamp(),

                active: true

            }
        );


        alert(
            "🔔 Notifications enabled successfully!"
        );


    } catch (error) {

        console.error(
            "❌ Notification error:",
            error
        );

        alert(
            "Notification Error:\n" +
            error.message
        );

    }

};
