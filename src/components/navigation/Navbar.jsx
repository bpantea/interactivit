import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Spreader } from "../shared/Spreader";
import { Logo } from "./Logo";
import MenuIcon from "./assets/MenuIcon";
import { useState } from "react";

function showCompressMenu() {
  return window.matchMedia("(max-width: 900px)").matches;
}

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

function VerticalMenu({ menuClosing, menuOpening }) {
  return <div className={`vertical-menu ${menuClosing && "hide-element"} ${menuOpening && "show-element"}`}>
    <Links />
  </div>;
}

function Menu({onMenuClicked}) {
  return <div className="menu-icon" onClick={onMenuClicked}><MenuIcon /></div>
}

export default function Navbar() {
  const compressMenu = showCompressMenu();
  const [menuToggled, setMenuToggled] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [menuOpening, setMenuOpening] = useState(false);


  function menuClicked() {
    function closeMenu() {
      setTimeout(() => {
        setMenuToggled(false);
        setMenuClosing(false);
      }, 500);

      setMenuClosing(true);
    }

    function openMenu() {
      setMenuToggled(true);
      setMenuOpening(true);

      setTimeout(() => {
        setMenuOpening(false);
      }, 500);
    }

    if (menuToggled) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  return (
    <nav className="navbar">
      <div className="page-layout navbar-line">
        <Logo />
        <Spreader />
        <div className="links">
          {!compressMenu && <Links />}
          {compressMenu && <Menu onMenuClicked={menuClicked} />}
        </div>
      </div>
      {menuToggled && <VerticalMenu menuClosing={menuClosing} menuOpening={menuOpening} />}
    </nav>
  );
}
