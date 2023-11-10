// import logo

import logo from "../assets/logo-allbooked.png";

// import components

import MenuBurger from "./MenuBurger";

// styles

import "../styles/navbar.css";

// my function

function NavBar() {
  return (
    <div>
      <nav className="navb">
        <img id="Pictures" src={logo} alt="logo" />
        <div id="Name_site">All Booked</div>
      </nav>
      <MenuBurger />
    </div>
  );
}

export default NavBar;
