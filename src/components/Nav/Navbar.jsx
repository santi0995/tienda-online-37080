import React from "react";
import estilos from './navbar.module.css'
import {CartWidget} from "./CartWidget";
import Button from "../Button/Button";

const Navbar = (props) => {
  if (props.isFooter === false) {
    return (
      <nav className={estilos.nav}>
        <img className={estilos.logo} src="Logoclimaservice.png" alt="" />
        {/* <h1 className={estilos.title}>Clima Service</h1> */}
        <ul>
          <li>
            <a href="https:google.com">Inicio</a>
          </li>
          <li>
            <a href="https:google.com">Sobre Nosotros</a>
          </li>
          <li>
            <a href="https:google.com">Servicios</a>
          </li>
          <li>
            <a href="https:google.com">Productos</a>
          </li>
          <li>
            <a href="https:google.com">Reviews</a>
          </li>
          <li>
            <a href="https:google.com">Contacto</a>
          </li>
        </ul>
        {/* <Button text= "Sign in" variant= "primary"/> */}
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
