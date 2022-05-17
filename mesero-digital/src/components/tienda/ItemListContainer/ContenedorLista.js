import { useEffect, useState } from "react";
import { getComidas } from './ComidasMock'
import ItemList from "./ContenedorDetallesItem/ItemLista";


const ItemListContainer = () => {


    const [listado, setListado] = useState([])

    useEffect(() => {

        getComidas().then(datos => {
            setListado(datos)
        })


    }, [])


    return (
        <div className="contenedorPedidos">
            <div className="itemComida">
                <div className="contador">
                    <ItemList lista={listado} />
                </div>
            </div>


        </div>
    );
};


export default ItemListContainer