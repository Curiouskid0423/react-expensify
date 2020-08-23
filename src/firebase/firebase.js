import * as firebase from "firebase";

//TODO: The official setup as developer to include a
//  Js script tag in index.html, but it's better to use
//  npm installation, which is what we are doing now.

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

const db = firebase.database();

const onValChange = db.ref().on("value",
    (snapshot) => {
    console.log(snapshot.val());
    }, (e) => {
        console.log("Your subscription to data has failed: ", e);
    });

db.ref("job").set("US President");
db.ref().off(onValChange);
db.ref("major").set("EECS and Bioengineering");


/*
//  set() returns a promise available for chaining.
db.ref().set({
    name: "Kevin Li",
    school: "UC Berkeley",
    major: "Computer Science",
    isSingle: false,
    location: { country: "Taiwan", city: "Taichung" }
}).then((data) => {
    console.log("Your data is saved.");
}).catch((error) => {
    console.log("Failed and error message: ", error);
});

db.ref().update({
    school: "Stanfurd",
    major: "EECS and Bioengineering",
    isSingle: null,
    job: "Software Engineer",
    "location/city": "Berkeley in the US"
}).then(() => {
    console.log("Update request succeeded.");
}).catch((e) => {
    console.log("Error message during the update: ", e);
});

// on() returns the specified callback function.
const onValChange = db.ref("job")
    .on("value", (snapshot) => {
    console.log("Job has been updated to ", snapshot.val());
    }, (e) => {
        console.log("Logging from the error fetching callback.");
    });

setTimeout(() => {
    db.ref("job").set("System Architect");
}, 2000);

setTimeout(() => {
    db.ref("job").off("value", onValChange);
    db.ref("location/city").set("New Taipei City");
}, 2000);
*/
