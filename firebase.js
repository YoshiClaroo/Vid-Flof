// Importa los módulos necesarios de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { 
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Configuración de Firebase
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
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Funciones para trabajar con la base de datos
window.dbFunctions = {
  /**
   * Guarda un enlace en Firestore
   * @param {string} id - ID único del enlace
   * @param {object} data - Datos a guardar {videoUrl, redirectUrl}
   * @returns {Promise<boolean>} True si se guardó correctamente
   */
  saveLink: async (id, data) => {
    try {
      await setDoc(doc(db, "links", id), {
        videoUrl: data.videoUrl,
        redirectUrl: data.redirectUrl,
        createdAt: new Date().toISOString(),
        views: 0
      });
      console.log("Documento guardado con ID:", id);
      return true;
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      return false;
    }
  },

  /**
   * Obtiene un enlace desde Firestore
   * @param {string} id - ID del documento a recuperar
   * @returns {Promise<object|null>} Datos del enlace o null si no existe
   */
  getLink: async (id) => {
    try {
      const docRef = doc(db, "links", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No se encontró el documento con ID:", id);
        return null;
      }
    } catch (error) {
      console.error("Error al leer de Firestore:", error);
      return null;
    }
  }
};

console.log("Firebase configurado correctamente. dbFunctions disponible.");
