import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import AppLayout from "../Layouts/appLayout";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  
  return (
    <Route {...rest} render={ props => (
      window.localStorage.user && JSON.parse(window.localStorage.user).name ? (
        <AppLayout>
          <Component {...props} />
        </AppLayout>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
          }}
        />
      )
    )} />
)}

export default withRouter(PrivateRoute);
