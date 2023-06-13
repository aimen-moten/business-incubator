import React from 'react';
import { FaHeart, FaCode } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <span className="text-lg mr-2">
          Made with
          <FaHeart className="inline-block ml-1 text-red-500 animate-pulse" />
          by
        </span>
        <a
          href="https://www.linkedin.com"
          className="text-indigo-500 hover:text-indigo-400 transition duration-300"
        >
          Aimen Moten
        </a>
        <span className="text-lg mx-2">and</span>
        <a
          href="https://www.linkedin.com"
          className="text-indigo-500 hover:text-indigo-400 transition duration-300"
        >
          Vaishnavi Kale
        </a>
        <span className="text-lg ml-2">for SparkHub Hackathon 2023</span>
      </div>
      <div className="container mx-auto flex items-center justify-center mt-2">
        <span className="text-lg ml-4 flex items-center">
          <FaCode className="inline-block text-gray-500 mr-1" />
          with
          <span className="font-bold text-yellow-500 ml-1 animate-bounce">
            React JS and Tailwind CSS
          </span>
        </span>
      </div>
    </footer>
  );
}
