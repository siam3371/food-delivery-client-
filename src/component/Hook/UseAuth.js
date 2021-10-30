import React, { useEffect, useState } from 'react';
import {signInWithPopup,getAuth  ,GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication() 
const UseAuth = () => {
    const auth = getAuth(); 
    const [user, setUser] = useState([]) 
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
             }
            else{
                setUser({})
            }
              setLoading(false)

          })
          return () => unsubscribe
   },[]) 
// GOOGLE LOGIN 
     const googleProvider = new GoogleAuthProvider();
     const googleSignin = () => {
        return signInWithPopup(auth, googleProvider ) 
     }
 
    //  sign out
    const logOut = () => {
        signOut(auth)
        .then(()=>{}) 
    }

    return {googleSignin, user, setUser  ,  setLoading,  logOut} 
};
 
export default UseAuth;