import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "../styles/footer.css";
import "../styles/global.css";
import { FaChevronUp, FaChevronDown, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const creators = [
    {
      name: "Festus Asiyanbi",
      email: "mailto:festusasiyanbi80@gmail.com",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/festusasiyanbi",
    },
    {
      name: "Ayowolemi Eni-Omosule",
      email: "mailto:your email",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/festusasiyanbi",
    },
    {
      name: "Kevine AWUDI",
      email: "mailto:wudkevin@icloud.com",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/festusasiyanbi"
    },
    {
      name: "Jennifer Jude",
      email: "mailto:your email",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/festusasiyanbi"
    },
    {
      name: "Gessia Conrado",
      email: "mailto:your email",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/festusasiyanbi",
    },
  ];

  return (
    <footer className="footer text-white pt-4 pb-1">
      <h2>Meet Our Team</h2>
      <div className="footer-card-wrapper">
        {creators.map((creator, index) => (
          <div key={index} className="footer-card">
            <h5>{creator.name}</h5>
            <div className="socials">
              <a href={creator.email}>
                <FaEnvelope />
              </a>
              <a href={creator.linkedin}>
                <FaLinkedin />
              </a>
              <a href={creator.github}>
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="copyright"> &copy; {year} CODEFUSION | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
