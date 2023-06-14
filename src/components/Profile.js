import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Profile = () => {
  const profile = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    twitterUrl: 'https://twitter.com/johndoe',
    linkedinUrl: 'https://www.linkedin.com/in/johndoe',
    githubUrl: 'https://github.com/johndoe',
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img className="w-24 h-24 rounded-full mb-4" src={profile.avatarUrl} alt="Profile" />
      </div>
      <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
      <p className="text-gray-600 text-lg mb-4">{profile.title}</p>
      <p className="text-gray-700 mb-6">{profile.location}</p>
      <div className="flex items-center mb-4">
        <a href={profile.twitterUrl} target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaTwitter className="text-blue-500 hover:text-blue-600" size={24} />
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaLinkedin className="text-blue-700 hover:text-blue-800" size={24} />
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-800" size={24} />
        </a>
      </div>
      <p className="text-gray-700 mb-4">
        I am a software engineer with a passion for building innovative and scalable applications. With over 5 years
        of experience in the industry, I have worked on a variety of projects ranging from web development to mobile
        app development. My expertise lies in front-end development, JavaScript frameworks, and UI/UX design.
      </p>
      <p className="text-gray-700">
        Feel free to reach out to me if you have any questions or if you're interested in collaborating on a project.
        I'm always open to new opportunities and challenges!
      </p>
    </div>
  );
};

export default Profile;
