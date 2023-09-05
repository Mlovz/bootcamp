import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";

function App() {
  return (
    <div className="App">
      <header></header>

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
