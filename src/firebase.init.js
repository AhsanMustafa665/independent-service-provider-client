// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "/firebasae/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtH-7wsGN0qo0BuMbh4A8GPagPHK9hZpM",
  authDomain: "doctors-website-131c4.firebaseapp.com",
  projectId: "doctors-website-131c4",
  storageBucket: "doctors-website-131c4.appspot.com",
  messagingSenderId: "325995587928",
  appId: "1:325995587928:web:0dada6fcbc9b7ac6f75d2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;