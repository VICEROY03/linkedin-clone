import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7I5ikWchrreXZx6KkFcODadVlrHVDPdo",
    authDomain: "linkedin-clone-51dea.firebaseapp.com",
    projectId: "linkedin-clone-51dea",
    storageBucket: "linkedin-clone-51dea.appspot.com",
    messagingSenderId: "490888071871",
    appId: "1:490888071871:web:ff91bfb9a5c1f72f6f940a",
    measurementId: "G-M8V0DBK78D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };