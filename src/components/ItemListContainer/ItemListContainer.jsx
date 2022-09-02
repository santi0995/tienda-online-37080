import React, { useEffect, useState } from 'react'

import ItemList from './ItemList'
import { NavLink } from 'react-router-dom';
import estilos from './item.module.css'
import { products } from '../../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  

  const [items, setItems] = useState([]);
  
  const {id} = useParams();


  useEffect(() => {

      const getProducts = new Promise ((res, rej) => {
        const prodFiltrados = products.filter((prod) => prod.category === id);
        setTimeout(() => res(id ? prodFiltrados : products), 500);
      });
  
      getProducts
      .then((products) => {
        setItems(products);
      })
      .catch((error) => {
        console.error(error);
      }); 
    },[id]);
  


  return (
    <section>
      <h3 className={estilos.title}>Productos</h3>
      <div className={estilos.list}>
        <NavLink className={estilos.link} to="/category/Techo" >Techo</NavLink>
        <NavLink className={estilos.link} to="/category/Suelo-Techo" >Suelo - Techo</NavLink>
        <NavLink className={estilos.link} to="/category/Portatil" >Portatil</NavLink>
      </div>
      <ItemList items={items}/>
    </section>
  )
}

export default ItemListContainer