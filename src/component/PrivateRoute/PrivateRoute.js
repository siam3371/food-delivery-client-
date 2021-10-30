import React from 'react';
import { Redirect, Route } from 'react-router';
import useProvider from '../Hook/useProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, } = useProvider()
    // private route  
    return (
        <div>
              <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;