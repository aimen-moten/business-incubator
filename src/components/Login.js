import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Eagle from '../assets/eagle.gif';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };
  try{
    const userCredential await signInWithEmailAndPassword(auth,email, password);
  };
  
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <div className="text-center w-[400px]">
          <img
            src={Eagle}
            alt="Avatar"
            className="h-[130px] mx-auto mb-4 rounded-full"
          />
          <div className='mb-5'>Hey sup...nice to see you again</div>
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
        </div>
        <form onSubmit={handleSubmit}>

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
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
