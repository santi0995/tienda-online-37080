import React, { useEffect, useState } from "react";
import {collection, getDocs, query, where} from 'firebase/firestore';

import ItemList from "./ItemList";
import { NavLink } from "react-router-dom";
import {db} from '../../firebaseConfig';
import estilos from "./item.module.css";
// import { products } from "../../mock/products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const q = id ? query(itemCollection, where("category", "==", id)) : itemCollection

    
     getDocs(q)
     .then((res) => {
     const products = res.docs.map((prod) => {
       return{
         id: prod.id,
         ...prod.data(),
       };
     });
     setItems(products);
     setIsLoading(false);
   })
   .catch((error)=>{
     console.log(error);
   })
  }, [id]);

  return (
    <section>
      {
        isLoading ? (
          <div className={estilos.loader}>Loading...</div>
        ) : <>
        <h3 className={estilos.title}>Productos</h3>
      <div className={estilos.list}>
        <NavLink className={estilos.link} to="/">
          Todos
        </NavLink>
        <NavLink className={estilos.link} to="/category/Techo">
          Techo
        </NavLink>
        <NavLink className={estilos.link} to="/category/Suelo-Techo">
          Suelo - Techo
        </NavLink>
        <NavLink className={estilos.link} to="/category/Portatil">
          Portatil
        </NavLink>
      </div>
      <ItemList items={items} />
        </>
      }
    </section>
  );
};

export default ItemListContainer;



// const getProducts = new Promise((res, rej) => {
//   const prodFiltrados = products.filter((prod) => prod.category === id);
//   setTimeout(() => res(id ? prodFiltrados : products), 500);
// });

// getProducts
//   .then((products) => {
//     setItems(products);
//     setisLoading(false);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// return () =>{
// setisLoading(true);
//}
