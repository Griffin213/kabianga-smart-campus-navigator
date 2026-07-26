import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJpH9mVVuB6zImuPC5SPlz-ETNpuCsNrY",
  authDomain: "uok-smart-campus-navigator.firebaseapp.com",
  projectId: "uok-smart-campus-navigator",
  storageBucket: "uok-smart-campus-navigator.firebasestorage.app",
  messagingSenderId: "465257479615",
  appId: "1:465257479615:web:31620a772eff1b603df50a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

onSnapshot(collection(db, "notifications"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added" || change.type === "modified") {
      const data = change.doc.data();

      if (Notification.permission === "granted") {
        new Notification(data.Title, {
          body: data.Message,
          icon: "logo.jpg"
        });
      }
    }
  });
});

export { app, db };
