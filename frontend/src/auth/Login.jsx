import React, { useState } from "react";
import "../styles/auth.css";
import Layout from "../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/axios";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("auth/login", formData);
      setSuccess(response.data.message || "Login successful");
      setLoading(false);
      setError("");
      window.alert(response.data.message || "Login successful");
      navigate("/profile");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data?.message || error.message);
      window.alert(error.response?.data?.message || error.message);
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
        <form onSubmit={handleSubmit}>
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
