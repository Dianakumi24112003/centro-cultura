
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">CENTRO CULTURAL</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/header">Historia</Nav.Link>
          <Nav.Link as={Link} to="/carousel">Carrucel</Nav.Link>
          <Nav.Link as={Link} to="/buttons">Botones</Nav.Link>
          <Nav.Link as={Link} to="/multimedia">Multimedia</Nav.Link>
          <Nav.Link as={Link} to="/form">Formulario</Nav.Link>
          <Nav.Link as={Link} to="/credits">Creditos</Nav.Link>
          <Nav.Link as={Link} to="/events-gallery">Eventos</Nav.Link>
          <Nav.Link as={Link} to="/cultural-blog">Blog de cultura</Nav.Link>
          <Nav.Link as={Link} to="/cultural-resources">Recetas</Nav.Link>
          <Nav.Link as={Link} to="/collaborative-projects">Proyectos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
