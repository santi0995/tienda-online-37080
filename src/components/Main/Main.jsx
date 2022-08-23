import React from 'react'
import Button from '../Button/Button';
import estilos from './main.module.css'

const Main = ({alumno}) => {  

  return (
    <main>
      <section>
        <img className={estilos.banner} src="bannerP.jpg" alt=""/>
      {/* <h2 className={estilos.title1}>Bienvenido {alumno.nombre}</h2> */}
      {/* <Button text= "Log out" variant= "secondary"/> */}
      </section>
    </main>
  );
};

export default Main