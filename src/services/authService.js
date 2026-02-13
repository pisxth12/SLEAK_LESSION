import api from "../services/api";

export const login = (credentials) =>{
        return api.post('/auth/login', credentials);
}



