import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyDS7Ejdq7oO0Dll4I7qc0pX_6s4SnflH50",
  authDomain: "listeaqui.firebaseapp.com",
  projectId: "listeaqui",
  storageBucket: "listeaqui.appspot.com",
  messagingSenderId: "718782951654",
  appId: "1:718782951654:web:8dbe6e5df65d85181c4b27",
  measurementId: "G-46P2R2NVPS"

  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth, sendPasswordResetEmail };
