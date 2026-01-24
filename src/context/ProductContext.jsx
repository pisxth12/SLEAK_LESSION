import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export function  useProduct  () {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const [count , setCount] = useState(0);
    
    const addProduct = () => {
        setCount(count + 1);
    };

    return (
        <ProductContext.Provider value={{count, addProduct}}>
            {children}
        </ProductContext.Provider>
    );

}