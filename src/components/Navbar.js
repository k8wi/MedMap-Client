import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const redirectToLogin = () => {
    setIsLoggingIn(true);
  };

  return (
    isLoggingIn ? (
      <Login setIsLoggedIn={setIsLoggedIn} setIsLoggingIn={setIsLoggingIn} />
    ) : (
      <nav className="fixed top-0 left-0 right-0 bg-gray-200 bg-opacity-70 p-4 flex justify-between items-center z-50">
        <div className="flex items-center space-x-4">
        <Link to="/" className="text-3xl font-bold font-family-'YourCustomFont'">medmap.</Link>

        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/hospital" className="text-black">Hospitals</Link>
          <Link to="/facilities" className="text-black">Facilities</Link>
          <Link to="/about" className="text-black">About</Link>
        </div>
        <div className="ml-5 flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/profile" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Profile
            </Link>
          ) : (
            <button onClick={redirectToLogin}>Login</button>
          )}
          {isLoggedIn && (
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Logout
            </button>
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
