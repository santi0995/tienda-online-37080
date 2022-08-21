import React from "react";
import estilos from './navbar.module.css'
import CartWidget from "./CartWidget";

const Navbar = (props) => {
  if (props.isFooter === false) {
    return (
      <nav className={estilos.nav}>
        <h1 className={estilos.title}>Clima Service</h1>
        <ul>
          <li>
            <a href="https:google.com">Inicio</a>
          </li>
          <li>
            <a href="https:google.com">Sobre Nosotros</a>
          </li>
          <li>
            <a href="https:google.com">Contacto</a>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <a href="https:google.com">Inicio</a>
          </li>
          <li>
            <a href="https:google.com">Sobre Nosotros</a>
          </li>
          <li>
            <a href="https:google.com">Contacto</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
