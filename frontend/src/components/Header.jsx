import React, { useContext } from "react";
import "../styles/header.css";
import "../styles/global.css";
import AuthContext from "../context/AuthProvider";
import { useLocation, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await fetch("/api/auth/signout", {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }
      localStorage.removeItem("token");
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="header background-gradient">
      <Link to="/" className="nav-brand">
        <img
          src={"../../assets/images/logo.jpeg"}
          height="50px"
          width="50px"
          alt="Logo"
        />
        <span>CODEFUSION</span>
      </Link>
      <div className="nav">
        <Link
          to="/"
          className={`nav-link ml-3 text-white ${
            location.pathname === "/" ? "active-nav" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ml-3 text-white ${
            location.pathname === "/about" ? "active-nav" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`nav-link ml-3 text-white ${
            location.pathname === "/contact" ? "active-nav" : ""
          }`}
        >
          Contact
        </Link>
        {user ? (
          <>
            <Link to="/user/profile" className="nav-link">
              <button className="operationBtn">Profile</button>
            </Link>
            <button className="operationBtn" onClick={handleSignOut}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              <button className="operationBtn">Login</button>
            </Link>
            <Link to="/signup" className="nav-link">
              <button className="operationBtn">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
