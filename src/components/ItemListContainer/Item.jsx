import ItemCount from '../Counter/ItemCount'
import { Link } from 'react-router-dom'
import React from 'react'
import estilos from './item.module.css'

const Item = ({item}) => {

    const onAdd = (param) => {
        console.log(param); 
};

return (
        <div className={estilos.card}>
            <p>{item.title}</p>
            <img className={estilos.img} src={item.img} alt=""/>
            <p className={estilos.span} >${item.price}</p>
            <p>Categoria: {item.category}</p>
            {/* <p className={estilos.descrip}>{item.descripcion}</p> */}
            <Link to={`/item/${item.id}`}>
                <button className={estilos.button}>Ver detalle del producto</button>
            </Link>
            <p>Stock Disponible: {item.stock}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
)
}

export default Item;