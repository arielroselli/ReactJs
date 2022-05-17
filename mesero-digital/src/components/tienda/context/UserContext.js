import { createContext, useContext, useEffect, useState } from "react";
import { CarritoContext } from "./CartContext";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
const {} = useContext(CarritoContext)
    const [user, setUser] = useState('');



    return (
        <UserContext.Provider value={{

            user,
            setUser

        }}>

            {children}
            
        </UserContext.Provider>
    );
}
