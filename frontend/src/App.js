import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Summary from './Summary';
import Reports from './Reports';
import Navbar from './Navbar';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/summary"
          element={<PrivateRoute><Summary /></PrivateRoute>}
        />
        <Route
          path="/reports"
          element={<PrivateRoute><Reports /></PrivateRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
