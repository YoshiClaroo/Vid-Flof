import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC42OFPPU85yaIKF42a1MTUKux5lYrqXVs",
  authDomain: "video-pop-2ff08.firebaseapp.com",
  projectId: "video-pop-2ff08",
  storageBucket: "video-pop-2ff08.firebasestorage.app",
  messagingSenderId: "1014152964865",
  appId: "1:1014152964865:web:5c565d26f2aa89642f8900"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.dbFunctions = {
  saveLink: async (id, data) => await setDoc(doc(db, "links", id), data),
  getLink: async (id) => {
    const docSnap = await getDoc(doc(db, "links", id));
    return docSnap.exists() ? docSnap.data() : null;
  }
};
