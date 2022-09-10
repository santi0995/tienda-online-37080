import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import React from 'react'
import { useContext } from 'react'

const Cart = () => {

    const {cart, clearCart} = useContext(CartContext);

    return (
        <div>
            {cart.map((prod)=>(
                <CartDetail  key={prod.id} prod={prod}/>
            ))}
            <button onClick={clearCart}>Borrar carrito</button>
        </div>

    )
}

export default Cart