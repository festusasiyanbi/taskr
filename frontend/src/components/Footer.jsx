import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
      email: "mailto:ayowolemieniomosule@gmail.com",
      linkedin: "https://www.linkedin.com/in/festusasiyanbi",
      github: "https://www.github.com/Geiranix",
    },
    {
      name: "Kevine Junior Kodjo AWUDI",
      email: "mailto:wudkevin@icloud.com",
      linkedin: "https://www.linkedin.com/in/kevine-awudi-9b6108271/",
      github: "https://www.github.com/WUDKVN",
    },
    {
      name: "Jennifer Jude",
      email: "mailto:jenniferjude4@gmail.com",
      linkedin: "https://www.linkedin.com/in/jenniferjude04/",
      github: "https://www.github.com/Nechenwa",
    },
    {
      name: "Gessia Conrado",
      email: "mailto:gessia.cm@gmail.com",
      linkedin: "https://www.linkedin.com/in/gessia-conrado-792513229/",
      github: "https://github.com/gmagalhaes1",
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
      <p className="copyright">
        {" "}
        &copy; {year} CODEFUSION | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
