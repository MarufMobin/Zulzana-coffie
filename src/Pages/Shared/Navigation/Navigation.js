import React from 'react';
import { Container, Nav,Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark" style={{padding: "20px 0px", backgroundColor: "#141414", color: "#fff"}}>
            <Container>
                <Navbar.Brand href="#home" style={{fontSize: "18px",fontFamily: "cursive",fontSize: "22px"}}>ZulzanaCoffie</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;