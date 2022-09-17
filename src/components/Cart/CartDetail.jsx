import {CartContext} from '../../context/CartContext'
import React from 'react'
import estilos from './cart.module.css'
import { useContext } from 'react'

const CartDetail = ({prod}) => {

    const {eliminarProd} = useContext(CartContext);

    return (
    <div className={estilos.card}>
        <h2 className={estilos.title}>{prod.title}</h2>
<<<<<<< HEAD
        <img className={estilos.img} src={prod.img} alt=""/>
            <p className={estilos.span} >${prod.price}</p>
            <p className={estilos.descrip}>Categoria: {prod.category}</p>
            <p className={estilos.descrip}>Unidades: {prod.cantidad}</p>
            <p className={estilos.descrip}>Precio total: ${prod.price * prod.cantidad} </p>
        <button className={estilos.button} onClick={() => eliminarProd(prod.id)}>Eliminar producto</button>

=======
        <button className={estilos.button} onClick={() => eliminarProd(prod.id)}>Eliminar producto</button>
>>>>>>> 271952cea1a65f257a922906e3375c2f43f5c5a9
    </div>
    )
}

export default CartDetail