import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Humans } from "./characters/pages";
import { DemonSlayerApp } from "./ui/components/DemonSlayerApp";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DemonSlayerApp />
    </BrowserRouter>
  </React.StrictMode>
);
