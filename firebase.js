import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANjIecB-LakVfSjbjd-Z3TsDlm0tbXEfU",
  authDomain: "vid-flof.firebaseapp.com",
  projectId: "vid-flof",
  storageBucket: "vid-flof.firebasestorage.app",
  messagingSenderId: "842823438154",
  appId: "1:842823438154:web:0b2a73c5f85e8fe5613bb3",
  measurementId: "G-6X1PK66KNQ"
};

// Inicialización de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funciones para exportar
window.dbFunctions = {
  /**
   * Guarda un enlace en Firestore
   * @param {string} id - ID único del enlace
   * @param {object} data - Datos a guardar {videoUrl, redirectUrl}
   */
  saveLink: async (id, data) => {
    try {
      await setDoc(doc(db, "links", id), data);
      console.log("Documento guardado con ID:", id);
      return true;
    } catch (error) {
      console.error("Error al guardar:", error);
      return false;
    }
  },
  
  /**
   * Obtiene un enlace desde Firestore
   * @param {string} id - ID del documento a recuperar
   * @returns {object|null} Datos del enlace o null si no existe
   */
  getLink: async (id) => {
    try {
      const docSnap = await getDoc(doc(db, "links", id));
      return docSnap.exists() ? docSnap.data() : null;
    } catch (error) {
      console.error("Error al leer:", error);
      return null;
    }
  }
};

console.log("Firebase configurado correctamente");
