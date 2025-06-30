// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-pNcTMMvWwhvVgGJ9rYxV7HY9CFahDo4",
    authDomain: "pr-12--firebase-storage.firebaseapp.com",
    projectId: "pr-12--firebase-storage",
    storageBucket: "pr-12--firebase-storage.firebasestorage.app",
    messagingSenderId: "28297474124",
    appId: "1:28297474124:web:21513f8adfb6ba56cd04e9",
    measurementId: "G-9TZW5SBREG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);