import React from "react";
import { Button, ButtonGroup } from "reactstrap"



const ItemCount = ({ onAdd,stock, initial, count }) => {

    return (
        <div className="cardComidas">
            <ButtonGroup>
                <Button onClick={() => {
                    if (count > initial) {
                        onAdd('-');
                    }
                    if (count > initial) {
                        onAdd('-');
                    }
                }} className="botonCard" color="success">

                    -</Button>
                <Button className="bool botonCard ">
                    {count}
                </Button>
                <Button onClick={() => {
                    if (count < stock) {
                        onAdd('+')
                    }
                }} className="botonCard" color="success">

                    +</Button>
            </ButtonGroup>
            <Button className="botonCardAgregar" >
                Agregar
            </Button>

        </div>
    )
}



export default ItemCount