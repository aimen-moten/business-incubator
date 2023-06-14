import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Resources = () => {
  const learningPaths = [
    { title: 'Entrepreneurship 101', icon: FaGraduationCap },
    { title: 'Digital Marketing Fundamentals', icon: FaGraduationCap },
    { title: 'Business Finance Essentials', icon: FaGraduationCap },
  ];

  const skillsCertifications = [
    { title: 'Business Strategy', icon: FaCertificate },
    { title: 'Marketing Analytics', icon: FaCertificate },
    { title: 'Financial Planning', icon: FaCertificate },
  ];

  const courseRecommendations = [
    { title: 'Introduction to Startups', icon: FaGraduationCap },
    { title: 'E-commerce Strategies', icon: FaGraduationCap },
    { title: 'Social Media Marketing', icon: FaGraduationCap },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Learning Paths</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {learningPaths.map((path, index) => (
              <li key={index} className="flex items-center mb-2">
                <path.icon className="mr-2 text-purple-600" size={18} />
                {path.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Skills Certifications</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {skillsCertifications.map((certification, index) => (
              <li key={index} className="flex items-center mb-2">
                <certification.icon className="mr-2 text-purple-600" size={18} />
                {certification.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Course Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {courseRecommendations.map((course, index) => (
              <li key={index} className="flex items-center mb-2">
                <course.icon className="mr-2 text-purple-600" size={18} />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Course Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {courseRecommendations.map((course, index) => (
              <li key={index} className="flex items-center mb-2">
                <course.icon className="mr-2 text-purple-600" size={18} />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Course Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {courseRecommendations.map((course, index) => (
              <li key={index} className="flex items-center mb-2">
                <course.icon className="mr-2 text-purple-600" size={18} />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Course Recommendations</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {courseRecommendations.map((course, index) => (
              <li key={index} className="flex items-center mb-2">
                <course.icon className="mr-2 text-purple-600" size={18} />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
