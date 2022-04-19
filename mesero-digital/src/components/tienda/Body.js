import ItemListContainer from "./ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const BodyGeneral = () => {

const {categoria} = useParams()

  return (
    <>
      <ItemListContainer cat={categoria}/>

    </>
  )
}

export default BodyGeneral