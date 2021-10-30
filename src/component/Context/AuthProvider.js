import React, { createContext } from 'react';
import UseAuth from '../Hook/UseAuth';
export const AuthContext = createContext();
 
const AuthProvider = ({children}) => {
    const allContext = UseAuth(); 
    return (
        <div>
              <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>          
        </div>
    );
};

export default AuthProvider;