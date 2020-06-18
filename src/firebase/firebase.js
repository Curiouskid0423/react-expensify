import * as firebase from "firebase";

//TODO: The official setup as developer to include a
//  javascript script tag in index.html, but it's better
//  to use npm installation, which is what we are doing now.

const firebaseConfig = {
    apiKey: "AIzaSyBckRnT3JzVXhP6U_x9Jc0vXQ4fCPvNl6Y",
    authDomain: "react-expensify-fd242.firebaseapp.com",
    databaseURL: "https://react-expensify-fd242.firebaseio.com",
    projectId: "react-expensify-fd242",
    storageBucket: "react-expensify-fd242.appspot.com",
    messagingSenderId: "1000911575691",
    appId: "1:1000911575691:web:62bef8aaaa16e8dd56528e",
    measurementId: "G-T1H299RF4N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.database().ref().set({
    name: "Kevin Li"
})