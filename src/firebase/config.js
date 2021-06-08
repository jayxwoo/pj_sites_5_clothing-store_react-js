import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDWgYLdW3KH5ZMFFF0DZhdJnwoR-oKe-Po",
    authDomain: "pj-sites-5-clothing-store.firebaseapp.com",
    projectId: "pj-sites-5-clothing-store",
    storageBucket: "pj-sites-5-clothing-store.appspot.com",
    messagingSenderId: "1047797742642",
    appId: "1:1047797742642:web:6b9b5e18f19d7e9367d02b",
    measurementId: "G-J1D1K7G5ZN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };