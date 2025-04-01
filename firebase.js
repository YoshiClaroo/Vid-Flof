import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANjIecB-LakVfSjbjd-Z3TsDlm0tbXEfU",
  authDomain: "vid-flof.firebaseapp.com",
  projectId: "vid-flof",
  storageBucket: "vid-flof.firebasestorage.app",
  messagingSenderId: "842823438154",
  appId: "1:842823438154:web:0b2a73c5f85e8fe5613bb3",
  measurementId: "G-6X1PK66KNQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funciones para usar en tu proyecto
window.dbFunctions = {
  saveLink: async (id, data) => {
    await setDoc(doc(db, "links", id), data);
  },
  getLink: async (id) => {
    const docSnap = await getDoc(doc(db, "links", id));
    return docSnap.exists() ? docSnap.data() : null;
  }
};
