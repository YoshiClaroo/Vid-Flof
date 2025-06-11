import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANjIecB-LakVfSjbjd-Z3TsDlm0tbXEfU",
  authDomain: "vid-flof.firebaseapp.com",
  projectId: "vid-flof",
  storageBucket: "vid-flof.firebasestorage.app",
  messagingSenderId: "842823438154",
  appId: "1:842823438154:web:0b2a73c5f85e8fe5613bb3",
  measurementId: "G-6X1PK66KNQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.dbFunctions = {
  saveLink: async (id, data) => {
    try {
      await setDoc(doc(db, "links", id), {
        videoUrl: data.videoUrl,
        redirectUrl: data.redirectUrl,
        createdAt: new Date().toISOString(),
        views: 0,
        lastAccessed: null
      });
      console.log("✅ Enlace guardado con ID:", id);
      return id;
    } catch (error) {
      console.error("❌ Error al guardar:", error);
      throw error;
    }
  },
  
  getLink: async (id) => {
    try {
      const docRef = doc(db, "links", id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // Actualizar contador de vistas
        await updateDoc(docRef, {
          views: increment(1),
          lastAccessed: new Date().toISOString()
        });
        return docSnap.data();
      }
      return null;
    } catch (error) {
      console.error("❌ Error al leer:", error);
      throw error;
    }
  }
};

console.log("🔥 Firebase configurado correctamente");
