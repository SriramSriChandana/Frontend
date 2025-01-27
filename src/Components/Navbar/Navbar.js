import './Navbar.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in

  useEffect(() => {
    // Check if user is logged in by looking for the auth token in localStorage
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false); // Update the login state to false
    localStorage.removeItem("authToken"); // Clear the authentication token
    localStorage.clear(); // Optional: clear other items from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <> 
    
      <nav className="menu menu-1">
        <ul>
          <li><Link to="/AboutUs">About Us</Link></li>
          <li><Link to="/Explore">Explore</Link></li> {/* Corrected the space in the link */}
          <li><Link to="/YourStore">Your Store</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          {isLoggedIn && (
            <li onClick={handleLogout}>Logout</li> // Show logout button only if logged in
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
