import React, { useContext, createContext, useState } from "react";

export const userContext = createContext()

export const useUserContext = () => useContext(userContext)

export const UserProvider = ({children}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    return (
        <userContext.Provider value={{ login, setLogin, password, setPassword, email, setEmail }}>
            {children}
        </userContext.Provider>
    )
}