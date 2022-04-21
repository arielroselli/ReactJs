import React, { useEffect, useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CarritoContext } from '../context/CartContext';





const BotonCarrito = () => {
  const [abrir, setAbrir] = useState(false) 
  const [cerrar, setCerrar] = useState(false) 


  const {listaCarrito} = useContext(CarritoContext);


  
    const AbrirModal = () => {
        setAbrir({ abrir: true});
    }

    const CerrarModal = () => {
        setCerrar({ cerrar: true});
    }

        return (
            <>
                <Button color="success" onClick={AbrirModal}>
                    <ShoppingCartIcon /> 
                    {listaCarrito}
                </Button>


                <Modal size='xl' isOpen={abrir}>

                    <ModalHeader> Carrito de compras </ModalHeader>

                    <ModalBody>
                        <Table dark>
                            <thead>
                                <tr>

                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><input type="checkbox" /* value={comida.id} *//></td>
                                    <td> </td>
                                    <td> </td>

                                </tr>
                            </tbody>
                        </Table>

                    </ModalBody>

                    <ModalFooter>
                        <Button>Terminar compra</Button>
                        <Button onClick={CerrarModal}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    
}

export default BotonCarrito;


 