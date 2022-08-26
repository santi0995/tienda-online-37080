import React, { useEffect, useState } from 'react'

import ItemList from './ItemList'
import { products } from '../../mock/products';

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });

    getProducts
    .then((products) => {
      setItems(products);
    })
    .catch((error) => {
      // console.log(error);
    })
    .finally(() => {
      // console.log("Finally");
    });
  },[]);


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer