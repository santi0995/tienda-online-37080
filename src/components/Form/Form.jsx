import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

import React from 'react'
import {db} from '../../firebaseConfig';
import estilos from './form.module.css'
import { useState } from 'react'

const Form = ({cart, total, clearCart ,handleId}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: {nombre, apellido, direccion, email},
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order)
        .then((res)=>{
            handleId(res.id);
            clearCart();
            // updateProd();
        })
    };
    
    // const updateProd = () =>{
    //     const orderDoc = doc(db, "orders", )
    //     updateDoc(orderDoc, {})
    // }


    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };


  return (
    <div className={estilos.form}>
            <form className={estilos.form1} action="" onSubmit={handleSubmit}>
                <input className={estilos.text}
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input className={estilos.text}
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <input className={estilos.text}
                    type="text"
                    placeholder="Dirección..."
                    name="direccion"
                    value={direccion}
                    onChange={handleChangeDireccion}
                />
                <input className={estilos.text}
                    type="email"
                    placeholder="Correo Electrónico..."
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button className={estilos.button}>Enviar</button>
            </form>
        </div>
  )
}

export default Form