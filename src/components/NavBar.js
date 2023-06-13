import React from 'react';
import { FaHome, FaUserCircle, FaCreativeCommons, FaFeatherAlt, FaConnectdevelop } from 'react-icons/fa';
import { getDatabase, ref, push, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import FirebaseConfig from './FirebaseConfig';

const Navbar = () => {
  const app = initializeApp(FirebaseConfig);

  const handleSignOut = () => {
    app.auth().signOut()
      .then(() => {
        // Handle successful sign out
      })
      .catch((error) => {
        // Handle sign out error
        console.log(error);
      });
  };
  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">Infinity Business Incubator</a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaHome className="nav-icon mr-1" /> Home
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaFeatherAlt className="nav-icon mr-1" /> Programs
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaCreativeCommons className="nav-icon mr-1" />Templates
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaConnectdevelop className="nav-icon mr-1" />Connect
            </a>
          </li>
          <li>
            <button onClick={handleSignOut} className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaUserCircle className="nav-icon mr-1" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
