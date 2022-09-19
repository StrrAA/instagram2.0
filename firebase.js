// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGpvU2YSAB1pgZ1YFk7x4ieT_BfRmSYT4",
  authDomain: "instagram-2clone.firebaseapp.com",
  projectId: "instagram-2clone",
  storageBucket: "instagram-2clone.appspot.com",
  messagingSenderId: "190972102170",
  appId: "1:190972102170:web:c4098d297658235cb7f3a3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
