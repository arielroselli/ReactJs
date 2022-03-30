
import './index.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

 const App = () => {

    return (
        <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Probando'}/>
        </div>
    )


}

export default App;