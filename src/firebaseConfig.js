// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzWETGQPWLsbYlTwplZ6FA9OQ1kp-sRDY",
  authDomain: "bingebox-91964.firebaseapp.com",
  projectId: "bingebox-91964",
  storageBucket: "bingebox-91964.appspot.com",
  messagingSenderId: "960246272193",
  appId: "1:960246272193:web:c4acb19c5e17837c66c440",
  measurementId: "G-TW4L41REDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);