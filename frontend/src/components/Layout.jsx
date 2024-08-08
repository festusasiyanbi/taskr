import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../index.css";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
