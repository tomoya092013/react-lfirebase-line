import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCM4zzoZ78b1PWsm12sQ3MSBQJJtd1XUAs",
  authDomain: "react-line-clone-aa031.firebaseapp.com",
  projectId: "react-line-clone-aa031",
  storageBucket: "react-line-clone-aa031.appspot.com",
  messagingSenderId: "131385372744",
  appId: "1:131385372744:web:7898903219c6c87253e87d"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };