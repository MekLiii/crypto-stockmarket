import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./index";
import { CryptoContexProvider } from "./index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CryptoContexProvider>
      <App />
    </CryptoContexProvider>
    <GlobalStyles />
  </React.StrictMode>
);
