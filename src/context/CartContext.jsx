import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(
        ()=> {const saved = localStorage.getItem("cart");
         return saved ? JSON.parse(saved) : [];
        }
    );
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])

    const addToCart = (product) => {
        const existing = cart.find((item) => item.id === product.id);
        if(existing){
            setCart(
                cart.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity +1} : item
                )
            );
        }else{
            setCart([...cart, {...product, quantity: 1}])
        }
    }
    
    const removeFromCart = (product) => {
        setCart(cart.filter((item) => item.id !== product.id));
    }

    
    const values = {
        cart,
        addToCart,
        removeFromCart,
    }

    

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}