import React, { useContext, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/header.css";
import "../styles/global.css";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch("/api/auth/signout", {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };
  return (
    <Navbar className="header background-gradient">
      <Navbar.Brand href="/" className="nav-brand">
        <img src={"../../assets/images/logo.jpeg"} height="50px" width="50px" alt="Logo" />
        <span>CODEFUSION</span>
      </Navbar.Brand>
      <Nav className="nav">
        <Nav.Link href="/" className="nav-link ml-3 text-white">Home</Nav.Link>
        <Nav.Link href="/about" className="nav-link ml-3 text-white">About</Nav.Link>
        <Nav.Link href="/contact" className="nav-link ml-3 text-white">Contact</Nav.Link>
        {user ? (
          <>
            <Nav.Link href="/user/profile" className="nav-link">
              <button className="operationBtn">Profile</button>
            </Nav.Link>
            <Nav.Link className="nav-link">
              <button className="operationBtn" onClick={handleSignOut}>Sign out</button>
            </Nav.Link>
          </>
        ) : (
          <>
            <Nav.Link href="/login" className="nav-link">
              <button className="operationBtn">Login</button>
            </Nav.Link>
            <Nav.Link href="/signup" className="nav-link">
              <button className="operationBtn" >Sign Up</button>
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
