
import { useContext, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemContador';

import { CarritoContext } from '../../context/CartContext';
import Cargando from './assets/spinner/Spinner';


const Item = ({ data }) => {

    

    const {addItem, cargando, setCargando} = useContext(CarritoContext);
    const plato = data

    const handleClick = (cant) => {

        addItem({...plato, cantidad: cant})

    }



    if (cargando){
        return (
            <Cargando/>
        )
    }
    else{

    return (
        <div className='cardList'>

            <div id={plato ? plato.id : null} key={plato.id}>

                <Card className='justify-content-center'>

                    <CardImg className='cardImagen' src={plato ? plato.imagen : null} />

                    <CardBody>

                        <CardTitle ><h2>{plato ? plato.nombre : null}</h2></CardTitle>

                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Disponible: {plato ? plato.stock : null}
                        </CardSubtitle>

                        <Link to={`/detalles/${plato.id}`} className='btn btn-dark verDetalles'>Ver detalles</Link>


                         <ItemCount onAdd={handleClick} stock={plato.stock} initial={1}  /> 


                    </CardBody>
                </Card>
            </div>

        </div>
    )
}
}


export default Item
