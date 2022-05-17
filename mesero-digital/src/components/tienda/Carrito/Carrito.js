/* import { useContext, useState } from "react";
import { CarritoContext } from "../context/CartContext";
import './carrito.css'


const Carrito = () => {

  const { carrito, subtotal } = useContext(CarritoContext);

  return (


    <div className="carritoEstilo">
      <h1>Carrito</h1>
      {carrito.map((item) =>

      (
        <table className="tablaCarrito">


          <th>{item.nombre}</th>
          <tbody>{item.cantidad}</tbody>
          <tfoot>{subtotal}</tfoot>
          



        </table>
      )
      )}
    </div>


  )
}

export default Carrito */