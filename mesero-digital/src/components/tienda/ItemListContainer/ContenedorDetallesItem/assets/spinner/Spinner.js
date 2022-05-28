import { Spinner } from 'reactstrap'
import './spinner.css'


const Cargando = () => {
    return (
        <div className="divPadre">
            <div className="divHijo">
                <Spinner color='primary' className='spinnerReactstrap'/>
            </div>
        </div>
        
    )
}


export default Cargando