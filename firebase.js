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


/*
   IMPORTANT:
   We are NOT using getFirestore().
   Long polling helps Firestore work more reliably
   on some mobile networks and GitHub Pages.
*/

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
});


export { db };
