importScripts(
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/12.16.0/firebase-messaging-compat.js"
);


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

firebase.initializeApp({

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

});


const messaging = firebase.messaging();


// ==========================================
// BACKGROUND NOTIFICATION
// ==========================================

messaging.onBackgroundMessage(payload => {

    console.log(
        "📩 Background notification received:",
        payload
    );


    const title =
        payload.notification?.title ||
        payload.data?.title ||
        "University of Kabianga";


    const body =
        payload.notification?.body ||
        payload.data?.body ||
        "You have a new campus announcement.";


    const notificationOptions = {

        body: body,

        icon:
            "/kabianga-smart-campus-navigator/logo.jpg",

        badge:
            "/kabianga-smart-campus-navigator/logo.jpg",

        tag:
            payload.data?.announcementId ||
            "uok-announcement",

        renotify: true,

        data: {

            url:
                payload.data?.url ||
                "/kabianga-smart-campus-navigator/announcements.html"

        }

    };


    return self.registration.showNotification(

        title,

        notificationOptions

    );

});


// ==========================================
// NOTIFICATION CLICK
// ==========================================

self.addEventListener(
    "notificationclick",
    event => {

        console.log(
            "🔔 Notification clicked"
        );


        event.notification.close();


        const targetUrl =
            event.notification.data?.url ||
            "/kabianga-smart-campus-navigator/announcements.html";


        event.waitUntil(

            clients.matchAll({

                type: "window",

                includeUncontrolled: true

            })

            .then(clientList => {


                // ==================================
                // OPEN EXISTING UOK TAB
                // ==================================

                for (const client of clientList) {

                    if (
                        client.url.includes(
                            "kabianga-smart-campus-navigator"
                        )
                    ) {

                        return client
                            .navigate(targetUrl)
                            .then(() => client.focus());

                    }

                }


                // ==================================
                // OPEN NEW TAB
                // ==================================

                if (clients.openWindow) {

                    return clients.openWindow(
                        targetUrl
                    );

                }

            })

        );

    }
);
