import { CartContext } from "../../context/CartContext";
import CartDetail from "./CartDetail";
import { Link } from "react-router-dom";
import React from "react";
import estilos from "./cart.module.css";
import { useContext } from "react";

const Cart = () => {
  const { cart, clearCart, precioTotal } = useContext(CartContext);

  return (
    <section>
      <h1 className={estilos.title1}>Tu carrito de compras</h1>
    {
      cart.length === 0 ?
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
      </>
    }
    </section>
  );
};

export default Cart;





// return (
//   <section>
//     <h1 className={estilos.title1}>Tu carrito de compras</h1>
    
//     <div className={estilos.container}>
//       {cart.map((prod) => (
//         <CartDetail key={prod.id} prod={prod} />
//       ))}
//   </div>
//   <div className={estilos.text}>
//     <button className={estilos.button1} onClick={clearCart}>
//       Borrar carrito
//     </button>
//     <h4 className={estilos.total}> Total: ${precioTotal()}</h4>
//     </div>
//   </section>
  
// );
