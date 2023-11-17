import Menu from "react-burger-menu/lib/menus/slide";

// style

import "../styles/menu.css";
import { NavLink } from "react-router-dom";

// my function

function MenuBurger() {
  return (
    <Menu right>
      <NavLink className="menu-item" to="/home">
        Home
      </NavLink>
      <NavLink className="menu-item" to="/compte">
        Mon compte
      </NavLink>
      <NavLink className="menu-item" to="/citations">
        Citations
      </NavLink>
      <NavLink className="menu-item" to="/mybooks">
        My Books
      </NavLink>
      <NavLink className="menu-item" to="/parametres">
        Paramètres
      </NavLink>
    </Menu>
  );
}

export default MenuBurger;
