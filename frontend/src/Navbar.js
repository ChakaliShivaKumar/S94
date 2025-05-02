import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await fetch('https://s94-backend.onrender.com/api/check-auth', {
          method: 'GET',
          credentials: 'include'
        });
        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('https://s94-backend.onrender.com/api/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setIsLoggedIn(false);
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      {isLoggedIn && (
        <>
          <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
          <Link to="/summary" style={{ marginRight: '10px' }}>Summary</Link>
          <Link to="/reports" style={{ marginRight: '10px' }}>Reports</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
