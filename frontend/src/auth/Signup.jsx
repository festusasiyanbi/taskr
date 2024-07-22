import React from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="form-container">
        <h3>Taskr</h3>
        <form>
          <div className="inputs">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              autocomplete="off"
              placeholder="Enter your name"
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autocomplete="off"
              placeholder="Choose your username"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              autocomplete="off"
              placeholder="Enter your email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autocomplete="off"
              placeholder="Enter your password"
            />
            <button type="submit" className="authBtn">SignUp</button>
          </div>
          <div className="alternative-div">
            <span>Already have an account? </span>
            <Link to="/login"> Login</Link>
          </div>
        </form>

      </div>
    </Layout>
  );
};

export default Signup;
