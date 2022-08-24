import { useState } from "react"
import estilos from './itemcount.module.css'


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const sumar = () =>{
        if (count < stock) {
            setCount(count + 1); 
        } else {
            alert("Límite de stock disponible")
        }
}

    const restar = () =>{
        if (count === 1) {
            alert("No puedes dejar el carrito vacio")
        } else {
            setCount(count - 1);
        }
}

    return(
        <div className={estilos.countContainer}>
        <button className={estilos.button} onClick={sumar}>+</button>
        <p className={estilos.count} >{count}</p>
        <button className={estilos.button} onClick={restar}>-</button>
        <button className={estilos.button2}onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount