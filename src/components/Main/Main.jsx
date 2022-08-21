import React from 'react'
import estilos from './main.module.css'

const Main = ({alumno}) => {  

  return (
    <main >
      <section>
      <h1 className={estilos.title1}>Bienvenido {alumno.nombre}</h1>
      </section>
    </main>
  );
};

export default Main