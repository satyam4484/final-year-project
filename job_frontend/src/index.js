import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { AppProvider } from "./context.js";
import "./css/style.css";


const root = createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
