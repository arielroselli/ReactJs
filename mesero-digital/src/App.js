import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/index';

import './index.css';
import BodyGeneral from './components/Body';
import NavBar from './components/NavBar'
import './components/ItemListContainer/index'


 const App = () => {

    return (
        <div className="App">
        <NavBar />
        <BodyGeneral/>
        
        </div>
    )


}


export default App;