import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GlobalProvider } from "./hooks/global";
import AppRoutes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GlobalProvider>
    <AppRoutes />
  </GlobalProvider>
);
