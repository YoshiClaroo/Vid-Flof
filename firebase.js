import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANjIecB-LakVfSjbjd-Z3TsDlm0tbXEfU",
    authDomain: "vid-flof.firebaseapp.com",
    projectId: "vid-flof",
    storageBucket: "vid-flof.firebasestorage.app",
    messagingSenderId: "842823438154",
    appId: "1:842823438154:web:0b2a73c5f85e8fe5613bb3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.dbFunctions = {
  saveLink: async (id, data) => await setDoc(doc(db, "links", id), data),
  getLink: async (id) => {
    const docSnap = await getDoc(doc(db, "links", id));
    return docSnap.exists() ? docSnap.data() : null;
  }
};
