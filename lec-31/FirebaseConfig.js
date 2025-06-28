// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0T0h05qdhUfwyK9ZWo32GOSnavmeI6Fk",
    authDomain: "fir-firestore-database-c181c.firebaseapp.com",
    projectId: "fir-firestore-database-c181c",
    storageBucket: "fir-firestore-database-c181c.firebasestorage.app",
    messagingSenderId: "886208594257",
    appId: "1:886208594257:web:072f0ae9281afd089d5370",
    measurementId: "G-E4B70GQG29"
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);