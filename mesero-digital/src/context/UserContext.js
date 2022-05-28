import { createContext, useContext, useEffect, useState } from "react";
import { CarritoContext } from "./CartContext";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {

const {} = useContext(CarritoContext)
    const [user, setUser] = useState('');
    const [correo, setCorreo] = useState('');


    return (
        <UserContext.Provider value={{

            user,
            setUser,
            correo,
            setCorreo

        }}>

            {children}
            
        </UserContext.Provider>
    );
}
