import { useContext } from "react"
import { cartContext } from "../contexts/CartProvider";

export const useCart = () => {
    const context = useContext(cartContext);
    if(!context) return null;
    return context;

}