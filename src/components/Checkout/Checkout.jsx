import { CartContext } from "../../context/CartContext";
import Form from '../Form/Form'
import React from 'react'
import estilos from "../Cart/cart.module.css";
import { useContext } from "react";
import { useState } from "react";

const Checkout = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, precioTotal } = useContext(CartContext);

    const total = precioTotal();

    const handleId = (id) => {
        setIdCompra(id)
      }
      
      if (idCompra) {
        return <h1 className={estilos.title2}>Gracias por tu compra tu id es: <span className={estilos.numeroId}>{idCompra}</span></h1>
    }


  return (
    <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId} />
  )
}

export default Checkout