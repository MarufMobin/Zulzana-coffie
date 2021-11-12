import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'


const Navigation = () => {
    const {user,logOutUser} = useAuth()
console.log(user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/" style={{color: "#fff", fontFamily: "cursive", fontSize:"24px", fontWeight:"600"}}>ZulzanaCoffie</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink}  to="/home">home</Nav.Link>
                       <Nav.Link  as={HashLink} to="/about">about</Nav.Link>
                        <Nav.Link as={HashLink}  to="/contact">contact</Nav.Link>
                        <Nav.Link as={HashLink}  to="/allproduct">allproduct</Nav.Link>
                        {
                            user?.email ? 
                            
                            <Button onClick={logOutUser}>Log Out</Button>
                            :
                            <Nav.Link as={HashLink}  to="/login">Login</Nav.Link>
                        }
                        <span style={{color: "#fff", fontSize: "18px", lineHeight:"42px",letterSpacing:"1.2px", marginLeft:"20px"}}>{
                            user.email
                        }</span>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;