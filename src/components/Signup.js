import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Eagle from '../assets/eagle.gif';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Signup successful:', user);
    } catch (error) {
      setError(error.message);
    }
  console.log('Signup form submitted');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
};

return (
  <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded-md shadow-lg">
      <div className="text-center">
        <img
          src={Eagle}
          alt="Avatar"
          className="h-[120px] mx-auto mb-4 rounded-full"
        />
        <h3>Hey, Welcome to Infinity Business Incubator I'm StratEagle</h3>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  </div>
);
};

export default Signup;
