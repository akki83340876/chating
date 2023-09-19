// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABf58e7RM-sH_v0uVpS2x7yaBDnBKe9JU",
  authDomain: "akki52kar-d786e.firebaseapp.com",
  projectId: "akki52kar-d786e",
  storageBucket: "akki52kar-d786e.appspot.com",
  messagingSenderId: "148463614320",
  appId: "1:148463614320:web:609823f61ae4191fdfb7b5",
  measurementId: "G-39JKT01FET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();