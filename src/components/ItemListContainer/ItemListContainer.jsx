import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from "./ItemList";
import Landing from "../Main/Landing";
import { NavLink } from "react-router-dom";
import {db} from '../../firebaseConfig';
import estilos from "./item.module.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([])

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const q = id ? query(itemCollection, where("category", "==", id)) : itemCollection
    const categoryCollection = collection(db, "categorias");
    
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

   getDocs(categoryCollection)
   .then((res)=>{
    const categorias =
    res.docs.map((cat)=>{
      return{
        id: cat.id,
        ...cat.data()
      }
    })
    setCategories(categorias)
   })
  }, [id])
  
  ;

  return (
    <section className={estilos.content}>
      <Landing/>
      <h3 className={estilos.title}>Productos</h3>
      {
        isLoading ? (
          <div className={estilos.loader}>Loading...</div>
          ) : 
          <section className={estilos.list}>
              <nav className={estilos.nav}>
          {
            categories.map((cat)=>(
                    <NavLink className={estilos.link} to={`${cat.route}`}>{cat.name}</NavLink>     
                    ))
                  }
            </nav>
         <ItemList items={items} />
        </section>
      }
    </section>
  );
};

export default ItemListContainer;

