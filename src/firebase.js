
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARMNbGG7z30edUFPfYlqUGOtzYLCaPSuI",
  authDomain: "slack-clone-e5155.firebaseapp.com",
  projectId: "slack-clone-e5155",
  storageBucket: "slack-clone-e5155.firebasestorage.app",
  messagingSenderId: "156569682638",
  appId: "1:156569682638:web:f79f0b5fe794680451469f",
  measurementId: "G-BFJ25TKPJ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
