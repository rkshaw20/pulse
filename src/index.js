import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import DataContextProvider from "./contexts/DataContextProvider";
import FilterContextProvider from "./contexts/FIlterContextProvider";

// Call make Server
makeServer();

const root = createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  // </React.StrictMode>
);
