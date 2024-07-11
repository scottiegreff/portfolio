// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-bd221.firebaseapp.com",
  projectId: "portfolio-bd221",
  storageBucket: "portfolio-bd221.appspot.com",
  messagingSenderId: "490494697726",
  appId: "1:490494697726:web:e2d4ad9a7e61079d8585af",
  measurementId: "G-433C6YY81J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export { db };
export default app;
// const analytics = getAnalytics(app);