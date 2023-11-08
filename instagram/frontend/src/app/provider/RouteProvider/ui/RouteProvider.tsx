import HomePage from "@/pages/HomePage/ui/HomePage";
import { LoginLazyPage } from "@/pages/LoginPage/ui/LoginLazyPage";
import { RegisterLazyPage } from "@/pages/RegisterPage/ui/RegisterLazyPage";
import { Spinner } from "@/shared/ui";
import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";

const RouteProvider = () => {
  return (
    <Suspense fallback={<Spinner className="spinner" />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<LoginLazyPage />} />
          <Route path="/register" element={<RegisterLazyPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteProvider;
