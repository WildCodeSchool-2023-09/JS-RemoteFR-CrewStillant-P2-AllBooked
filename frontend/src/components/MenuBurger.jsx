import Menu from "react-burger-menu/lib/menus/slide";

// style

import "../styles/menu.css";

// my function

function MenuBurger() {
  return (
    <Menu right>
      <a className="menu-item" href="/compte">
        Mon compte
      </a>
      <a className="menu-item" href="/categories">
        Catégories
      </a>
      <a className="menu-item" href="favoris">
        Mes favoris
      </a>
      <a className="menu-item" href="parametres">
        Paramètres
      </a>
    </Menu>
  );
}

export default MenuBurger;
