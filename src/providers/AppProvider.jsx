import { AuthProvider } from "../contexts/AuthProvider";
import ProductContext from "../contexts/ProductContext";

const AppProvider = ({children}) => {
    return (
       <ProductContext>
        <AuthProvider>
            {children}
        </AuthProvider>
       </ProductContext>
    )
}

export default AppProvider;