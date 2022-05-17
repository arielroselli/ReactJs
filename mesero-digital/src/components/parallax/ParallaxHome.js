import React from "react"
import Formulario from "../tienda/Login/Login";
import './parallax.css';

const ParallaxHome = () => {

    return (
        <>
            <div className="parallax1">
                
                
                    <Formulario/>
                

            </div>


            <div className="section">
                <div className="border">
                    <h1>Plataforma para restaurantes</h1>
                </div>
                
                
            </div>


            <div className="parallax2">
                <div className="caption">
                    <h3 className="border">
                        En esta plataforma, hacer tu orden de comida desde la mesa. No es necesario hablar 
                        con el mozo. Simplemente envia tu pedido, y esperala.
                    </h3>
                </div>
            </div>
        </>
    )
}



export default ParallaxHome