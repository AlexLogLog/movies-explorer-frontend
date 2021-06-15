import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
    return (
        <Route>
            {
                props.loggedIn ? <Component {...props} path={props.path} /> : <Redirect to="/signin" />
            }
        </Route>
    )
};


export default ProtectedRoute;