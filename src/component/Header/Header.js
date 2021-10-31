import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProvider from '../Hook/useProvider';
import './Header.css'
const Header = () => {
    const {user,   logOut} = useProvider() 
    return (

<>
{/* heder start */}
  <Navbar bg="dark" variant="dark"  className="sticky-top" collapseOnSelect expand="lg">
    <Container>
     <Navbar.Brand href="#home" className="fs-1 brand "> <i className="fas fa-truck"></i> food delivery</Navbar.Brand>
     <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home"  className="brand">Home</Nav.Link> 
      <Nav.Link as={Link} to="/about" className=" brand ">About </Nav.Link>
      <Nav.Link as={Link} to="/contact" className=" brand ">Contact</Nav.Link> 
 <Nav.Link as={Link}  to={`/detail/${user?._id}`} className="brand">My Orders</Nav.Link>
       <Nav.Link as={Link} to="/doctors" className=" brand "> Manage All Orders </Nav.Link>
       <Nav.Link as={Link} to="/doctors" className=" brand ">Add A New Service</Nav.Link>   
      <button className="regular-btn"><Nav.Link as={Link} to="/login" className=" brand ">Login</Nav.Link>
      </button>
    <button className="ms-3 "  onClick={logOut}>LogOut</button>    
 
 { user.displayName ? 
   <p className="text-success">Signed : {user.displayName}</p>
: ''
 }  
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