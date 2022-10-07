import { Route, Routes } from "react-router-dom";

import About from "../About/About";
import Cart from "../Cart/Cart";
import Checkout from '../Checkout/Checkout'
import Form from '../Form/Form'
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import React from "react";

const Main = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/checkout" element ={<Checkout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/form" element={<Form isinContact={true}/>}/>
        </Routes>
    </main>
  );
};

export default Main;
