import { getAuthToken } from "@/entities/User";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isLogged = useSelector(getAuthToken);
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  if (token && isLogged) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AuthLayout;
