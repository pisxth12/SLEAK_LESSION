import { createContext } from "react";
import { Login } from "../api/api";

const AuthContext = createContext();export const AuthProvider = ({ children }) => {
    const [username, setUername] = useState("");
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
   
  

    const login =  async () => {
        try{

            const res = await Login(username,password);
            localStorage.setItem("token",res.token);
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    const values = {
        loading,
        username,
        password,
        setUername,
        setPassword,
        login,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
