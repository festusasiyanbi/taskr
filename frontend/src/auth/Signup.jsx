import React, { useState } from "react";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const response = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const {token, user} = data;
      console.log(token, user);
      setSuccess(data.message);
      setLoading(false);
      window.alert(data.message || "Login successful");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
      window.alert(error.message);
    }
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div className="form-container">
        <h3>Taskr</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Choose your username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit" className="authBtn">SignUp</button>
          </div>
          <div className="alternative-div">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
