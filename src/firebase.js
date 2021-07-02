import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyCJ1LzHMS6-RrsfFPCmkc7UpZZqAL75Hxo",
    authDomain: "ciat-backend.firebaseapp.com",
    projectId: "ciat-backend",
    storageBucket: "ciat-backend.appspot.com",
    messagingSenderId: "850924452313",
    appId: "1:850924452313:web:e0eb797555066fc53381c8"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();