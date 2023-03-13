import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyC_br_bwSl0qnzQ1SVlbqxAuHsqdIxUXgg",
    authDomain: "photoshoped-2df5a.firebaseapp.com",
    projectId: "photoshoped-2df5a",
    storageBucket: "photoshoped-2df5a.appspot.com",
    messagingSenderId: "813665250847",
    appId: "1:813665250847:web:37aa82a6604e05aec72f2a"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { firebaseApp, auth, googleProvider };