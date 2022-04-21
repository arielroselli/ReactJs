import { children, createContext, useState } from "react";




export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {

    const [listaCarrito, setListaCarrito] = useState([])
    const [carrito, setCarrito] = useState([])

    console.log(carrito)


    const addItem = (agregarProducto) =>{
        setCarrito([...carrito, agregarProducto])
    }

    const getCantidad = () => {
        let count = 1
      carrito.forEach(prod => {
          count += prod.Cantidad
      })
    } 

    return (
        <CarritoContext.Provider value={{

            listaCarrito,
            carrito,
            setListaCarrito,
            addItem,
            getCantidad,
            
        
          }}>  {children}

        </CarritoContext.Provider>
    )
}
