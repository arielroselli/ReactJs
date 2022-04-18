
import { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardImg, NavLink } from 'reactstrap';
import { getComidas } from '../ComidasMock'
import VerMas from './BotonVerMas';
import ItemListContainer from '../ItemListContainer';
import { Link } from 'react-router-dom';


const Item = () => {
    
    const [comidas, setComidas] = useState([])
    const [item, setItem] = useState()

    useEffect(async () => {
        await getComidas().then(datos => {
            setComidas(datos)

        })
    }, [])

    return (
        <div className='cardList'>
            {comidas.map(plato =>
                <div id={plato.id} key={plato.id}>

                    <Card className='justify-content-center'>
                        
                        <CardImg className='cardImagen' src={plato.imagen}/>

                        <CardBody>

                            <CardTitle ><h2>{plato.nombre}</h2></CardTitle>

                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                Disponible: {plato.stock}
                            </CardSubtitle>

                            <Link to={`/detalles/${plato.id}`} className='btn btn-dark verDetalles'>Ver detalles</Link>

                            <ItemListContainer className="itemCount" onClick={() => { setItem(plato.id) }} />
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    )
}


export default Item