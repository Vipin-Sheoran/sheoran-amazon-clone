import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDBQUN3Pg6Cu82o-r2EPX1VuMWEfxfejcc",
  authDomain: "sheoran-clone.firebaseapp.com",
  databaseURL: "https://sheoran-clone.firebaseio.com",
  projectId: "sheoran-clone",
  storageBucket: "sheoran-clone.appspot.com",
  messagingSenderId: "414058708746",
  appId: "1:414058708746:web:ff55944a59b833fbce44f3",
  measurementId: "G-ZMNJ26EJF4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db,auth};