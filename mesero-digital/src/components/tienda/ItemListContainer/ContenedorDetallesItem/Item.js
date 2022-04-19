
import { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from 'reactstrap';
import ItemListContainer from '../ItemListContainer';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const Item = ({ data }) => {

const [agregar, setAgregar] = useState(0)

    const [plato, setPlato] = useState(data)

    useEffect(() => {
        setPlato(data)
    }, [data])

    const agregarCarrito = (evento) => {
      console.log(evento)
      
    }

    return (
        <div className='cardList'>

            <div id={plato?plato.id : null} key={plato.id}>

                <Card className='justify-content-center'>

                    <CardImg className='cardImagen' src={plato?plato.imagen : null} />

                    <CardBody>

                        <CardTitle ><h2>{plato?plato.nombre : null}</h2></CardTitle>

                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Disponible: {plato?plato.stock : null}
                        </CardSubtitle>

                        <Link to={`/detalles/${plato.id}`} className='btn btn-dark verDetalles'>Ver detalles</Link>

                        <ItemListContainer className="itemCount" onClick={() => { setPlato(plato?plato.id : null) }} />

                        {plato? <ItemCount onAdd={agregarCarrito} stock={plato.stock} initial={1} /> : null}
                   

                    </CardBody>
                </Card>
            </div>
            
        </div>
    )
}


export default Item
/* 
 */