import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css'
import Layout from '../component/Layout';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <Layout>
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Access your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login Now</button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
