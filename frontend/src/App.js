import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Summary from './components/Summary';
import Reports from './components/Reports';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
      <div className="App">
        {authenticated && <Navigation onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={
            authenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/dashboard" element={
            authenticated ? <Dashboard /> : <Navigate to="/login" />
          } />
          <Route path="/summary" element={
            authenticated ? <Summary /> : <Navigate to="/login" />
          } />
          <Route path="/reports" element={
            authenticated ? <Reports /> : <Navigate to="/login" />
          } />
          <Route path="/" element={<Navigate to={authenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
  );
}

export default App;