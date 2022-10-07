import GridImages from './GridImages'
import React from 'react'
import estilos from './about.module.css'

const About = () => {
  return (
    <div className={estilos.container}>
      <div className={estilos.imgContainer}>
        <img className={estilos.banner} src='../img/sobrenosotros.jpeg' alt=''/>
        <h2 className={estilos.title}>Sobre<span> Nosotros</span></h2> 
      </div>
      <div className={estilos.textContainer}>
        <p className={estilos.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi veniam perferendis, eligendi temporibus excepturi ipsum aut doloribus consequatur, fugiat labore quidem unde culpa quia exercitationem atque itaque animi similique tempore quasi delectus eaque repellendus maiores?
        </p>
      </div>
      <GridImages/>
      <div className={estilos.textContainer1}>
      <h2 className={estilos.subTitle}>History</h2>
      <div className={estilos.history}>
      <p className={estilos.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi veniam perferendis, eligendi temporibus excepturi ipsum aut doloribus consequatur, fugiat labore quidem unde culpa quia exercitationem atque itaque animi similique tempore quasi delectus eaque repellendus maiores?
        </p>
      <p className={estilos.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi veniam perferendis, eligendi temporibus excepturi ipsum aut doloribus consequatur, fugiat labore quidem unde culpa quia exercitationem atque itaque animi similique tempore quasi delectus eaque repellendus maiores?
        </p>
      </div>
        </div>
        <img className={estilos.logo} src="Logoclimaservice.png" alt="" />
    </div>
  )
}

export default About