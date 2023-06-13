import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">Infinity Business Incubator</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-lg text-white hover:text-gray-300">Home</a></li>
          <li><a href="/" className="text-lg text-white hover:text-gray-300">About</a></li>
          <li><a href="/" className="text-lg text-white hover:text-gray-300">Services</a></li>
          <li><a href="/" className="text-lg text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
