import ItemListContainer from "./ItemListContainer/ContenedorLista";

const BodyGeneral = () => {



  return (
    <>
      <div className="col-6">
        <h1 className="h1Pedido">Haga su pedido:</h1>
      </div>
      <ItemListContainer className="col-6" />
    </>
  )
}

export default BodyGeneral