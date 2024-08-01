import React, { useContext } from "react";
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
    <div className="header background-gradient">
      <a href="/" className="nav-brand">
        <img src={"../../assets/images/logo.jpeg"} height="50px" width="50px" alt="Logo" />
        <span>CODEFUSION</span>
      </a>
      <div className="nav">
        <a href="/" className="nav-link ml-3 text-white">Home</a>
        <a href="/about" className="nav-link ml-3 text-white">About</a>
        <a href="/contact" className="nav-link ml-3 text-white">Contact</a>
        {user ? (
          <>
            <a href="/user/profile" className="nav-link">
              <button className="operationBtn">Profile</button>
            </a>
            <a className="nav-link">
              <button className="operationBtn" onClick={handleSignOut}>Sign out</button>
            </a>
          </>
        ) : (
          <>
            <a href="/login" className="nav-link">
              <button className="operationBtn">Login</button>
            </a>
            <a href="/signup" className="nav-link">
              <button className="operationBtn" >Sign Up</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
