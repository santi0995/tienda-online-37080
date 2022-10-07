import {CartContext} from '../../context/CartContext'
import ItemCount from '../Counter/ItemCount'
import {Link} from 'react-router-dom'
import React from 'react'
import estilos from './itemdetail.module.css'
import { useContext } from 'react'
import { useState } from 'react'

const ItemDetail = ({item}) => {
    
    
    const [cantidad, setCantidad] = useState(0)
    const {addToCart, obtenerCantidadProducto} = useContext(CartContext);
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addToCart(item, cantidad);
    };

    const qty = obtenerCantidadProducto(item.id)

    return (
        <div className={estilos.sectionContainer}>
            <h2 className={estilos.title}>Detalle del producto</h2>
            <div className={estilos.card}>
            <p>{item.title}</p>
            <img className={estilos.img} src={item.img} alt=""/>
            <div className={estilos.text}>
                <p className={estilos.span} >${item.price}</p>
                <p className={estilos.descrip}>{item.descripcion}</p>
                {cantidad === 0 ? 
                <ItemCount stock={item.stock} initial={qty} onAdd={onAdd}/>                   
                :<div className={estilos.container}>
                <Link to="/cart">
                    <button className={estilos.button}>Ir al carrito</button>
                    </Link>
                 <Link to="/">
                    <button className={estilos.button}>Seguir comprando</button>
                    </Link>
                </div> 
                }
                <p className={estilos.text2}>Categoria: {item.category}</p>
                <p className={estilos.text2}>Stock Disponible: {item.stock} unidades</p>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail;