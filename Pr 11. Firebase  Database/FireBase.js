// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA69EWEW4JvQW8SZTDGdgE4-0Xg5yj96Mk",
    authDomain: "pr-11--firebase--database.firebaseapp.com",
    databaseURL: "https://pr-11--firebase--database-default-rtdb.firebaseio.com",
    projectId: "pr-11--firebase--database",
    storageBucket: "pr-11--firebase--database.firebasestorage.app",
    messagingSenderId: "83919792765",
    appId: "1:83919792765:web:a3e27e6ea145f90d481f14",
    measurementId: "G-FTQNTBTF1C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);