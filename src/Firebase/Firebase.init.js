//Do not share firebase Online


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw8e4BFC2qg22yuIvHBO4ZSyBpV113fz0",
  authDomain: "simple-firebase-auth-8396e.firebaseapp.com",
  projectId: "simple-firebase-auth-8396e",
  storageBucket: "simple-firebase-auth-8396e.firebasestorage.app",
  messagingSenderId: "231505703210",
  appId: "1:231505703210:web:4f1e39cdfa5345c9d06e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);