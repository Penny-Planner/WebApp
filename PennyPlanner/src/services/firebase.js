//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Hl4kk4makmrjuGGPIX8BXunW4k0ajlY",
  authDomain: "pennyplanner-5312b.firebaseapp.com",
  projectId: "pennyplanner-5312b",
  storageBucket: "pennyplanner-5312b.appspot.com",
  messagingSenderId: "11484434036",
  appId: "1:11484434036:web:f494b84c81847df9f20b21",
  measurementId: "G-4G622GB5HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;