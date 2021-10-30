import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

<>
{/* heder start */}
  <Navbar bg="dark" variant="dark"  className="sticky-top" collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fs-1 brand "> <i className="fas fa-truck"></i> food delivery</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home"  className="brand">Home</Nav.Link>
      <Nav.Link as={Link} to="/aboutUs" className="brand">My Orders</Nav.Link>
      <Nav.Link as={Link} to="/doctors" className=" brand "> Manage All Orders </Nav.Link>
      <Nav.Link as={Link} to="/doctors" className=" brand ">Add A New Service</Nav.Link>
      <button className="regular-btn"><Nav.Link as={Link} to="/doctors" className=" brand ">Login</Nav.Link>
</button>
      <Navbar.Text> 
       </Navbar.Text>
    </Navbar.Collapse> 
    </Container>
  </Navbar>
  {/* header end */} 
</> 
     );
};

export default Header;