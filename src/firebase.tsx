// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Adicionado: Importa as funções para Autenticação e Banco de Dados
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5PvYYsEdjkr-mZBQrWLHgKZuRkuaiZeE",
  authDomain: "posichat-b265c.firebaseapp.com",
  projectId: "posichat-b265c",
  storageBucket: "posichat-b265c.firebasestorage.app",
  messagingSenderId: "488356048749",
  appId: "1:488356048749:web:27de8dfa8a62c547cbb464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Adicionado: Inicializa a Autenticação e o Firestore e os exporta para o resto do site
export const auth = getAuth(app);
export const db = getFirestore(app);
