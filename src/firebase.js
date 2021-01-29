// import * as firebase from "firebase";
// import "firebase/database";
import firebase from "firebase";
// import firebase from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let config = {
    apiKey: "AIzaSyBh77DCsrJWHKANkLO95ez4HNTEInvHSO0",
    authDomain: "mysaldo-app.firebaseapp.com",
    databaseURL: "https://mysaldo-app-default-rtdb.firebaseio.com",
    projectId: "mysaldo-app",
    storageBucket: "mysaldo-app.appspot.com",
    messagingSenderId: "756747727434",
    appId: "1:756747727434:web:c2a30c62fafbddaf222cb3",
    measurementId: "G-V1BFK342CF"
};

firebase.initializeApp(config);

export default firebase.database(); 