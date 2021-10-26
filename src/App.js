import React from "react";
import NavBar from "./components/Materialize/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
