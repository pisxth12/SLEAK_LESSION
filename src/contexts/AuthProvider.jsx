import { createContext, useEffect, useState } from "react";
import { login } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const signIn =  async (credentials) => {
    setLoading(true);
    try{
        const response = await login(credentials);
        const data = await response.json();
        setUser(data.user);
        setLoading(false);
        localStorage.setItem("token", data.token);
        
    }catch(error){
        console.log(error);
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setUser({});
        }
        setLoading(false);
  },[]);

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );

}
