import React, { useState } from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import {getBebidas} from '../../ComidasMock';

const BotonCarrito = () => {
    const stock =5;
    const initial = 0;
    const [itemCount, setItemCount] = React.useState(1);

    return (
        <div style={{ display: "block", padding: 30 }}>
            <div>
                <Badge color="secondary" initial={initial} badgeContent={itemCount}>
                    <ShoppingCartIcon color="primary" outline />
                    
                </Badge>

                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1, stock);
                        }}
                    >
                      
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
            
    )

}
export default BotonCarrito