
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBXxaBj_sxVyhJG2HN4nhjSWEftK8KtHEg",
  authDomain: "twitterclon-19d55.firebaseapp.com",
  projectId: "twitterclon-19d55",
  storageBucket: "twitterclon-19d55.appspot.com",
  messagingSenderId: "24388989929",
  appId: "1:24388989929:web:14165a6372a627d04e9178",
  measurementId: "G-Z09NBSGCS1"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;