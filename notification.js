import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import {
    getMessaging,
    getToken
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging.js";


import {
    getFirestore,
    doc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {

    apiKey:
        "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",

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


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app =
    initializeApp(firebaseConfig);


const messaging =
    getMessaging(app);


const db =
    getFirestore(app);


// ==========================================
// REQUEST NOTIFICATION PERMISSION
// ==========================================

window.requestNotificationPermission =
    async function () {

        try {

            console.log(
                "🔔 Requesting notification permission..."
            );


            // ==================================
            // CHECK BROWSER SUPPORT
            // ==================================

            if (!("Notification" in window)) {

                alert(
                    "❌ This browser does not support notifications."
                );

                return;

            }


            // ==================================
            // CHECK SERVICE WORKER SUPPORT
            // ==================================

            if (!("serviceWorker" in navigator)) {

                alert(
                    "❌ This browser does not support service workers."
                );

                return;

            }


            // ==================================
            // REQUEST PERMISSION
            // ==================================

            const permission =
                await Notification.requestPermission();


            console.log(
                "🔔 Notification permission:",
                permission
            );


            if (permission !== "granted") {

                alert(
                    "🔕 Notifications were not enabled."
                );

                return;

            }


            // ==================================
            // REGISTER FIREBASE MESSAGING
            // SERVICE WORKER
            // ==================================

            const registration =
                await navigator.serviceWorker.register(

                    "/kabianga-smart-campus-navigator/firebase-messaging-sw.js",

                    {
                        scope:
                            "/kabianga-smart-campus-navigator/"
                    }

                );


            console.log(
                "✅ Firebase messaging service worker registered"
            );


            // ==================================
            // GET FCM TOKEN
            // ==================================

            const token =
                await getToken(

                    messaging,

                    {

                        vapidKey:
                            "BAvYs2OcE8SqgpOOICDhV5TxIZyTBRerx8G0-lHOJ-00R2P22Sf3SIMnWxY-ct5pD54yq3gNelfbu2V9qlMpE9Q",

                        serviceWorkerRegistration:
                            registration

                    }

                );


            if (!token) {

                alert(
                    "❌ Firebase did not return a notification token."
                );

                return;

            }


            console.log(
                "✅ FCM TOKEN:",
                token
            );


            // ==================================
            // SAVE TOKEN TO FIRESTORE
            // ==================================

            await setDoc(

                doc(
                    db,
                    "notificationTokens",
                    token
                ),

                {

                    token:
                        token,

                    active:
                        true,

                    platform:
                        "web",

                    updatedAt:
                        serverTimestamp(),

                    createdAt:
                        serverTimestamp()

                },

                {

                    merge:
                        true

                }

            );


            console.log(
                "✅ Notification token saved to Firestore"
            );


            // ==================================
            // SUCCESS
            // ==================================

            alert(
                "🔔 UoK notifications enabled successfully!\n\nYou will now receive new campus announcements."
            );


        }

        catch (error) {

            console.error(
                "❌ Notification error:",
                error
            );


            alert(

                "❌ Notification setup failed.\n\n" +
                error.message

            );

        }

    };
