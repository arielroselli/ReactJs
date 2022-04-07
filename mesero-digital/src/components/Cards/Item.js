import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from "reactstrap"
import ItemCount from "../ItemCount/index"
import ItemListContainer from "../ItemListContainer/index";
import react, { Component, useEffect, useState } from 'react'
import { getComidas, getBebidas } from "../../ComidasMock";
import CartWidget from "../CartWidget";



const Lista = (props) => {

    const [comidas, setComidas] = useState([])
    const [item, setItem] = useState()
    useEffect(async () => {
        await getBebidas().then(datos => {
            setComidas(datos)

        })
    })
    return (
        <div>

            <ul>
                {comidas.map(plato =>
                    <li id={plato.id} key={plato.id}>{plato.nombre} <button onClick={() => {
                      setItem(plato.id)
                      
                    }}>ver</button> </li>
                )}
<CartWidget/>
            </ul>

        </div>
    )
}


export default Lista