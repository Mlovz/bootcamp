import { Navbar } from "../widgets";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage/ui/HomePage";
import { LoginLazyPage } from "@/pages/LoginPage/ui/LoginLazyPage";
import { RegisterLazyPage } from "@/pages/RegisterPage/ui/RegisterLazyPage";
import { Suspense, useEffect, useRef } from "react";
import { Spinner } from "@/shared/ui";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";

const App = () => {
  const isLogged = !!useSelector(getAuthData);

  return (
    <div className="app">
      <Suspense fallback="">
        {isLogged && <Navbar />}
        <div className="container">
          <Suspense fallback={<Spinner className="spinner" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginLazyPage />} />
              <Route path="/register" element={<RegisterLazyPage />} />
            </Routes>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
