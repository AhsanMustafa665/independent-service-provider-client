import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../Assests/images/logo/logo.png'
const Header = () => {
    return (
        <nav>
          <Navbar bg="dark" variant="dark">
    <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 </nav>
    );
};

export default Header;