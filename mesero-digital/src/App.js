import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import NavBar from './components/home/Navbar/NavBar'
import Footer from './components/home/footer/Footer';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Parallax404Error from './components/parallax/Parallax404Error'
import ParallaxAdmin from './components/parallax/Admin'
import ParallaxCliente from './components/parallax/Cliente';
import ParallaxHome from './components/parallax/Home';
import Detalles from './components/tienda/ItemListContainer/ContenedorDetallesItem/DetalleItem';
import { CarritoProvider } from './components/tienda/context/CartContext';
import CanvasCarrito from './components/tienda/Carrito/CanvasCarrito';
import {UserProvider} from './components/tienda/context/UserContext';


const App = () => {




    return (
        <>
            <CarritoProvider>

                <UserProvider>
                    <BrowserRouter>

                        <NavBar />
                        <CanvasCarrito />

                        <Routes>
                            <Route path="/" element={<ParallaxHome />} />
                            <Route path="/:categoria" element={<ParallaxCliente />} />
                            <Route path="/Administracion" element={<ParallaxAdmin />} />
                            <Route path="/detalles/:id" element={<Detalles />} />
                            <Route path="*" element={<Parallax404Error />} />
                        </Routes>
                    </BrowserRouter>
                </UserProvider>

            </CarritoProvider>
            <Footer />
        </>
    )


}


export default App;