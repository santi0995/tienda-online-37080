import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { CartVacio } from "./CartVacio";
import { Link } from "react-router-dom";
import React from "react";
import estilos from "./cart.module.css";
import { useContext } from "react";

const Cart = () => {
  const { cart, clearCart, precioTotal } = useContext(CartContext);



  return (
    <section className={estilos.sectionContainer}>
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
      <Link to='/checkout'>
      <button className={estilos.button1}>
        Terminar mi compra
      </button>
      </Link>
      <Link to='/'>
      <button className={estilos.button1}>
        Seguir comprando
      </button>
      </Link>
      <button className={estilos.button2} onClick={clearCart}>
        Borrar carrito
      </button>
      <h4 className={estilos.total}> Total: ${precioTotal()}</h4>
      </div>
      </>
    }
    </section>
  );
};

export default Cart;
