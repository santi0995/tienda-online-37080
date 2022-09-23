import React, { useEffect, useState } from "react";
import {collection, doc, getDoc} from 'firebase/firestore'

import ItemDetail from "./ItemDetail";
import {db} from '../../firebaseConfig';
import estilos from "../ItemListContainer/item.module.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const itemCollection = collection(db, 'productos')
    const ref = doc(itemCollection, id);
      getDoc(ref)
      .then((res)=>{
       setItem({
         id: res.id,
        ...res.data()
     })
     setisLoading(false)
 })
  }, [id]);

  return (
    <section>
      {
      isLoading ? (
        <div className={estilos.loader}>Loading...</div>
      ) : <>
            <ItemDetail item={item} />
      </>
    }
    </section>
  );
};


export default ItemDetailContainer;




// const getItem = new Promise((res, rej) => {
//   const item1 = products.find((producto) => producto.id === idProdNum);

//   setTimeout(() => res(item1), 500);
// });

// getItem
//   .then((products) => {
//     setItem(products);
//     setisLoading(false);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   return () =>{
//     setisLoading(true);
// }






