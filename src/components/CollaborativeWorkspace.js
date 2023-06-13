import React from 'react';
import { FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import socialMediaData from './socialMediaData.json';
import forumData from './forumData.json';

const CollaborativeWorkspace = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Collaborative Workspace</h2>
      <p className="text-lg text-gray-700 mb-6">
        Create a productive and collaborative environment for aspiring entrepreneurs.
      </p>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-0">
          <div className="flex items-center mb-2">
            <FaUsers className="text-purple-500 mr-2" size={24} />
            <h3 className="text-xl font-bold">Mentorship</h3>
          </div>
          <p className="text-gray-700">
            Connect with experienced mentors who can provide guidance and support for your entrepreneurial journey.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-0">
          <div className="flex items-center mb-2">
            <FaLightbulb className="text-yellow-500 mr-2" size={24} />
            <h3 className="text-xl font-bold">Resources</h3>
          </div>
          <p className="text-gray-700">
            Access a wide range of resources including workshops, webinars, and educational materials to enhance your
            entrepreneurial skills.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex items-center mb-2">
            <FaRocket className="text-blue-500 mr-2" size={24} />
            <h3 className="text-xl font-bold">Launch and Grow</h3>
          </div>
          <p className="text-gray-700">
            Get support in launching and growing your ventures through networking opportunities, funding guidance, and
            business development assistance.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Entrepreneurship Social Media</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialMediaData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-lg font-bold">{item.name}</h4>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan elit in malesuada iaculis.
              </p>
              <a href={item.link} className="text-blue-500 hover:underline mt-4">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Community Forum</h3>
        <ul className="divide-y divide-gray-200">
          {forumData.map((post) => (
            <li key={post.id} className="py-4">
              <h4 className="text-lg font-bold">{post.title}</h4>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <div className="flex items-center mt-4">
                <img src={post.author.avatar} alt={post.author.name} className="rounded-full h-8 w-8" />
                <p className="text-gray-700 ml-2">{post.author.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborativeWorkspace;
