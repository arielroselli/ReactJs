
import { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, CardImg } from 'reactstrap';
import { getComidas } from '../ItemListContainer/ComidasMock'
import VerMas from '../ItemDetailContainer/BotonVerMas';
import ItemListContainer from '../ItemListContainer/ItemList';


const Item = (props) => {

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

                    <Card>
                        
                        <CardImg className='cardImagen' src={plato.imagen}/>

                        <CardBody>

                            <CardTitle >{plato.nombre}</CardTitle>

                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                Stock : {plato.stock}
                            </CardSubtitle>

                            <VerMas text={plato.descripcion}/>

                            <ItemListContainer onClick={() => { setItem(plato.id) }} />
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    )
}


export default Item