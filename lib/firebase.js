import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase-firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBDznMpQxJLWEd_YBPDX8j_3vs2znOKG6o",
    authDomain: "devhub-80a32.firebaseapp.com",
    databaseURL: "https://devhub-80a32-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "devhub-80a32",
    storageBucket: "devhub-80a32.appspot.com",
    messagingSenderId: "604606196823",
    appId: "1:604606196823:web:954241ce66851b11b18712",
    measurementId: "G-Y3P8QPVJRV"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
