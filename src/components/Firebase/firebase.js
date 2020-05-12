import * as firebase from "firebase/app";
import "firebase/auth";
import {useEffect} from "react";
import axios from "axios";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm_GOx8ZbI8LsWfxvsItxBOhAmLQkqKqw",
    authDomain: "spiderman-users.firebaseapp.com",
    databaseURL: "https://spiderman-users.firebaseio.com",
    projectId: "spiderman-users",
    storageBucket: "spiderman-users.appspot.com",
    messagingSenderId: "189522737766",
    appId: "1:189522737766:web:3373d3bbd6d62a53e5cba7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
console.log('firebase init');

export default firebase;

