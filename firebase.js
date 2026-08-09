import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    initializeFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";


const firebaseConfig = {

    apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",

    authDomain: "uok-smart-campus-navigator.firebaseapp.com",

    projectId: "uok-smart-campus-navigator",

    storageBucket: "uok-smart-campus-navigator.firebasestorage.app",

    messagingSenderId: "465257479615",

    appId: "1:465257479615:web:31620a772eff1b603df50a"

};


const app = initializeApp(firebaseConfig);


// Firestore connection
const db = initializeFirestore(app, {

    experimentalForceLongPolling: true,

    useFetchStreams: false

});


console.log("🔥 Firebase Firestore initialized successfully");


export { db };
