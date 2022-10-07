import {CartContext} from '../../context/CartContext'
import React from 'react'
import estilos from './cw.module.css'
import { useContext } from 'react';

export const CartWidget = () => {

const {totalUnidades} = useContext(CartContext)

  return (
    <div className={estilos.container}>      
      <span  className= "material-symbols-outlined">
  shopping_cart 
  </span>
  <span>{totalUnidades() === 0 ? "" : totalUnidades()}</span>
    </div>
  )
};