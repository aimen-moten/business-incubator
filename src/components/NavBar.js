import React from 'react';
import { FaHome, FaUserCircle, FaCreativeCommons, FaFeatherAlt, FaConnectdevelop, FaBook, FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = (props) => {
  return (
    <header className="bg-gray-900 py-4 shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white"><div><img src={logo} alt='logo.png' width={70}/>Infinity Business Incubator</div></a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaHome className="nav-icon mr-1" size={30}/> Home
            </a>
          </li>
          <li>
            <a href="/programOverview" className="text-lg text-white flex items-center hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaFeatherAlt className="nav-icon mr-1" size={30}/> Programs
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaCreativeCommons className="nav-icon mr-1" size={30}/>Templates
            </a>
          </li>
          <li>
            <a href="/resources" className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaBook className="nav-icon mr-1" size={30}/>Resources
            </a>
          </li>
          <li>
            <a href="/" className="text-lg text-white flex items-right hover:text-orange-300 transition duration-300 ease-in-out transform hover:scale-110">
              <FaConnectdevelop className="nav-icon mr-1" size={30}/>Connect
            </a>
          </li>
          <li className='text-white'>
          <div>
            <a href='/login' className='text-white'>
              <FaUserCircle className="nav-icon mr-1" size={40}/>
            </a>
          </div>
          // {/* <li>
          //   <a href='/logout' className='text-white'>
          //     <FaSignOutAlt className="nav-icon mr-1" size={40}/>
          //   </a>
          // </li> */}
            {
              props.name ? `Welcome - ${props.name}` : "Login"
            }
          </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
