
import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api';
import { User } from '../models/index';


interface AuthContextData {
    user: User;
    token: string; 
    login(email:string,
        password:string): void; 
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider: React.FC = ({ children }) => {
    const login = useCallback( async (email: string, password: string) => {
        const response = await api.post('/sessions/login', {
            email,
            password
        });
        console.log(response.data);
    }, []);
    return (
        <AuthContext.Provider value={{login}}>
            { children }
        </AuthContext.Provider>
    )
}
        
export const useAuth = ():AuthContextData => {
    const context = useContext(AuthContext)
    return context
}