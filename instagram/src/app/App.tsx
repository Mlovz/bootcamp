import { Navbar } from "../widgets";
import {Routes, Route} from 'react-router-dom'
import HomePage from "@/pages/HomePage/ui/HomePage";
import { LoginLazyPage } from "@/pages/LoginPage/ui/LoginLazyPage";
import { RegisterLazyPage } from "@/pages/RegisterPage/ui/RegisterLazyPage";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return <h1>{t('Добро пожаловать в React')}</h1>
}


const App = () => {
  return (
    <div className="app">
      <Suspense fallback=''>

      <Navbar />

      <MyComponent/>

        <div className="container">
          <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/login" element={<LoginLazyPage/>}/>
                  <Route path="/register" element={<RegisterLazyPage/>}/>
              </Routes>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
