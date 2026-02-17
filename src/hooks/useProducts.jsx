import { useContext } from "react"
import { productsContext } from "../contexts/ProductContext"

export const useProducts = () => {
    const context = useContext(productsContext);
    if(!context){
        throw new Error("useProducts must be used within a ProductProvider");
    }
    return context;

}