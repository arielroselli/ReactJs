import './DetallesItem.css'
import { getComidasById } from '../ComidasMock'
import { useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer'
import { useParams } from 'react-router-dom'



const Detalles = () => {
    const { id } = useParams()
    console.log(id)
    const [comidas, setComidas] = useState()
    const [item, setItem] = useState()
    useEffect(async () => {
        await getComidasById(id).then(comida => {
            setComidas(comida)

        })
    }, [])
    const esperando = (<div>Esperando</div>)

    const dataC = (<div className='detalleItem'>

        <div id={comidas === undefined ? null : comidas.id} key={comidas === undefined ? null : comidas.id}>

            <div className='detallePadre' >

                <img className='detalleImagen' src={comidas === undefined ? null : comidas.imagen} alt={comidas === undefined ? null : comidas.nombre} />

                <div className='detalleTexto'>

                    <h1><strong>{comidas === undefined ? null : comidas.nombre}</strong></h1>
                    <h2>{comidas === undefined ? null : comidas.descripcion}</h2>
                    <div className='botonAgregar'>
                        <h3 className="mb-2 text-muted" tag="h6">
                            Disponible: {comidas === undefined ? null : comidas.stock}
                        </h3>

                        <ItemListContainer onClick={() => { setItem(comidas === undefined ? null : comidas.id) }} />
                    </div>
                    
                </div>
            </div>
        </div>

    </div>)
    return (
        <>
            {comidas ? (dataC) : (esperando)}
        </>)
}


export default Detalles