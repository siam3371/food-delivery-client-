import React from 'react';
import {signInWithPopup,getAuth  ,GoogleAuthProvider } from "firebase/auth";

const UseAuth = () => {
    const auth = getAuth();
     const      googleProvider = new GoogleAuthProvider();
     const googleSignin = () => {
        signInWithPopup(auth, googleProvider )

     }
    return {} 
};
 
export default UseAuth;