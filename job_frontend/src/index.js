import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Routes } from "react-router-dom";
import { AppProvider } from "./context";
import App from "./App";
import "./assests/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


const root = createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <Routes>
    <App />
    </Routes>
  </AppProvider>
);
