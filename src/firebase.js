// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBKgCVYELO1c-6jkZeRBvlSLgmisdM8xoc",
    authDomain: "clone-f1d90.firebaseapp.com",
    databaseURL: "https://clone-f1d90.firebaseio.com",
    projectId: "clone-f1d90",
    storageBucket: "clone-f1d90.appspot.com",
    messagingSenderId: "557895514564",
    appId: "1:557895514564:web:7dcd87dae7b072fe6f8c91",
    measurementId: "G-7XD3T0XTJV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };