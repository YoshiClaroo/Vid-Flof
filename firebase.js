import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANjIecB-LakVfSjbjd-Z3TsDlm0tbXEfU",
  authDomain: "vid-flof.firebaseapp.com",
  projectId: "vid-flof",
  storageBucket: "vid-flof.appspot.com",
  messagingSenderId: "842823438154",
  appId: "1:842823438154:web:0b2a73c5f85e8fe5613bb3"
};

// Inicialización con verificación
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase conectado correctamente"); // Verifica esto en la consola

window.dbFunctions = {
  saveLink: async (id, data) => {
    try {
      await setDoc(doc(db, "links", id), data);
      console.log("✅ Documento guardado:", id);
      return true;
    } catch (error) {
      console.error("❌ Error al guardar:", error);
      return false;
    }
  }
};
