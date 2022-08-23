import React from 'react'
import estilos from './button.module.css'

const Button = (props) => {
  return (
    <button className={estilos[props.variant]}>{props.text}</button>
  )
}

export default Button