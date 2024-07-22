import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../styles/Header.css";
import "../styles/global.css";

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Navbar expand="lg" className="header background-gradient py-3">
    <Navbar.Brand href="#" className="d-flex align-items-center">
      <img src="/logo.jpeg" height="40" className="d-inline-block align-top mr-2" alt="Logo" />
      <span className="text-white">CODE FUSION TEAM</span>
    </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home" className="ml-3 text-white">Home</Nav.Link>
        <Nav.Link href="#about" className="ml-3 text-white">About</Nav.Link>
        <Nav.Link href="#contact" className="ml-3 text-white">Contact</Nav.Link>
        <Button variant="primary" className="ml-3">Sign In</Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
