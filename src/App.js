import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Import Components
import Requests from "./Components/Requests/Requests";
import AboutUs  from "./Components/AboutUs/AboutUs";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default: not logged in

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("authToken"); // Example of clearing login state
  };

  useEffect(() => {
    // Simulate checking login status (replace with actual token logic)
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <>
            {/* Show Navbar when logged in */}
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/requests" element={<Requests />} />
              <Route path="/About Us" element={<AboutUs />} />
              {/* Redirect all other routes to /requests */}
              <Route path="*" element={<Navigate to="/requests" />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              {/* Redirect all other routes to /login */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
