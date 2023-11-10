// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9fF9s-6wCK7W9LYypsltup6AKiMqB62k",
  authDomain: "netflixgpt-3164f.firebaseapp.com",
  projectId: "netflixgpt-3164f",
  storageBucket: "netflixgpt-3164f.appspot.com",
  messagingSenderId: "849402690595",
  appId: "1:849402690595:web:625d9d7d019816a3874596",
  measurementId: "G-Z0X6PWT5R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
