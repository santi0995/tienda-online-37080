import { Route, Routes } from "react-router-dom";

import Cart from "../Cart/Cart";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Landing from "./Landing";
import React from "react";

const Main = () => {
  return (
    <main>
      <Landing/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element ={<Cart/>}/>
        </Routes>
    </main>
  );
};

export default Main;
