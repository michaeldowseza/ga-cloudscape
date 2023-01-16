import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";

import App from "./App";

import "@cloudscape-design/global-styles/index.css";

ReactGA.initialize("G-6T2S8L4BB9");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
