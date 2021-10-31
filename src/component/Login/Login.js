import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useProvider from '../Hook/useProvider';

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home" 
     
    const {googleSignin, setUser, setLoading, user} =useProvider()    
    const handleGoogleLogin = () => {
         googleSignin() 
        .then((result )=> {
             setLoading(true)
            setUser(result.user) 
                history.push(url) 
}) 
        .catch(err => console.log(err))
        .finally(() => {
            setLoading(false)
        })
     }

    return (
        // login place
        <div>
                <h2 className="text-primary mb-5"> Please Login  </h2> 
            <button onClick={handleGoogleLogin} className="btn-regular" > Gooogle Login</button>
            {
                    user.email ? <h3 className="text-success mt-5">Buy Now Our Product Go To Home <Link to="/home"> <button className="btn btn-success">Go Back Home</button> </Link> </h3> : ''
                }
        </div>
    );
};

export default Login;