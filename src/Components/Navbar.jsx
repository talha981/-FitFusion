import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if a token exists to determine if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-gray-800 text-white  p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-1 flex justify-center md:justify-start">
          <div className="text-white text-2xl font-bold">
            <Link to="/" className="hover:text-gray-300 italic">Fitness World</Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex p-2 space-x-6">
          <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white text-lg hover:text-gray-300">About</Link>
          {token && (
            <>
              <Link to="/dashboard" className="text-white text-lg hover:text-gray-300">Dashboard</Link>
              <Link to="/booking" className="text-white text-lg hover:text-gray-300">Class Booking</Link>
              <Link to="/payment" className="text-white text-lg hover:text-gray-300">Payment</Link>
              <Link to="/signup" className="text-white text-lg hover:text-gray-300">Signup</Link>
            </>
          )}
        </div>

        {/* Auth Links / Logout Button */}
        <div className="flex-1 flex justify-end">
          {token ? (
            <button
              onClick={handleLogout}
              className="text-white text-lg hover:text-gray-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white text-lg hover:text-gray-300 ml-5">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
