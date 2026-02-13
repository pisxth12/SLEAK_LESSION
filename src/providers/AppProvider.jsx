import { AuthProvider } from "../contexts/AuthProvider";

const AppProvider = ({children}) => {
    return (
        <AuthProvider>
                {children}
        </AuthProvider>
    )
}

export default AppProvider;