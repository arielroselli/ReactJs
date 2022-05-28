import React, { useContext, useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavItem, Button } from 'reactstrap';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BotonCarrito from '../../tienda/Carrito/BotonCarrito';
import 'animate.css';
import { UserContext } from '../../tienda/context/UserContext';
import { Link } from 'react-router-dom';


const NavBar = () => {

const {user} = useContext(UserContext)

    return (

        <header>
            <Navbar
                color="dark"
                expand="xl"
                fixed="top"
            >
                <NavbarBrand href="/" className='linkHome'><img className='imgLogo' src='/assets/logo/pizza.png' />
                    Mesero Digital
                </NavbarBrand>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Modo de la pagina
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag='a' href='/tienda'>
                                    Cliente
                                </DropdownItem>
                                <DropdownItem tag='a' href='/administracion'>
                                    Administracion
                                </DropdownItem>
                                <DropdownItem divider />

                                <DropdownItem>
                                    
                                </DropdownItem>
                            </DropdownMenu>



                        </UncontrolledDropdown>

                    </Nav>
                
                <NavItem>

                    {user ? <Link to={'/home'}><Button color="danger" outline >{user} (Cerrar Sesión)</Button></Link> : user === undefined ?  null : <div>{user.nombre}</div>  }

                </NavItem>
                <NavItem></NavItem>
                </Collapse>
                <BotonCarrito/>
            </Navbar>
        </header>
    )
}


export default NavBar;