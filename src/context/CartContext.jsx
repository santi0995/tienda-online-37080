import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) =>{
        if (isInCart(item.id)) {
            sumarCantidad(item,cantidad);
        } else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) =>{
        return cart.some((prod) => prod.id === id)
    }

    const sumarCantidad = (item, cantidad) => {
        const cartUpdate = cart.map((prod) => {
            if(prod.id === item.id){
                const prodUpdate ={
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return prodUpdate
            } else {
                return prod;
            }
        });
        setCart(cartUpdate);
    }

    const eliminarProd = (id) =>{
    setCart(cart.filter((prod)=> prod.id !== id));    
    }

    console.log(cart);

    const clearCart = () =>{
        setCart([]);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clearCart, eliminarProd}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider