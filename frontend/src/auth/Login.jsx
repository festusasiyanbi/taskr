import React, { useState } from "react";
import "../styles/auth.css";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleLoginUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate(`/profile`);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
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
        <form onSubmit={handleLoginUser}>
          <div className="inputs">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
            <button type="submit" className="authBtn">Login Now</button>
          </div>
          <div className="alternative-div">
            <span>Are you a new user? </span>
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
