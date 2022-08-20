import React from "react";
import LogoSvg from "./assets/logo.svg";
import "./Logo.css";
import { useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();

  function navigateToLP() {
    navigate("/");
  }

  return (
    <div className="logo-wrapper" onClick={navigateToLP}>
      <img className="logo-img" src={LogoSvg} alt="InteractivIT logo" />
      <div className="logo-text">
        <span className="logo-name">interactivIT</span>
        <span className="logo-motto secondary-font">
          cand predatul este o pasiune
        </span>
      </div>
    </div>
  );
}
