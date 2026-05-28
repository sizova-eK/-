// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc,
    query,
    where,
    orderBy,
    Timestamp,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ✅ ВАШИ ПРАВИЛЬНЫЕ КЛЮЧИ (вставлены ваши данные)
const firebaseConfig = {
    apiKey: "AIzaSyBZjaklTFj51NsUWdgfQCyUtk1XvXieeBA",
    authDomain: "cinema-zvezdny-id.firebaseapp.com",
    projectId: "cinema-zvezdny-id",
    storageBucket: "cinema-zvezdny-id.firebasestorage.app",
    messagingSenderId: "371003052539",
    appId: "1:371003052539:web:5ff1c66770bd871d75bb5e",
    measurementId: "G-CLJYB30B8G"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Экспорт функций
export { 
    auth, 
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    Timestamp,
    setDoc,
    getDoc
};