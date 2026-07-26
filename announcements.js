import { db } from "./firebase.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadAnnouncement() {

  try {

    const docRef = doc(db, "notifications", "welcome");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      const data = docSnap.data();

      alert(
        data.title + "\n\n" + data.message
      );

    } else {

      alert("Document not found!");

    }

  } catch (error) {

    alert("Firebase Error:\n" + error.message);
    console.error(error);

  }

}

loadAnnouncement();
