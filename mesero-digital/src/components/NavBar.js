
import "./NavBar.css";
import CartWidget from "./CartWidget"
import DropList from "./DropList";

const NavBar = () => {

    return (
        <header className="NavBar-header">
            <div className="NavBar">
                <img src={'../public/logo192.png'} className="App-logo" alt="logo" />
                <h1 className="Titulo"> Mesero Digital</h1>
                <DropList/>

                
            </div>
        </header>
    )
}

export default NavBar;