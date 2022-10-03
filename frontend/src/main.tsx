import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./index";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./index";
import { CryptoContexProvider } from "./index";

const theme = localStorage.getItem("theme") === "dark" ? dark : light;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CryptoContexProvider>
        <App />
      </CryptoContexProvider>
      <GlobalStyles />
    </React.StrictMode>
  </ThemeProvider>
);
