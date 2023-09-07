import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { Header } from "./components";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
          </Routes>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
