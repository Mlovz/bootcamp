import { LoginPage, RegisterPage } from "@/pages";
import { getRouteLogin, getRouteRegister } from "@/shared/consts/route";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={getRouteLogin()} element={<LoginPage />} />
      <Route path={getRouteRegister()} element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRouter;
