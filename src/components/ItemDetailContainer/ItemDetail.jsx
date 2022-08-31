import ItemCount from '../Counter/ItemCount'
import React from 'react'
import estilos from './itemdetail.module.css'

const ItemDetail = ({item, onAdd}) => {

    return (
        <div className={estilos.container}>
        <div className={estilos.card}>
            <p>{item.title}</p>
            <img className={estilos.img} src={item.img} alt=""/>
            <div className={estilos.text}>
                <p className={estilos.span} >${item.price}</p>
                <p>Categoria: {item.category}</p>
                <p>Stock Disponible: {item.stock}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
    )
}

export default ItemDetail;