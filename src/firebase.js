// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6628e.firebaseapp.com",
  projectId: "mern-estate-6628e",
  storageBucket: "mern-estate-6628e.appspot.com",
  messagingSenderId: "583243965977",
  appId: "1:583243965977:web:5b389ddc0750024f4f2c88"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
