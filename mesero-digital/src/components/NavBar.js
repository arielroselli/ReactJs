
import "./NavBar.css";


const NavBar = () => {

    return (
        <header className="NavBar-header">
            <div className="NavBar">
                <img src={'../public/logo192.png'} className="App-logo" alt="logo" />
                <h1 className="Titulo"> Mesero Digital</h1>
                <button className="boton">El Boton numero 1</button>
                <button className="botonCarrito"></button>

            </div>
        </header>
    )
}

export default NavBar;