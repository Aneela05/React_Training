import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (localStorage.getItem("token") === null) return <Redirect to="/login" />;
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
};

export default ProtectedRoute;
