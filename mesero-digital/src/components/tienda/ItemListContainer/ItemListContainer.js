import React, { useEffect, useState } from "react";
import { getComidas } from '../ItemListContainer/ComidasMock'
import ItemList from "./ContenedorDetallesItem/ItemList";



const ItemListContainer = ({cat}) => {
    const [count, setCount] = useState(1);
    
    const onAdd = (condition) => {
        if (condition === '-') {
            setCount(count - 1);
        }
        if (condition === '+') {
            setCount(count + 1);
        }

    };

    const [lista, setLista] = useState([])

    useEffect(async () => {
        if ( cat== "tienda")
        {await getComidas().then(datos => {
            setLista(datos)

        })}
    }, [cat])


    return (
        <div className="contenedorPedidos">
            <div className="itemComida">
                <div className="contador">
                    <ItemList lista={lista}/>
                </div>
            </div>


        </div>
    );
};


export default ItemListContainer