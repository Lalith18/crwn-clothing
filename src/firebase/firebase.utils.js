import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfz9eJUlPafml5E04bPeXkoQTQ-kUr068",
    authDomain: "crwn-db-2e498.firebaseapp.com",
    projectId: "crwn-db-2e498",
    storageBucket: "crwn-db-2e498.appspot.com",
    messagingSenderId: "693140163144",
    appId: "1:693140163144:web:191183fa96330ee5cbe67d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;