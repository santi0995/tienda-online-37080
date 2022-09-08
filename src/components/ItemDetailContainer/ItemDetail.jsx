import ItemCount from '../Counter/ItemCount'
import {Link} from 'react-router-dom'
import React from 'react'
import estilos from './itemdetail.module.css'
import { useState } from 'react'

const ItemDetail = ({item}) => {
    
    
    const [cantidad, setCantidad] = useState(0)
    const onAdd = (cantidad) => {
        setCantidad(cantidad);
    };


    return (
        <div>
            <h2 className={estilos.title}>Detalle del producto</h2>
            <div className={estilos.card}>
            <p>{item.title}</p>
            <img className={estilos.img} src={item.img} alt=""/>
            <div className={estilos.text}>
                <p className={estilos.span} >${item.price}</p>
                <p className={estilos.descrip}>{item.descripcion}</p>
                {cantidad === 0 ? 
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>                   
                : <Link to="/cart">
                    <button className={estilos.button}>Ir al carrito</button></Link>
                }
                <p>Categoria: {item.category}</p>
                <p>Stock Disponible: {item.stock} unidades</p>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail;