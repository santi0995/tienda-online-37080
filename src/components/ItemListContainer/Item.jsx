import { Link } from 'react-router-dom'
import React from 'react'
import estilos from './item.module.css'

const Item = ({item}) => {


return (
        <div className={estilos.card}>
            <p>{item.title}</p>
            <div className={estilos.contenedorImg}>
            <img className={estilos.img} src={item.img} alt=""/>
            </div>
            <p className={estilos.span} >${item.price}</p>
            <p>Categoria: {item.category}</p>
            <Link to={`/item/${item.id}`}>
                <button className={estilos.button}>Ver detalle del producto</button>
            </Link>
            <p>Stock Disponible: {item.stock}</p>
        </div>
)
}

export default Item;