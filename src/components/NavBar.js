import React, { useContext } from 'react';
import { FaHome, FaUserCircle, FaFileAlt, FaLightbulb, FaUsers, FaBook, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          <div>
            <img src={logo} alt="logo.png" width={70} />
            Infinity Business Incubator
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaHome className="nav-icon mr-1" size={30} />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/programOverview"
              className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLightbulb className="nav-icon mr-1" size={30} />
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="/templates"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFileAlt className="nav-icon mr-1" size={30} />
              Templates
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaBook className="nav-icon mr-1" size={30} />
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/collaborativeWorkspace"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />
              Workspace
            </Link>
          </li>
          <li>
            <Link
              to="/contactUs"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaEnvelope className="nav-icon mr-1" size={30} />
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/ideaEvaluationTool"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLightbulb className="nav-icon mr-1" size={30} />
              Tool
            </Link>
          </li>
          <li>
            <Link
              to="/mentorship"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />
              Mentorship
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />
            </Link>
          </li>
          <li className="text-white">
            {isLoggedIn ? (
              <Link
                to="/"
                className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="nav-icon mr-1" size={30} /> Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaUserCircle className="nav-icon mr-1" size={30} /> Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
