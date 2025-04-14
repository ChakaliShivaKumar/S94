import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav style={{ backgroundColor: '#222', padding: '10px', color: '#fff' }}>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/summary" style={linkStyle}>Summary</Link>
      <Link to="/reports" style={linkStyle}>Reports</Link>
      <button onClick={handleLogout} style={buttonStyle}>Logout</button>
    </nav>
  );
};

const linkStyle = {
  marginRight: '15px',
  color: 'white',
  textDecoration: 'none'
};

const buttonStyle = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Navbar;
