import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
