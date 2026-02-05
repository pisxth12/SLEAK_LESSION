import { createContext, useEffect, useState } from "react";
import { getAllUsers } from "../api/api";
import { User } from "lucide-react";

export const UserContext = createContext();

export const UserProvider = ({children}) =>  {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        fetchUsers();
    },[]);

    const fetchUsers = async () => {
        setLoading(true);
        try{
            const data = await getAllUsers();
            setUsers(data);
        }catch(err){
            setError(err.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }
    const values = {
        users,
        loading,
        error,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
