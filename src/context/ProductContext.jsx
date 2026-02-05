
import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/api";

export const ProductsContext = createContext();

export const ProductProvider = ({children}) => {
    const [products , setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(()=> {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {
        setLoading(true);
        try{
        const data = await getAllProducts();
        setProducts(data);
        }catch(err){
            setError(err.message);
            setLoading(false);
        }finally{
            setLoading(false);    
        }
    }
    


    const values = {
        products,
        error,
        loading,
      
    }

   return (
     <ProductsContext.Provider value={values}>
        {children}
    </ProductsContext.Provider>
   )

}