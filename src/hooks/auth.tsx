
import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api';
import { User } from '../models/index';


interface AuthContextData {
    user: User;
    token: string; 
    login (
        email:string,
        password:string
    ): void; 
}

interface AuthState {
    user: User;
    token: string;
}


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	
    const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        api.defaults.headers.authorization = `Bearer ${token}`;

        if (user && token) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
    });

    const [loading, setLoading] = useState(false);
    
    const [error, setError] = useState(false);

	const login = async ( email: string, password: string ) => {
        console.log("oi1");
        console.log(email, password);
        try{
            const response = await api.post('/sessions/login', {
                email,
                password,
            });

            const { token, user } = response.data;
            console.log("oi2");
            localStorage.setItem('@Project:token', token);
            localStorage.setItem('@Project:user', JSON.stringify(user));
      
            api.defaults.headers.authorization = `Bearer ${token}`;

            setUserData({ token, user });
        } catch(error) {
            console.log(error);
            
        }
    };

    
  
    return (
        <AuthContext.Provider 
            value={
                {
                    login,
                    user: userData.user,
                    token: userData.token
                }
            }
        >
            { children }

        </AuthContext.Provider>
    )
}
        
export const useAuth = ():AuthContextData => {
    const useAuthContext = useContext(AuthContext)
    return useAuthContext;
}