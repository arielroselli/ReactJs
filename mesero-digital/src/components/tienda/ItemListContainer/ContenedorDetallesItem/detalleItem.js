import './DetallesItem.css'
import { getComidasById } from '../ComidasMock'
import { useContext, useEffect, useState } from 'react'
import ItemListContainer from '../ItemListContainer'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'
import ItemCount from './ItemCount'
import { Button, Spinner } from 'reactstrap'
import BotonSinStock from '../../Botones/BotonAgregarCarrito'
import { DataContext } from '../../context/Context'


const Detalles = () => {

    const { id } = useParams()

    const {state, setState, comidas, setComidas} = useContext(DataContext);

    useEffect(async () => {
        await getComidasById(id).then(comida => {
            setComidas(comida)

        })
    }, [])

    const handleClick = (cant) => {
      setState(true)
      console.log('Recibiendo productos ')
    }

    const esperando = (
    <Spinner>
        Cargando...
      </Spinner>)


    const dataC = (<div className='detalleItem'>

        <div id={comidas === undefined ? null : comidas.id} key={comidas === undefined ? null : comidas.id}>

            <div className='detallePadre' >

                <img className='detalleImagen' src={comidas === undefined ? null : comidas.imagen} alt={comidas === undefined ? null : comidas.nombre} />

                <div className='detalleTexto'>

                    <h1><strong>{comidas === undefined ? null : comidas.nombre}</strong></h1>
                    <h2>{comidas === undefined ? null : comidas.descripcion}</h2>
                    <div className='botonAgregar'>
                        <h3 className="mb-2 text-muted" tag="h6" >
                            Disponible: {comidas === undefined ? null : comidas.stock}
                        </h3>

                        {state ? <Link to={'/carrito'}><Button color="success" outline> Ir al carrito</Button></Link> : comidas === undefined ?  null : <ItemCount onAdd={handleClick} stock={comidas.stock} initial={1}  />  }
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