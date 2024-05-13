// App.js

import React, { useEffect, useState } from 'react';
import './App.css';
// import SideNavBar from './components/Navbar/SideNavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import SideNavBar from './compnents/Navbar/SideNavBar';
import SignIn from './compnents/SignIn/SignIn';
import Campaigns from './compnents/Campaigns/Campaigns';
import Login from './login/Login';

function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check if token is true
  const checkToken = () => {
    // Replace this with your actual token checking logic
    const token = localStorage.getItem('key'); // Assuming token is stored in localStorage
    return !!token; // Return true if token exists
  };

  useEffect(() => {
    // When component mounts, check token and set isAuthenticated accordingly
    setIsAuthenticated(checkToken());
  }, []);
  return (
<>
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<SideNavBar />} />

      <Route path="/Campaigns" element={<Campaigns />} />
    </Routes>

    {isAuthenticated && <Navigate to="/dashboard" />}
  </Router>
</>

  );
}

export default App;
