import {CartContext} from '../../context/CartContext'
import React from 'react'
import estilos from './cart.module.css'
import { useContext } from 'react'

const CartDetail = ({prod}) => {

    const {eliminarProd} = useContext(CartContext);

    return (
    <div className={estilos.card}>
        <h2 className={estilos.title}>{prod.title}</h2>
        <img className={estilos.img} src={prod.img} alt=""/>
            <p className={estilos.span} >${prod.price}</p>
            <p className={estilos.descrip}>Categoria: {prod.category}</p>
            <p className={estilos.descrip}>Unidades: {prod.cantidad}</p>
            <p className={estilos.descrip}>Precio total: ${prod.price * prod.cantidad} </p>
        <button className={estilos.button} onClick={() => eliminarProd(prod.id)}>Eliminar producto</button>

    </div>
    )
}

export default CartDetail