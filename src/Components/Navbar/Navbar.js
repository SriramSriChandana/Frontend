import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all data from localStorage
    localStorage.clear();
    

    // Redirect the user to the login page
    navigate('/login'); // Use navigate for client-side routing
  };

  return (
    <> 
      <nav className="menu menu-1">
        <ul>
          <li><Link to="/About Us">About Us</Link></li>
          <li><Link to="/About Us">Explore</Link></li>
          <li><Link to="/About Us">Your Store</Link></li>
          <li><Link to="/requests">Requests</Link></li>
          <li onClick={handleLogout}> Logout </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
