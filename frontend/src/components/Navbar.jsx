import "../styles/navbar.css";
import MenuBurger from "./MenuBurger";
import logo from "../assets/logo-allbooked.png";

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
