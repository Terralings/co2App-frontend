import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD5mfispVPevXEe4KBil2fIbqmw5NIrWCY",
  authDomain: "c02app-3c18c.firebaseapp.com",
  projectId: "c02app-3c18c",
  storageBucket: "c02app-3c18c.appspot.com",
  messagingSenderId: "1054119519550",
  appId: "1:1054119519550:web:5e1f56b0731439fd4a786f",
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export { auth, login, logout };
