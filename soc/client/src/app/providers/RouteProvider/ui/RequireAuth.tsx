import { getRouteLogin, getRouteMain } from "@/shared/consts/router";
import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = false;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
