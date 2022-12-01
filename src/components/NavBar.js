import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Logo from '../imagenes/logo.png';
import '../styleSheet/NavBar.css';

function NavBar() {
  return (
    <div>
    <Navbar id="menu-principal" expand="lg" className='fixed-top'>
    <Container>
      <Navbar.Brand href="#home"><img src={ Logo } /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <h2 id="ver-inficadores">[ INDICADORES FINANCIERO ]</h2>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/" id="btnInicio">Inicio</Nav.Link>
          <Nav.Link href="/data" id="btnInicio">indicadores</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar