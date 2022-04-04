import ItemCount from "./ItemCount"
import ItemListContainer from "./ItemListContainer";
import React, {useState} from "react";
import GreetingPrueba from "./CartWidget";


const BodyGeneral = () => {
  return (
      <div className="BodyGeneralEstilo">
          <div className="TablaPedidos">
          <ItemListContainer />
          </div>
          <GreetingPrueba/>
      </div>
  )
}

export default BodyGeneral