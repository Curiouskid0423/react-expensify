import { firebase, googleAuthProvider } from "../firebase/firebase";

/**
 * @desc Mind the difference between Asynchronous actions
 * versus Synchronous actions.
 */

export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => ({ type: "LOGOUT" });

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}