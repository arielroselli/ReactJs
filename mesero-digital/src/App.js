import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import NavBar from './components/home/Navbar/NavBar'
import Footer from './components/home/footer/Footer';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import ParallaxAdmin from './components/parallax/ParallaxAdmin'
import ParallaxCliente from './components/parallax/ParallaxCliente';
import ParallaxHome from './components/parallax/ParallaxHome';
import Detalles from './components/tienda/ItemListContainer/ContenedorDetallesItem/DetalleItem';


const App = () => {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ParallaxHome /> } />
                    <Route path="/:categoria" element={<ParallaxCliente />} />
                    <Route path="/Administracion" element={<ParallaxAdmin />} />
                    <Route path="/detalles/:id" element={<Detalles/>} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )


}


export default App;