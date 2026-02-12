import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState(()=> {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
});

    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
        if(existingProduct){
            setCart(cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
        }else{
            setCart([...cart, {...product, quantity: 1}])
        }
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
          localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])
  
    return (
      <CartContext.Provider value={{ cart, setCart, addToCart}}>
        {children}
      </CartContext.Provider>

    );
 }