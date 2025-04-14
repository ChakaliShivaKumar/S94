import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Hardcoded credentials (username and password are 'shiva' for testing)
    if (username === 'shiva' && password === 'shiva') {
      try {
        // Send a login request to the backend
        const response = await axios.post('http://localhost:3000/login', {
          username,
          password
        });

        // Store the JWT token in localStorage for future use
        localStorage.setItem('token', response.data.accessToken);

        // Redirect to the dashboard
        window.location.href = '/dashboard';
      } catch (error) {
        setErrorMessage('Invalid username or password');
      }
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Dashboard</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
