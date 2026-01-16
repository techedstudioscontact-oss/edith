import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

/**
 * ⚠️ IMPORTANT: REPLACE WITH YOUR OWN FIREBASE PROJECT CREDENTIALS
 * 
 * This demo Firebase configuration is provided as a template.
 * For production use, you MUST:
 * 1. Create your own Firebase project at https://console.firebase.google.com
 * 2. Enable Authentication, Firestore, and Analytics
 * 3. Replace the values below with your own project credentials
 * 4. Configure Firestore security rules to protect your data
 * 
 * The current credentials are for demonstration purposes only and may be
 * rate-limited or disabled at any time.
 */

const firebaseConfig = {
    apiKey: "AIzaSyASRST-Et6PS_CuW0oXyxukRd4rGYaNpsU",
    authDomain: "edith-1949b.firebaseapp.com",
    projectId: "edith-1949b",
    storageBucket: "edith-1949b.firebasestorage.app",
    messagingSenderId: "59451577710",
    appId: "1:59451577710:web:f645b3b63bad61b6955d7f",
    measurementId: "G-04YB9CP6TV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
