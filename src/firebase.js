import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDF0PEYGOuL4WgbNGy074TmvRSqPOT_L1I",
  authDomain: "facbookemessenger-clone.firebaseapp.com",
  databaseURL: "https://facbookemessenger-clone.firebaseio.com",
  projectId: "facbookemessenger-clone",
  storageBucket: "facbookemessenger-clone.appspot.com",
  messagingSenderId: "482597931530",
  appId: "1:482597931530:web:34e40ed22dd53a1de4edf3",
  measurementId: "G-HDH6N4Y55X"
});

const db = firebaseApp.firestore();

export default db;
