// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyB_nWeE2Jx9qzOyi46WC_4jbBfKxVDLaLM",
    authDomain: "pr--13--authentication.firebaseapp.com",
    projectId: "pr--13--authentication",
    storageBucket: "pr--13--authentication.firebasestorage.app",
    messagingSenderId: "18028987099",
    appId: "1:18028987099:web:f1d2c06fe5656107b602fe",
    measurementId: "G-KX42C7W3YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleauthprovider = new GoogleAuthProvider
const analytics = getAnalytics(app);