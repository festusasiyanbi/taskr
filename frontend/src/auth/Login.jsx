import React, { useContext, useState } from "react";
import "../styles/auth.css";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { setUser } = useContext(AuthContext);
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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
      setUser(data.user);
      navigate('/profile');

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
            <button type="submit" className="authBtn" onClick={handleLoginUser}>Login Now</button>
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
