import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyByVt3jaPKkgcb-xeAt8N0ThIle9ysFoM4",
  authDomain: "e-rider-pro.firebaseapp.com",
  projectId: "e-rider-pro",
  storageBucket: "e-rider-pro.appspot.com",
  messagingSenderId: "252475241485",
  appId: "1:252475241485:web:6fd4485edfbd2f51561144"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


