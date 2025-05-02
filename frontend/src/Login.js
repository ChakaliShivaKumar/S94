import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('shiva');
  const [password, setPassword] = useState('shiva');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch('https://s94-backend.onrender.com/api/check-auth', {
          method: 'GET',
          credentials: 'include'
        });
        if (res.ok) {
          navigate('/dashboard');
        }
      } catch (error) {
        // Not logged in
      }
    };
  
    checkLoginStatus();
  }, [navigate]);
  
  const handleLogin = async () => {
    try {
      const response = await fetch('https://s94-backend.onrender.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        navigate('/dashboard');
      } else {
        const data = await response.json();
        setError(data.err || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
    }
  };  
  

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" /><br />
      <input value={password} type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
