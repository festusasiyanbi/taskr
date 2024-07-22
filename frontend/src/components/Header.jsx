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
    <Navbar expand="lg" className="header background-gradient py-3" style={{ width: "100%" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="d-flex align-items-center brand-move-right">
          <img
            src="/logo.jpeg"
            height="80"
            className="d-inline-block align-top mr-3"
            alt="Logo"
          />
          <span className="text-white text-nowrap ml-3">
            CODE<br/>FUSION TEAM
          </span>
        </Navbar.Brand>
        <div className="d-flex align-items-center">
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#home" className="px-3 text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="px-3 text-white">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="px-3 text-white">
              Contact
            </Nav.Link>
            <Button
              className="px-3"
              style={{
                backgroundColor: hovered ? "white" : "#007bff",
                color: hovered ? "black" : "white",
                transition: "0.3s",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Sign In
            </Button>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
