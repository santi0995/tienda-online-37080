import Item from './Item'
import React from 'react'
import estilos from './item.module.css'

const ItemList = ({items}) => {
return (
    <div className={estilos.container} >
        {
        items.map(item => <Item key={item.id} item={item}/>)
        }
    </div>
);
};

export default ItemList

