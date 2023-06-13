import React, { useState } from 'react';
import { database, ref, set } from './Firebase';
import Confetti from 'react-confetti';

export default function ApplicationProcess() {
  const [application, setApplication] = useState({
    name: '',
    email: '',
    linkedin: '',
    figmaPrototype: '',
    resume: '',
    portfolio: '',
    image: '',
  });

  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    setApplication((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationsRef = ref(database, 'applications');
    set(applicationsRef, application)
      .then(() => {
        console.log('Application submitted successfully!');
        alert("Application successfully submitted. We will get back to you shortly");
        setShowConfetti(true);
      })
      .catch((error) => {
        console.error('Error submitting application:', error);
        alert("Error: "+error);
      });

    setApplication({
      name: '',
      email: '',
      linkedin: '',
      figmaPrototype: '',
      resume: '',
      portfolio: '',
      image: '',
    });
  };

  return (
    <div
      className="p-4 bg-gradient-to-r from-purple-500 via-red-500 to-red-500"
      style={{ minHeight: '100vh' }}
    >
       <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Infinity Fellowship Application</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={application.name}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={application.email}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="linkedin">
            LinkedIn Profile:
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={application.linkedin}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="figmaPrototype">
            Prototype Link/Lean Canvas Link:
          </label>
          <input
            type="text"
            id="figmaPrototype"
            name="figmaPrototype"
            value={application.figmaPrototype}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="resume">
            Resume/CV Link:
          </label>
          <input
            type="text"
            id="resume"
            name="resume"
            value={application.resume}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="portfolio">
            Portfolio Link:
          </label>
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            value={application.portfolio}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2 text-black" htmlFor="image">
            Profile Image Link:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={application.image}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400 transition duration-300"
        >
          Submit Application
        </button>
      </form>
      {showConfetti && <Confetti />}
    </div>
  );
}
