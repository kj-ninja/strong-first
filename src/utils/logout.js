import firebase from "../api/firebase";

export default function handleLogout()  {
    firebase.auth().signOut().then(function() {
        console.log('wylogowano');
    }).catch(function(error) {
        console.log(error.message);
    })
};