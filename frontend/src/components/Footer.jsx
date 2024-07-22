import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../styles/Footer.css";
import "../styles/global.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; 

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const creators = [
    {
      name: "Festus ....",
      email: "Email",
      contact: "+.. .... ...",
    },
    {
      name: "Ayo .....",
      email: "Email",
      contact: "+.....",
    },
    {
      name: "Kevine AWUDI",
      email: "wudkevin@icloud.com",
      contact: "+437 238 1150",
    },
    {
      name: "Jennifer Jude .....",
      email: "Email",
      contact: "+....",
    },
    {
      name: "Gessia Conrado",
      email: "Email",
      contact: "+....",
    },
  ];

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <footer className="footer text-white py-4">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 mb-3">
            <button onClick={toggleExpand} className="expand-btn">
              <div>References</div>
              <div>{expanded ? <FaChevronDown /> : <FaChevronUp />}</div>
            </button>
          </div>
        </div>
        {expanded && (
          <>
            <div className="row justify-content-center text-center">
              {creators.map((creator, index) => (
                <div key={index} className="col-md-2 mb-3 creator-info">
                  <h5>{creator.name}</h5>
                  <p className="mb-1">Email: <a href={`mailto:${creator.email}`} className="text-white">{creator.email}</a></p>
                  <p>Contact: {creator.contact}</p>
                </div>
              ))}
            </div>
            <div className="row justify-content-center text-center">
              <Nav className="d-flex justify-content-center w-100">
                <Nav.Link href="#home" className="px-3 text-white">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="px-3 text-white">
                  About
                </Nav.Link>
                <Nav.Link href="#contact" className="px-3 text-white">
                  Contact
                </Nav.Link>
          
              </Nav>
            </div>
          </>
        )}
        <div className="row text-center mt-3">
          <div className="col-12">
            <p className="mb-0">© 2024 CODE FUSION. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
