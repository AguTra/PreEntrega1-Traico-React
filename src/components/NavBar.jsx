import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";



export const NavBar = () => (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">MundoLibros.exe</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Aventura</Nav.Link>
        <Nav.Link href="#features">Fantasia</Nav.Link>
        <Nav.Link href="#pricing">Terror</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);