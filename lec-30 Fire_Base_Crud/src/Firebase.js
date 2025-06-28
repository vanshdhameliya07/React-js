import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyALJik17Z71UzAfWdaoRY7X-ZPGaDFobT8",
    authDomain: "crud-realtime-database-9530b.firebaseapp.com",
    databaseURL: "https://crud-realtime-database-9530b-default-rtdb.firebaseio.com",
    projectId: "crud-realtime-database-9530b",
    storageBucket: "crud-realtime-database-9530b.firebasestorage.app",
    messagingSenderId: "663348677855",
    appId: "1:663348677855:web:4a5658a1d56962800ead6a",
    measurementId: "G-EM656JCJ6Y"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);