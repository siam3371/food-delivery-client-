import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../Hook/useProvider';

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home" 
    const {googleSignin, setUser, setLoading } =useProvider()    
    const handleGoogleLogin = () => {
        setLoading(true)
        googleSignin() 
        .then((result )=> {
            setLoading(true)
            setUser(result.user) 
                history.push(url)
//    setLoading(false) 
}) 
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })
     }
    return (
        <div>
                <h2 className="text-primary"> Please Login  </h2>

            <button onClick={handleGoogleLogin} className="btn-regular" > Gooogle Login</button>
        </div>
    );
};

export default Login;