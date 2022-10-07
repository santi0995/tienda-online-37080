import React from 'react'
import estilos from './about.module.css'

const GridImages = () => {
  return (
    <div className={estilos.gridContainer}>
      <img className={estilos.item} src='../img/banner3.jpeg' alt=''/>  
      <img className={estilos.item} src='../img/banner4.jpeg' alt=''/>
      <div className={estilos.gridRows}>
      <img className={estilos.item2} src='../img/item3.jpeg' alt=''/>
      <img className={estilos.item2} src='../img/item4.jpeg' alt=''/>
      </div>
      <div className={estilos.gridRows}>
      <img className={estilos.item2} src='../img/item5.jpeg' alt=''/>
      <img className={estilos.item2} src='../img/item6.jpeg' alt=''/>
      </div>
      <img className={estilos.item} src='../img/item7.png' alt=''/>
      <img className={estilos.item} src='../img/item8.jpeg' alt=''/>
      </div>
  )
}

export default GridImages