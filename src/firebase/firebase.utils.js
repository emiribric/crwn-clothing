import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMHs84fA9a9wP3MNqAK7JKAhCfj-SAWrU",
    authDomain: "crwn-clothing-d55ea.firebaseapp.com",
    databaseURL: "https://crwn-clothing-d55ea.firebaseio.com",
    projectId: "crwn-clothing-d55ea",
    storageBucket: "crwn-clothing-d55ea.appspot.com",
    messagingSenderId: "243132503338",
    appId: "1:243132503338:web:76a8e6fecd2e40e5da7a53"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: 'select_account' });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
