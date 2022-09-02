import React, { useEffect, useState } from "react"

import ItemDetail from './ItemDetail'
import { products } from '../../mock/products'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {


    const onAdd = (param) => console.log(param); 
    const [item, setItem] = useState({});
    const {id} = useParams();

    const idProdNum = parseInt(id);

    //const idProdNum = +idProd;

    
    useEffect(() => {
        const getItem = new Promise ((res, rej) => {
            
            const item1 = products.find(producto => producto.id ===  idProdNum);

            setTimeout(() => res(item1), 500);
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
    },[idProdNum]);

    
    return (
        <ItemDetail item={item} onAdd={onAdd}/>
    )
}

export default ItemDetailContainer