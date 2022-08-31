import React, { useEffect, useState } from "react"

import ItemDetail from './ItemDetail'
import { products } from '../../mock/products'

const ItemDetailContainer = () => {
    
    const onAdd = (param) => console.log(param); 
    
    
    const [item, setItem] = useState({});
    
    useEffect(() => {
        const getItem = new Promise ((res, rej) => {
            
            const item1 = products.find(producto => producto.id ===  1);
            setTimeout(() => res(item1), 2000);
        });

        getItem
        .then((products) => {
            setItem(products);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(()=>{

        });
    },[]);

    
    return (
        <ItemDetail item={item} onAdd={onAdd}/>
    )
}

export default ItemDetailContainer