import { Link } from "react-router-dom";
import React from 'react'
import estilos from "./cart.module.css";

export const CartVacio = () => {
  return (
    <div className={estilos.cartVacio}>
      <img
              className={estilos.carrito}
              src="./carritoVacio1.png"
              alt=""
            ></img>
       <h2 className={estilos.vacio}>Tu carrito está vacío!</h2>
       <Link to='/'>
      <button className={estilos.button2}>Volver al início</button>      
       </Link> 
      </div>
  )
}
