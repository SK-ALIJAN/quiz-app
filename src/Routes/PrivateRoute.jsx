import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../ContextApi";

const PrivateRoute = ({ children }) => {
  let { userSignUp } = useContext(Context);
  return <>
  {userSignUp ? children : <Navigate to={"/signup"} />}</>;
};

export default PrivateRoute;
