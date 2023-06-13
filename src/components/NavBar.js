import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">Infinity Business Incubator</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-lg text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">Home</a></li>
          <li><a href="/" className="text-lg text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">About</a></li>
          <li><a href="/" className="text-lg text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">Services</a></li>
          <li><a href="/" className="text-lg text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">Contact</a></li>
          <li><a href="/" className="text-lg text-white hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
