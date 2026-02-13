import { AuthProvider } from "../contexts/AuthProvider";
import { CartProvider } from "../contexts/CartProvider";

const AppProvider = ({children}) => {
    return (
        <AuthProvider>
                <CartProvider>
                    {children}
                </CartProvider>
        </AuthProvider>
    )
}

export default AppProvider;