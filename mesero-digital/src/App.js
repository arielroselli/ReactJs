import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import NavBar from './components/home/Navbar/NavBar'
import Footer from './components/home/footer/Footer';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Parallax404Error from './components/parallax/Parallax404Error'
import ParallaxAdmin from './components/parallax/ParallaxAdmin'
import ParallaxCliente from './components/parallax/ParallaxCliente';
import ParallaxHome from './components/parallax/ParallaxHome';
import Detalles from './components/tienda/ItemListContainer/ContenedorDetallesItem/DetalleItem';
import { DataProvider } from './components/tienda/context/Context';
import { CarritoProvider } from './components/tienda/context/CartContext';


const App = () => {




    return (
        <>
        <CarritoProvider>
        <NavBar />
        </CarritoProvider>
        <DataProvider>

            <BrowserRouter>
                
                <Routes>
                    <Route exact path="/" element={<ParallaxHome />} />
                    <Route exact path="/:categoria" element={<ParallaxCliente />} />
                    <Route exact path="/Administracion" element={<ParallaxAdmin />} />
                    <Route exact path="/detalles/:id" element={<Detalles />} />
                    <Route path="*" element={<Parallax404Error />} />
                </Routes>
            </BrowserRouter>
            <Footer />

        </DataProvider>
        </>
    )


}


export default App;