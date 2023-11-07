import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAcAxhkAv6tFw_xqdhU-R4rG-ik0obPxk0",
  authDomain: "listeaquiproject.firebaseapp.com",
  projectId: "listeaquiproject",
  storageBucket: "listeaquiproject.appspot.com",
  messagingSenderId: "114966230092",
  appId: "1:114966230092:web:6184efbb7498e5736430e9",
  measurementId: "G-1BJFBRNB36"

};
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth, sendPasswordResetEmail };
