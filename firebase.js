// ==========================================
// FIREBASE CONFIGURATION
// UNIVERSITY OF KABIANGA SMART CAMPUS
// ==========================================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
    initializeFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";


// ==========================================
// FIREBASE CONFIG
// ==========================================

const firebaseConfig = {

    apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",

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
// INITIALIZE FIREBASE APP
// ==========================================

const app = initializeApp(firebaseConfig);


// ==========================================
// FIRESTORE CONNECTION
// ==========================================

const db = initializeFirestore(app, {

    experimentalForceLongPolling: true

});


// ==========================================
// FIREBASE STORAGE
// Used for announcement photos
// ==========================================

const storage = getStorage(app);


// ==========================================
// DEBUG INFORMATION
// ==========================================

console.log("✅ Firebase App initialized");

console.log("✅ Firestore initialized");

console.log("✅ Firebase Storage initialized");

console.log("🔥 Firestore database:", db);

console.log("📁 Firebase Storage:", storage);


// ==========================================
// EXPORT SERVICES
// ==========================================

export {
    db,
    storage
};
