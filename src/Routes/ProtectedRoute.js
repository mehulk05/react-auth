import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log("isAuthenticated", isAuthenticated);
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component key={props.location.key} {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </>
  );
};

export default ProtectedRoute;
