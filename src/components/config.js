import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBsHhuJi2F3NpK6P8L51UdogjM993E_oE8",
    authDomain: "libros-68e83.firebaseapp.com",
    projectId: "libros-68e83",
    storageBucket: "libros-68e83.appspot.com",
    messagingSenderId: "368951495369",
    appId: "1:368951495369:web:ac0858d01a3cd278ec9b18"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { 
  auth, provider
};