import React from "react";
import "../styles/auth.css";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <Layout>
      <div className="form-container">
        <form>
          <div className="inputs">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
            <button type="submit" className="authBtn">Login Now</button>
          </div>
          <div className="alternative-div">
            <span>Are you a new user? </span>
            <Link to="/signup" type="submit">Sign up</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
