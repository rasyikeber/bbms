//bbms/front-end/src/context/PrivateRoute.jsx

import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const PrivateRoute = () => {
  const { user, token } = useContext(AuthContext);
  // console.log("Logged in user from context:", user);

  if (user === null && token) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
