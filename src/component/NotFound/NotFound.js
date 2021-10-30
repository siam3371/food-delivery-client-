import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div> 
            {/* this is not found page */}
                 <h3>Page not found</h3>
            <Link to="/home"> <button className="btn-regular">Back Home</button> </Link>
        </div>
    );
};

export default NotFound;
