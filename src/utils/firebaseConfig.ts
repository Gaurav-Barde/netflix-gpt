// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCPJLr1JgaLnYzbuC-vC0HF-VOzVFkPm34",
  authDomain: "netflix-gpt-a59ce.firebaseapp.com",
  projectId: "netflix-gpt-a59ce",
  storageBucket: "netflix-gpt-a59ce.firebasestorage.app",
  messagingSenderId: "112011831587",
  appId: "1:112011831587:web:4cd1f18a3856216ac9c496",
  measurementId: "G-GXDDQVR7ZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
