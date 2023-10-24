import ReactDOM from "react-dom/client";
import "./app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "./app/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
