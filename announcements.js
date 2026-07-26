import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

async function loadAnnouncement() {

  const querySnapshot = await getDocs(collection(db, "notifications"));

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    alert(
      "📢 " + data.title +
      "\n\n" +
      data.message
    );

  });

}

loadAnnouncement();
