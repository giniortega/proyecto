import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import '../styles/Navbar.css';

function NavigationBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          
          <img
            src="/imangenes/logo.png" 
            alt="Curtiembre Ortega Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          CURTIEMBRE ORTEGA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about" activeClassName="active">
              Quienes Somos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/process" activeClassName="active">
              Proceso
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" activeClassName="active">
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sustainability" activeClassName="active">
              Sostenibilidad
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active">
              Contactos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq" activeClassName="active">
              Preguntas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
