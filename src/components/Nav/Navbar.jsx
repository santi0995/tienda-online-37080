import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";
import React from "react";
import estilos from "./navbar.module.css";

const Navbar = ({isInHeader}) => {
  return (
    <>
    {isInHeader ? (
      <nav className={estilos.nav}>
          <Link to="/">
            <img
              className={estilos.logo}
              src="./Logoclimaservice.png"
              alt=""
            ></img>
          </Link>
          <ul className={estilos.list}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/form">Contacto</Link>
            </li>
          </ul>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </nav>
      ) : (
        <nav className={estilos.contenedorMain}>
            <ul className={estilos.listFooter}>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/form">Contacto</Link>
            </li>
            <ul className={estilos.share}>
              <li>                
            <a href="https://www.facebook.com/lomas1979">
                <img src="../img/logo-facebook.png" alt="logoFacebook"/>
            </a>
              </li>
              <li>
            <a href="https://api.whatsapp.com/send?phone=%2B34698549221&fbclid=IwAR2YigwsiC0xRFXvz1XLRx4CcvRUB2--X2PNfAjL6yA8oaU9UgMH475AVwI">
                <img src="../img/whatssap-logo.png" alt="logoWallapop"/>
            </a>
              </li>
              <li>                
            <a href="https://www.milanuncios.com/tienda/climafind-s-l-3148.htm">
                <img src="../img/malogo.png" alt="logoMilAnuncios"/>
            </a>
              </li>
        </ul>
            </ul>
            <div className={estilos.footerh5}>
            <h5>Diseñado por Santiago Serrato</h5>
            </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
