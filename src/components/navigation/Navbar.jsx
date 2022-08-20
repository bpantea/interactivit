import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Spreader } from "../shared/Spreader";
import { Logo } from "./Logo";

function Links() {
  return (
    <>
      <NavLink className="link" to="/">
        acasa
      </NavLink>
      <NavLink className="link" to="/course">
        cum e o lectie?
      </NavLink>
      <NavLink className="link" to="/about">
        despre
      </NavLink>
      <NavLink className="link" to="/prices">
        preturi
      </NavLink>
      <NavLink className="link" to="/contact">
        contact
      </NavLink>
    </>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-line"></div>
      <Logo />
      <Spreader />
      <div className="links">
        <Links />
      </div>
    </nav>
  );
}
