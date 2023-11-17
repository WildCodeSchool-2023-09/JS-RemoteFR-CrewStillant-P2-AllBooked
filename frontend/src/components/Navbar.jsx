import { NavLink } from "react-router-dom";

// logo

import logo from "../assets/logo-allbooked.png";

// import components

import MenuBurger from "./MenuBurger";

// styles

import "../styles/navbar.css";

// my function

function Navbar() {
  return (
    <div>
      <nav className="navb">
        <NavLink to="/">
          <img id="Pictures" src={logo} alt="logo" />
        </NavLink>
        <div id="Name_site">All Booked</div>
      </nav>
      <MenuBurger />
    </div>
  );
}

export default Navbar;
