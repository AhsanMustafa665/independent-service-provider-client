import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../Assests/images/logo/logo.png'
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      <Navbar style={{backgroundColor: 'darkslategray'}} collapseOnSelect sticky='top' expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            
      <Nav.Link href="home#services" className='link'>Services</Nav.Link>
      <Nav.Link href="blogs"  className='link' >Blogs</Nav.Link>
  
    </Nav>
            <Nav>
            
              <Nav.Link as={Link} to="about" className='link'>About me</Nav.Link>
              {
                user ?
                  <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none'>Sign out</button>
                  :
              <Nav.Link as={Link}  className='link'  to="login">Login 
    
  </Nav.Link>}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

<br />

</>
);
};

export default Header;