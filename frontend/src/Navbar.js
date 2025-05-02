import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      {isLoggedIn && (
        <>
          <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
          <Link to="/summary" style={{ marginRight: '10px' }}>Summary</Link>
          <Link to="/reports" style={{ marginRight: '10px' }}>Reports</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
