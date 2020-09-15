// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDW3Hyzgkgy_FJiIXgdAdsIuNFtPhcn6BA",
    authDomain: "yais-b73db.firebaseapp.com",
    databaseURL: "https://yais-b73db.firebaseio.com",
    projectId: "yais-b73db",
    storageBucket: "yais-b73db.appspot.com",
    messagingSenderId: "663930115053",
    appId: "1:663930115053:web:e01417ebe84d1014e98de4",
    measurementId: "G-36BP389XG3"
};

window.firebase = firebase;

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence();

export let auth = firebase.auth();
export let db = firebase.firestore();
