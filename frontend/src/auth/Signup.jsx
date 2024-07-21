import React from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="user">
        <h3>Taskr</h3>
        <form className="userForm">
          <div className="inputs">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              autocomplete="off"
              placeholder="Enter your name"
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
            <button type="submit">SignUp</button>
          </div>
        </form>
        <div className="login">
          <p>Already have an account? </p>
          <Link to="/login" type="submit" class="btn btn-dark">
            Login
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
