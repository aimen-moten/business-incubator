import React from 'react';
import { FaHome, FaUserCircle, FaCreativeCommons, FaFeatherAlt, FaConnectdevelop, FaBook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">Infinity Business Incubator</a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaHome className="nav-icon mr-1" size={40}/> Home
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaFeatherAlt className="nav-icon mr-1" size={40}/> Programs
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaCreativeCommons className="nav-icon mr-1" size={40}/>Templates
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaBook className="nav-icon mr-1" size={40}/>Resources
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaConnectdevelop className="nav-icon mr-1" size={40}/>Connect
            </a>
          </li>
          <li>
            <a href='/' className='text-white'>
              <FaUserCircle className="nav-icon mr-1" size={40}/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
