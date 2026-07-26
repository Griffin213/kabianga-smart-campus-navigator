import { db } from "./firebase.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

alert("Firebase announcement script started");

async function loadAnnouncement() {
  try {
    const snap = await getDoc(doc(db, "notifications", "welcome"));

    if (snap.exists()) {
      alert(JSON.stringify(snap.data()));
    } else {
      alert("Document not found");
    }
  } catch (e) {
    alert("ERROR:\n" + e.message);
    console.error(e);
  }
}

loadAnnouncement();
