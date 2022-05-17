import React from "react"
import PanelPedidos from "../restaurante/pedidos";

import './parallax.css';


const ParallaxAdmin = () => {

    return (
        <>
            <div className="parallax1">
                <div className="captionAdmin">
                    <PanelPedidos />

                </div>

            </div>


            <div className="section">

                <h2 className="border">Plataforma para restaurantes</h2>
            </div>


            <div className="parallax2">
                <div className="caption">
                    <h3 className="border">Texto para rellenar mas adelante explicando el funcionamiento de la plataforma</h3>
                </div>
            </div>
        </>
    )
}



export default ParallaxAdmin