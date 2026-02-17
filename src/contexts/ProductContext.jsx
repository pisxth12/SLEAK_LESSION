import { createContext, useEffect, useState } from "react"
import { getProducts } from "../services/productService";

export  const productsContext = createContext();


export const productsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
          setLoading(true);
          const res = await getProducts();
        
          setProducts(res.data.slice(0, 6));
          setError(null);
        } catch (err) {
          setError(err.message);
          console.error('Error fetching products:', err);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        fetchProducts();
      }, []);   
      
      const values = {
        products,
        loading,
        error
      };


    return (
        <productsContext.Provider value={values}>
            {children}
            
            </productsContext.Provider>
    );

}

export default productsProvider;