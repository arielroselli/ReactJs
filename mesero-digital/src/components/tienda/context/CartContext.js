import { createContext, useEffect, useState } from "react";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { FirestoreDb } from "../../../";




export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {


  const [carrito, setCarrito] = useState([])
  const [counter, setCounter] = useState(0)
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCounter(carrito.length)
  }, [carrito]);

  const addItem = (agregarProducto) => {
    let carritoAuxiliar = carrito


    if (enCarrito(agregarProducto.id)) {
      let item = carritoAuxiliar.find(element => element.id == agregarProducto.id)?.cantidad + agregarProducto.cantidad
      modificarItem({id:agregarProducto.id,cantidad:item}).then(respuesta => {
        
      })

    } else {
      setCarrito([...carrito, agregarProducto])
    }
    setCounter(carrito.length)
  }

  const modificarItem = async (evento) => {
    let copiaCarrito = carrito
    if (enCarrito(evento.id)) {
      return new Promise(respuesta => {
        let indexOf = copiaCarrito.findIndex(element => element.id == evento.id)
        copiaCarrito[indexOf].cantidad = evento.cantidad
        copiaCarrito[indexOf].subtotal = parseFloat((evento.cantidad) * parseFloat(evento.precio))
        setCarrito(copiaCarrito)
        respuesta(carrito[indexOf].cantidad == evento.cantidad)

      })

    }
  }
  const enCarrito = (id) => {
    return carrito.findIndex(element => element.id === (id)) >= 0 ? true : false;
  }

  const removeItem = (id) => {
    let carritoAux = carrito
    if (enCarrito(id)) {
      let index = carritoAux.findIndex(element => element.id === (id))
      carritoAux.splice(index, 1)
      setCarrito(carritoAux)
    }
    setCounter(carrito.length)
  }

  const borrarTodo = (id) => {
    setCarrito([])
  }

  const carritoDuplicado = () => {



  }

  const toggleCanvas = () => {
    let canvas = document.getElementById("canvasCarrito")
    if (canvas.style.display === "none") { canvas.style.display = "flex" }
    else { canvas.style.display = "none" }
  }

  const subtotal = (item) => {
    console.log(subtotal)
    return (
      (item.precio * item.cantidad)

    )
  }

  

  const crearOrden = () => {

    setCargando(true)

    const datosOrden = {
      items: carrito,
      comprador: {
        nombre: 'Ariel Roselli',
        telefono: '3434345363',
        email: 'arieelroselli@gmail.com'
      },
      total: 'total'
    }


    const ids = carrito.map(item => item.id)

    const batch = writeBatch(FirestoreDb)

    const collectionRef = collection(FirestoreDb, 'comidas')

    const sinStock = []


    getDocs(query(collectionRef, where(documentId(), 'in', ids)))

      .then(respuesta => {
        respuesta.docs.forEach(doc => {
          const dataDoc = doc.data()

          const itemCantidad = carrito.find(item => item.id === doc.id)?.cantidad

          if (dataDoc.stock >= itemCantidad) {
            batch.update(doc.ref, { stock: dataDoc.stock - itemCantidad })
          } else {
            sinStock.push({ id: doc.id, dataDoc })
          }
        })

      }).then(() => {

        if (sinStock.length === 0) {
          const collectionRef = collection(FirestoreDb, 'ordenes')
          return addDoc(collectionRef, datosOrden)
        } else {
          return Promise.reject({ nombre: 'sinStockError', producto: sinStock })
        }

      }).then(({ id }) => {

        batch.commit()
        console.log(`El id de la orden es ${id}`)


      }).catch(error => {

        console.log(error)
      }).finally(() => {

        setCargando(false)
      })

  }

  return (
    <CarritoContext.Provider value={{
      carrito,
      addItem,
      counter,
      removeItem,
      borrarTodo,
      toggleCanvas,
      subtotal,
      crearOrden
    }}>

      {children}
    </CarritoContext.Provider>
  )
}
