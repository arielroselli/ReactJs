import React, { useState } from 'react';
import { getComidas, getBebidas, getMilanesas, getPastas } from "../../ComidasMock";


const VerMas = () => {
    const [mostrar, setMostrar] = useState(true);

    return (
        <>
            <a style={{ color: 'blue'}}
                type="button"
                onClick={() => {
                    setMostrar(!mostrar);
                }}
            >
                {mostrar ? 'Ver mas...' : 'Ver menos...'}
            </a>

            {mostrar ? (
                <div style={{ color: 'red'}}></div>
            ) : (
                <div>Descripcion de la comida que voy a ofrecer, como se cocina y que condimentos adicionales trae, texto para rellenar bla bla bla</div>
            )}
        </>
    );
}

export default VerMas