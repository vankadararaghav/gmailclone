import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAySOgRY5XcR3mYJiko3DMYHiEtknXrl3I",
  authDomain: "clone2-ff385.firebaseapp.com",
  projectId: "clone2-ff385",
  storageBucket: "clone2-ff385.appspot.com",
  messagingSenderId: "529659981780",
  appId: "1:529659981780:web:142d041dcef721178af041",
  measurementId: "G-GGVFD4MZC0"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}