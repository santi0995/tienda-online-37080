import {CartWidget} from "./CartWidget";
import { Link } from "react-router-dom";
import React from "react";
import estilos from './navbar.module.css'

const Navbar = (props) => {
  if (props.isFooter === false) {
    return (
      <nav className={estilos.nav}>
        <Link to="/"><img className={estilos.logo} src="./Logoclimaservice.png" alt=""></img></Link>
        <ul className={estilos.list}>
          <li>
            <Link to="/">Inicio</Link>
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
        <Link to='/cart'>
        <CartWidget/>
        </Link>
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
