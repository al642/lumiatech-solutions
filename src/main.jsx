import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles.css";

const savedTheme = window.localStorage.getItem("lumiatech-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";

document.documentElement.dataset.theme = savedTheme || systemTheme;
document.documentElement.style.colorScheme = savedTheme || systemTheme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
