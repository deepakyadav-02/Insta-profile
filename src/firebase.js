import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAjIbtYpRxZWcUv4SGk9rKnHTd4YoUDTts",
  authDomain: "insta-profile-bdad1.firebaseapp.com",
  projectId: "insta-profile-bdad1",
  storageBucket: "insta-profile-bdad1.appspot.com",
  messagingSenderId: "140018833709",
  appId: "1:140018833709:web:cd04e22f964c7a00d99ba4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const instagramAuthProvider = new firebase.auth.InstagramAuthProvider();
