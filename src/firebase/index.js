import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyANvB0qUM5hz-DpwnE-TxkdA2td5G-MtFY",
    authDomain: "react-ecommerce-4f6dd.firebaseapp.com",
    databaseURL: "https://react-ecommerce-4f6dd.firebaseio.com",
    projectId: "react-ecommerce-4f6dd",
    storageBucket: "react-ecommerce-4f6dd.appspot.com",
    messagingSenderId: "487885485095",
    appId: "1:487885485095:web:003745838588299caeca02"
});

export function getFirebase()
{
    return app;
}

export function getFirestore()
{
    return firebase.firestore;
}