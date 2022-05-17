import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../tienda/context/CartContext';
import './administracion.css'


const PanelPedidos = () => {

  const {removeItem, borrarTodo, carrito, counter, subtotal, total, crearOrden } = useContext(CarritoContext);




  return(
    <div className="panelPedidos">
 
                    <h1>Lista de pedidos</h1> 

                {counter === 0?<h3 className="mx-auto">Sin pedidos</h3>:
                <>
                <div className="list">
                    <div className="d-flex row">
                        <div className="container row my-2">
                                    <div className="col-3 text-center">Nombre</div>
                                    <div className="col-5 text-center">Cantidad</div>
                                    <div className="col-3 text-end">Precio</div>
                                    <div className="col-1 text-center"></div>
                        </div>

                                <hr className="mx-auto" style={{width:"90%",color:"rgba(0, 0, 0, 0.2)"}}/>
                        {
                        carrito.map(item =>

                            <>
                                <div className="row container" key={"cart"+item.id} style={{position:"relative"}}>
                                    <div className="col-3 my-auto text-center text-nowrap">{item.nombre}</div>
                                    <div className="col-5 my-auto text-center">
                                        {item.cantidad}
                                    </div>
                                    {/* SUBTOTAL */}
                                    <div className="col-3 my-auto text-end">
                                        ${item.cantidad*item.precio}
                                    </div>
                                    {/* REMOVER ITEM */}
                                    <div className="col-1 my-auto text-center d-flex">
                                        <p className="btnCart" onClick={()=>{removeItem(item.id)}}  ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></p>
                                    </div>

                                    {/* DETALLE */}
                                        <Link className="linkDetalle" to={`/detalles/${item.id}`}>Detalles</Link>
                                </div>

                                <hr className="mx-auto" style={{width:"90%",color:"rgba(0, 0, 0, 0.2)"}}/>
                            </>
                        )
                        }
                    </div>
                </div>
                <div className="row ">
                        <div className="col-3 text-center my-auto">Total</div>
                        <div className="col-5 text-center my-auto"></div>
                        <div className="col-3 text-end my-auto">${(carrito.length * subtotal)}</div>
                        <div className="col-1 text-center my-auto"></div>
                </div>
                <div className="foot mt-auto mb-4 footerCarrito">
                    <button className="btn btn-danger ms-3"  onClick={()=>{borrarTodo()}} ><svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg></button>
                 <button className="col btn btn-success " onClick={() => crearOrden()}>Enviar pedido</button> 

                </div>
                </>

                }

            
                   
        
            
   
    </div>
  )
}



export default PanelPedidos