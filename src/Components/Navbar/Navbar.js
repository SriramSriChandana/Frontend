import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    // Clear all data from localStorage
    localStorage.clear();

    // Optional: Redirect the user to the login page or home page
    window.location.href = '/login'; // Adjust the path as needed
  };

  return (
    <> 
      <nav className="menu menu-1">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Your Store</a></li>
          <li><a href="#">Requests</a></li>
          <li onClick={handleLogout}> <a href="#">Logout</a> </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
