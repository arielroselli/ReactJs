
import { useEffect, useState } from 'react'
import Item from './Item'

const ItemList = ({lista}) => {
    
    const [comidas, setComidas] = useState([])
    useEffect(() => {

            setComidas(lista)

    }, [lista])

    return (
        <div className='cardList'>

            {comidas.map(plato =>
                <Item data={plato} key={"item"+plato.id}/>
            )}
        </div>
    )
}


export default ItemList