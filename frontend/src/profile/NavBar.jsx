import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles/profile.css";
import "../index.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const { pathname } = useLocation();
  const [activeNav, setActiveNav] = useState(pathname);
  const navbars = [
    { _id: 1, text: "Home", link: "/" },
    { _id: 2, text: "Account", link: "/profile" },
    { _id: 3, text: "Settings", link: "/settings" },
    { _id: 4, text: "Logout", link: "/login" },
  ];
  return (
    <div className="navbar-container">
      {navbars.map((navbar) => (
        <Navbar className="bg-custom-transparent" key={navbar._id}>
          <Container>
            <Navbar.Text
              as={Link}
              to={navbar.link}
              key={navbar.link}
              className={`custom-text ${
                activeNav === navbar.link ? "active" : ""
              }`}
              onClick={() => setActiveNav(navbar.link)}
            >
              {navbar.text}
            </Navbar.Text>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default NavBar;
