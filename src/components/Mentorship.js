import React, { useEffect, useState } from 'react';
import mentor from '../assets/mentorship.png';

const Mentorship = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetchMentorData();
  }, []);

  const fetchMentorData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setMentors(data.results);
    } catch (error) {
      console.log('Error fetching mentor data:', error);
    }
  };
  return (
    <div className="mentorship">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Mentorship</h2>
      <p className="text-lg text-gray-700 mb-6">
        Get personalized guidance and support from experienced mentors in your entrepreneurial journey.
      </p>
      <div className="flex items-center mb-4">
        <img
          src={mentor}
          alt="Mentorship"
          className="w-10 h-10 rounded-full mr-4"
        />
        <h3 className="text-xl font-bold">Experienced Mentors</h3>
      </div>
      <p className="text-gray-700 mb-6">
        Our mentors have a wealth of experience in various industries and can provide valuable insights
        and advice to help you overcome challenges and make informed decisions.
      </p>
      <div className="flex items-center mb-4">
        <img
          src={mentor}
          alt="Mentorship"
          className="w-10 h-10 rounded-full mr-4"
        />
        <h3 className="text-xl font-bold">Tailored Guidance</h3>
      </div>
      <p className="text-gray-700 mb-6">
        Receive personalized guidance based on your specific needs and goals. Our mentors will work closely
        with you to develop strategies and action plans to drive your business forward.
      </p>
      <div className="flex items-center mb-4">
        <img
         src={mentor}
          alt="Mentorship"
          className="w-10 h-10 rounded-full mr-4"
        />
        <h3 className="text-xl font-bold">Networking Opportunities</h3>
      </div>
      <p className="text-gray-700 mb-6">
        Connect with a network of entrepreneurs and professionals through our mentorship program. Expand
        your contacts, collaborate on projects, and learn from others in the entrepreneurial community.
      </p>
      <div className="flex items-center mb-4">
        <img
          src={mentor}
          alt="Mentorship"
          className="w-10 h-10 rounded-full mr-4"
        />
        <h3 className="text-xl font-bold">Continuous Support</h3>
      </div>
      <p className="text-gray-700">
        Our mentorship program offers ongoing support and guidance. Whether you need assistance in the early
        stages of your startup or help with scaling and growth, our mentors will be there to support you
        throughout your entrepreneurial journey.
      </p>
    </div>
    <h3 className="text-xl font-bold">Some of our amazing mentors</h3>
    <div className="grid grid-cols-2 gap-4">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <img
              src={mentor.picture.large}
              alt={`${mentor.name.first} ${mentor.name.last}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">
              {mentor.name.first} {mentor.name.last}
            </h3>
            <p className="text-gray-700 text-center mb-4">{mentor.email}</p>
            <p className="text-gray-700 text-center">{mentor.phone}</p>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default Mentorship;
