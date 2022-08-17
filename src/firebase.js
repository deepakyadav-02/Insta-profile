import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjIbtYpRxZWcUv4SGk9rKnHTd4YoUDTts",
  authDomain: "insta-profile-bdad1.firebaseapp.com",
  projectId: "insta-profile-bdad1",
  storageBucket: "insta-profile-bdad1.appspot.com",
  messagingSenderId: "140018833709",
  appId: "1:140018833709:web:cd04e22f964c7a00d99ba4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
