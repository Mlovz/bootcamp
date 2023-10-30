import { Navbar } from "../widgets";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage/ui/HomePage";
import { LoginLazyPage } from "@/pages/LoginPage/ui/LoginLazyPage";
import { RegisterLazyPage } from "@/pages/RegisterPage/ui/RegisterLazyPage";
import { Suspense } from "react";
import { Spinner } from "@/shared/ui";

const App = () => {
  const auth = false;

  return (
    <div className="app">
      <Suspense fallback="">
        {auth && <Navbar />}
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
