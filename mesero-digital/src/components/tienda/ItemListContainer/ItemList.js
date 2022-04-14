import React, { useState } from "react";
import ItemCount from "../ItemDetailContainer/ItemCount"



const ItemListContainer = () => {
    const [count, setCount] = useState(1);

    const onAdd = (condition) => {
        if (condition === '-') {
            setCount(count - 1);
        }
        if (condition === '+') {
            setCount(count + 1);
        }

    };

    const stock = 5;
    const initial = 1;

    return (
        <div className="contenedorPedidos">
            <div className="itemComida">
                <div className="contador">
                    <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
                </div>
            </div>


        </div>
    );
};

export default ItemListContainer    