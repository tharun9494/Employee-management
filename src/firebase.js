// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB1H3Aj7MA8zLygX-Tf0xmg0_Abkr6aWI",
  authDomain: "employee-management-6099d.firebaseapp.com",
  projectId: "employee-management-6099d",
  storageBucket: "employee-management-6099d.appspot.com",
  messagingSenderId: "866195472676",
  appId: "1:866195472676:web:417a67deacadaf65b3f3b1",
  measurementId: "G-LP20L8D5FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();

export default app;