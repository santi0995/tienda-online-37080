import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import estilos from "../ItemListContainer/item.module.css";
// import {db} from '../../firebaseConfig';
import { products } from "../../mock/products";
import { useParams } from "react-router-dom";

// import {collection, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);

  const idProdNum = parseInt(id);

  //const idProdNum = +idProd;

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      const item1 = products.find((producto) => producto.id === idProdNum);

      setTimeout(() => res(item1), 500);
    });

    getItem
      .then((products) => {
        setItem(products);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
      return () =>{
        setisLoading(true);
    }

  }, [idProdNum]);

  return (
    <section>
      {
      isLoading ? (
        <div class={estilos.loader}>Loading...</div>
      ) : <>
            <ItemDetail item={item} />)
      </>
    }
    </section>
  );
};


export default ItemDetailContainer;







// const itemCollection = collection(db, 'products')
// const ref = doc(itemCollection, id);
// getDoc(ref)
// .then((res)=>{
//     setItem({
//         id: res.id,
//         ...res.data()
//     })
// })
