// import Button from '../Button/Button';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import React from 'react'
import estilos from './main.module.css'

const Main = () => {  

  return (
    <main>
      <section>
        <img className={estilos.banner} src='bannerP.jpg' alt=""/>
        <ItemListContainer/>
      </section>
    </main>
  );
};

export default Main