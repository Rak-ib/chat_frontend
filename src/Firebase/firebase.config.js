// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "ramadan-ad7f8.firebaseapp.com",
  projectId: "ramadan-ad7f8",
  storageBucket: "ramadan-ad7f8.appspot.com",
  messagingSenderId: "1042307413922",
  appId: "1:1042307413922:web:a5fc77373bffc59b3424fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;