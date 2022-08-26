import Item from './Item'
import React from 'react'

const ItemList = ({items}) => {
return (
    <div >
        {items.map((item) =>{
        return <Item key={item.id} item={item}/>;
        })}
    </div>
);
};

export default ItemList

