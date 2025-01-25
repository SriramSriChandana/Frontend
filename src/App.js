import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Import Components
import Requests from "./Components/Requests/Requests";
import Login from "./Components/Login/Login"; // Assuming you have a Login component
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Simulate checking login status (replace with real logic, e.g., token check)
    const userLoggedIn = localStorage.getItem("token") ? true : false;
    setIsLoggedIn(userLoggedIn);
  }, []);

  return (
    <div className="App">
      <Router>
       

        
          {!isLoggedIn ? (
            <>
             <Navbar />
              <Routes>
              {/* Login Route */}
             <Route path="/requests" element={<Requests />} />
              {/* Redirect all other routes to /login */}
              <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </>
          ) : (
            <>
              {/* Requests Route */}
              <Routes> 
              <Route path="/requests" element={<Requests />} />
              {/* Redirect all other routes to /requests */}
              <Route path="*" element={<Navigate to="/requests" />} />
              </Routes>
            </>
          )}
        
      </Router>
    </div>
  );
}

export default App;
