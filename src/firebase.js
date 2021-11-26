import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyCg-LLBxY1qdUVq5kUluw7cldue7OQdA-o",
  authDomain: "utuberemade.firebaseapp.com",
  projectId: "utuberemade",
  storageBucket: "utuberemade.appspot.com",
  messagingSenderId: "1039346959230",
  appId: "1:1039346959230:web:afc97218f8c3edb82ae92f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export { auth };
