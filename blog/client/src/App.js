import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addPost" element={<AddPostPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
