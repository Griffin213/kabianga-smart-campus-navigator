import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",
  authDomain: "uok-smart-campus-navigator.firebaseapp.com",
  projectId: "uok-smart-campus-navigator",
  storageBucket: "uok-smart-campus-navigator.firebasestorage.app",
  messagingSenderId: "465257479615",
  appId: "1:465257479615:web:31620a772eff1b603df50a",
  measurementId: "G-971D6JFQNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore
export { db };
