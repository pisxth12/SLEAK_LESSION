import { AuthProvider } from "../context/AuthContext"
import { CartProvider } from "../context/CartContext"
import { ProductProvider } from "../context/ProductContext"
import { UserProvider } from "../context/UserContext"

const AppProvider = ({children}) => {
    return (
        <ProductProvider>
            <UserProvider>
                <CartProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </CartProvider>
            </UserProvider>
        </ProductProvider>
    )
}

export default AppProvider;