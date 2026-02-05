import { createContext, useState } from "react";
import { Login } from "../api/api";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    try {
      const data = await Login(username, password);
      localStorage.setItem("token", data.token);
      setUsers(data.user);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const values = {
    loading,
    users,
    login,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
