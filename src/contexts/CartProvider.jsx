import { createContext, useContext, useState } from "react";
import { getProducts } from "../services/productService";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const { user } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (!user) {
      navigate("/login");
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
            existingProduct.quantity += 1;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const values = {
    products,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    loading,
  };


  return (
    <cartContext.Provider
      value={values}
    >
      {children}
    </cartContext.Provider>
  )
}