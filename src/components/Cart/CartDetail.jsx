import {CartContext} from '../../context/CartContext'
import React from 'react'
import estilos from './cart.module.css'
import { useContext } from 'react'

const CartDetail = ({prod}) => {

    const {eliminarProd} = useContext(CartContext);

    return (
    <div>
        <h2 className={estilos.title}>{prod.title}</h2>
        <button className={estilos.button} onClick={() => eliminarProd(prod.id)}>Eliminar producto</button>
    </div>
    )
}

export default CartDetail