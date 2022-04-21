import { children, createContext, useState, useMemo } from "react";




export const DataContext = createContext();
export const DataProvider = ({ children }) => {

    const [comidas, setComidas] = useState()
    const [agregar, setAgregar] = useState(0)




    return (
        <DataContext.Provider value={{

            comidas,
            setComidas,
            agregar,
            setAgregar,
            
        }}>
            {children}

        </DataContext.Provider>
    )
}
