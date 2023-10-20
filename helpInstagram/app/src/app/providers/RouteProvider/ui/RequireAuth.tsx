import { getAuthData } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { getRouteLogin, getRouteMain } from "@/shared/consts/router";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = !!useSelector(getAuthData);
  const token = !!localStorage.getItem(LOCAL_STORAGE_TOKEN);
  const location = useLocation();

  if (!auth && !token) {
    return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
