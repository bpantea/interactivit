import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/About";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import About from "./pages/About";
import Prices from "./pages/Prices";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="course" element={<Course />} />
          <Route path="contact" element={<Contact />} />
          <Route path="prices" element={<Prices />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
