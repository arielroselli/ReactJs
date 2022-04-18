import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from '../../tienda/CartWidget'

const NavBar = () => {

    return (

        <header>
            <Navbar
                color="dark"
                expand="xl"
                fixed="top"
            >
                <NavbarBrand>
                    <Link to='/home' className='linkHome'><img className='imgLogo' src='/assets/logo/pizza.png'/>Mesero Digital</Link>
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
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
                                <DropdownItem>
                                    <Link to={`/tienda`} className='link'>Cliente</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={`/Administracion`} className='link'>Administracion</Link>
                                </DropdownItem>
                                <DropdownItem divider />

                                <DropdownItem>
                                    Ayuda
                                </DropdownItem>
                            </DropdownMenu>

                            

                        </UncontrolledDropdown>
                        
                    </Nav>
                </Collapse>
                <CartWidget/>
            </Navbar>
        </header>
    )
}



export default NavBar;