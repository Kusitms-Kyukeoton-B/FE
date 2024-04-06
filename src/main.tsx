import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RecoilContextProvider from "./context/recoilContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilContextProvider>
      <BrowserRouter basename="/FE">
        <App />
      </BrowserRouter>
    </RecoilContextProvider>
  </React.StrictMode>
);
