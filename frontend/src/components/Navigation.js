import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onLogout }) {
  const location = useLocation();
  
  return (
    <nav className="navigation" aria-label="Main Navigation">
      <div className="nav-brand">S94 - Recent innovations in Clean Energy</div>
      <ul className="nav-links">
        <li>
          <Link 
            to="/dashboard" 
            className={location.pathname === '/dashboard' ? 'active' : ''}
            aria-current={location.pathname === '/dashboard' ? 'page' : undefined}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/summary" 
            className={location.pathname === '/summary' ? 'active' : ''}
            aria-current={location.pathname === '/summary' ? 'page' : undefined}
          >
            Summary
          </Link>
        </li>
        <li>
          <Link 
            to="/reports" 
            className={location.pathname === '/reports' ? 'active' : ''}
            aria-current={location.pathname === '/reports' ? 'page' : undefined}
          >
            Reports
          </Link>
        </li>
      </ul>
      <button 
        className="logout-button" 
        onClick={onLogout}
        aria-label="Logout"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navigation;