import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

import React from 'react'
import {db} from '../../firebaseConfig';
import estilos from './form.module.css'
import { useState } from 'react'

const Form = ({cart, total, clearCart , handleId,isinContact}) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [enviar, setEnviar] = useState(false);

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
        })
    };


    const contactSubmit = (e) => {
        e.preventDefault();
        const contact = {
            Nombre: nombre,
            Email: email,
            Text: text,
        };

        const ordersCollection = collection(db, "contacts");
        addDoc(ordersCollection, contact)
        .then((res)=>{
            setEnviar(true)
        })
    };

    


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

    const handleChangeText = (event) => {
        setText(event.target.value);
    };


  return (
    <>
    {
        !isinContact ?(
            <div className={estilos.form}>
        <div className={estilos.head}>
        <h1>Finaliza tu compra</h1>
        <h2>Introduce tus datos</h2>
        </div>
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
                    name="text"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <button className={estilos.button}>Enviar</button>
            </form>
        </div>
        ) : !enviar ? (
            <section className={estilos.contact}>
            <h1 className={estilos.heading}> <span>Contacta con</span>  nosotros </h1>
            <div className={estilos.row}>
                <iframe title='map' className={estilos.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.036666639402!2d-0.6829217846588!3d37.97627360831378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6307558b72bc37%3A0x7a53e8610c6bbf2c!2sC.%20de%20Pedro%20Lorca%2C%204%2C%2003181%20Torrevieja%2C%20Alicante!5e0!3m2!1ses!2ses!4v1649281706917!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                <form action="" onSubmit={contactSubmit}>
                    <h3>Mantente en contacto</h3>
                    <div className={estilos.inputBox}>
                        <input 
                        type="text" 
                        placeholder="Nombre..." 
                        name="name"
                        value={nombre}
                        onChange={handleChangeNombre}/>
                    </div>
                    <div className={estilos.inputBox}>
                        <input 
                        type="email" 
                        placeholder="Correo electrónico..." 
                        name="email"
                        value={email}
                        onChange={handleChangeEmail}/>
                    </div>
                    <div className={estilos.inputBox}>
                        <textarea 
                        placeholder="Mensaje:" 
                        name="message"
                        value={text}
                        onChange={handleChangeText}></textarea>
                    </div>
                    <button className={estilos.button} >  
                         Contacta ahora
                    </button>          
                </form>
            </div>
        </section>
        ) : <h1 className={estilos.title2}>Gracias por contactarnos <span className={estilos.numeroId}>{nombre}</span> en breve nos pondremos en contacto contigo</h1>
    }
    </>
);
};

export default Form