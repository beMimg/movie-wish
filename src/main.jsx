import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import router from "./Router";
import ContextProvider from "./context/MovieContext";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
);
