import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { CartVacio } from "./CartVacio";
import Form from "../Form/Form";
import React from "react";
import estilos from "./cart.module.css";
import { useContext } from "react";
import { useState } from "react";

const Cart = () => {
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
    <section>
      <h1 className={estilos.title1}>Tu carrito de compras</h1>
    {
      cart.length === 0 ?
      <CartVacio/>
       :
      <>
      <div className={estilos.container}>
        {cart.map((prod) => (
          <CartDetail key={prod.id} prod={prod} />
          ))}
    </div>
    <div className={estilos.text}>
      <button className={estilos.button1} onClick={clearCart}>
        Borrar carrito
      </button>
      <button className={estilos.button1}>
        Terminar mi compra
      </button>
      <h4 className={estilos.total}> Total: ${precioTotal()}</h4>
      </div>
      <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
      </>
    }
    </section>
  );
};

export default Cart;
