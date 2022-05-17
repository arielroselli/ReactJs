import React from "react"
import './parallax.css';
import BodyGeneral from "../tienda/ListaProductos";


const ParallaxCliente = () => {



    return (
        <>
            <div className="parallax1">
                <div className="caption">
                <span className="border">Desliza para comenzar</span>
                </div>

            </div>


            <div className="sectionCliente">
                <div className="col-6 buscador"></div>
                <BodyGeneral className="col-6"/>
                
            </div>


            <div className="parallax2">
                <div className="caption">
                    <h3 className="border">Alguna que otra cosa publicitaria</h3>
                </div>
            </div>
        </>
    )
}



export default ParallaxCliente