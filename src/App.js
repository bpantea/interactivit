import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./styling/colors.css";
import "./styling/fonts.css";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
