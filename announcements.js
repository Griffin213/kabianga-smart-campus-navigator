import { db } from "./firebase.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

alert("announcements.js loaded");

async function loadAnnouncement() {
    try {
        const docRef = doc(db, "notifications", "welcome");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            alert(JSON.stringify(docSnap.data()));
        } else {
            alert("Document NOT found");
        }
    } catch (error) {
        alert("Error: " + error.message);
    }
}

loadAnnouncement();
