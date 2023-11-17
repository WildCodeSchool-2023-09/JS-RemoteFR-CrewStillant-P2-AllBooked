import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import logo from "../assets/logo-allbooked.png";

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
