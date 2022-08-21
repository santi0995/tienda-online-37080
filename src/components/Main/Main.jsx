import React from 'react'
import estilos from './main.module.css'

const Main = ({alumno}) => {  

  return (
    <main >
      <section>
      <h2 className={estilos.title1}>Bienvenido {alumno.nombre}</h2>
      </section>
    </main>
  );
};

export default Main