import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../styles/header.css";
import "../styles/global.css";

const Header = () => {

  return (
    <Navbar className="header background-gradient">
      <Navbar.Brand href="/" className="nav-brand">
        <img src={"../../assets/images/logo.jpeg"} height="50px" width="50px" alt="Logo" />
        <span>CODEFUSION</span>
      </Navbar.Brand>
      <Nav className="nav">
        <Nav.Link href="/home" className="nav-link ml-3 text-white">Home</Nav.Link>
        <Nav.Link href="/about" className="nav-link ml-3 text-white">About</Nav.Link>
        <Nav.Link href="/contact" className="nav-link ml-3 text-white">Contact</Nav.Link>
        <Nav.Link href="/login" className="nav-link">
          <button className="operationBtn" >Login</button>
        </Nav.Link>
        <Nav.Link href="/signup" className="nav-link">
          <button className="operationBtn" >Sign Up</button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
