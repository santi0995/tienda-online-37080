import { Route, Routes } from "react-router-dom";

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
        </Routes>
    </main>
  );
};

export default Main;
