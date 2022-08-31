import ItemCount from '../Counter/ItemCount'
import React from 'react'
import estilos from './item.module.css'

const Item = ({item}) => {

    const onAdd = (param) => {
        console.log(param); 
};

return (
    <div className={estilos.container}>
        <div className={estilos.card}>
            <p>{item.title}</p>
            <img className={estilos.img} src={item.img} alt=""/>
            <p className={estilos.span} >${item.price}</p>
            <p>Categoria: {item.category}</p>
            <button className={estilos.button}>Ver detalle del producto</button>
            <p>Stock Disponible: {item.stock}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
)
}

export default Item;