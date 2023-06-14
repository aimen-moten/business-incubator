import React, { useContext } from 'react';
import { FaHome, FaUserCircle, FaFileAlt, FaLightbulb, FaUsers, FaBook, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          <div>
            <img src={logo} alt="logo.png" width={70} />Infinity Business Incubator
          </div>
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaHome className="nav-icon mr-1" size={30} />Home
            </a>
          </li>
          <li>
            <a
              href="/programOverview"
              className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLightbulb className="nav-icon mr-1" size={30} />Programs
            </a>
          </li>
          <li>
            <a
              href="/templates"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFileAlt className="nav-icon mr-1" size={30} />Templates
            </a>
          </li>
          <li>
            <a
              href="/resources"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaBook className="nav-icon mr-1" size={30} />Resources
            </a>
          </li>
          <li>
            <a
              href="/collaborativeWorkspace"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />Workspace
            </a>
          </li>
          <li>
            <a
              href="/contactUs"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaEnvelope className="nav-icon mr-1" size={30} />Contact
            </a>
          </li>
          <li>
            <a
              href="/ideaEvaluationTool"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLightbulb className="nav-icon mr-1" size={30} />Tool
            </a>
          </li>
          <li>
            <a
              href="/mentorship"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />Mentorship
            </a>
          </li>
          <li>
            <a
              href="/profile"
              className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaUsers className="nav-icon mr-1" size={30} />
            </a>
          </li>
          <li className="text-white">
            {isLoggedIn ? (
              <a
                href="/"
                className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="nav-icon mr-1" size={30} /> Logout
              </a>
            ) : (
              <a
                href="/login"
                className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaUserCircle className="nav-icon mr-1" size={30} /> Login
              </a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
