import React, { useState } from 'react';
import { FaLightbulb, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { RiArrowGoBackLine } from 'react-icons/ri';

const IdeaEvaluation = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <RiArrowGoBackLine className="text-gray-600 mr-2" size={20} />
        <h2 className="text-2xl font-bold">Idea Evaluation</h2>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        Evaluate and assess business ideas for their viability and potential.
      </p>
      <div className="flex items-center mb-4">
        <FaLightbulb className="text-yellow-500 mr-2" size={24} />
        <h3 className="text-xl font-bold">Idea Analysis</h3>
      </div>
      <ul className="list-disc ml-6 mb-6">
        <li className="text-gray-700 mb-2">
          Evaluate various aspects of the business idea, such as market potential, competition, and target audience.
        </li>
        <li className="text-gray-700 mb-2">
          Conduct SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis to identify key factors for success.
        </li>
        <li className="text-gray-700 mb-2">Assess feasibility, scalability, and profitability of the idea.</li>
      </ul>
      <div className="flex items-center mb-4">
        <FaCheckCircle className="text-green-500 mr-2" size={24} />
        <h3 className="text-xl font-bold">Validation Process</h3>
      </div>
      <ul className="list-disc ml-6 mb-6">
        <li className="text-gray-700 mb-2">Validate the business idea through market research and customer feedback.</li>
        <li className="text-gray-700 mb-2">Test the idea's viability by conducting pilot studies or prototypes.</li>
        <li className="text-gray-700 mb-2">
          Gather data and analyze results to make informed decisions about moving forward with the idea.
        </li>
      </ul>
      <div className="flex items-center mb-4">
        <FaTimesCircle className="text-red-500 mr-2" size={24} />
        <h3 className="text-xl font-bold">Risk Assessment</h3>
      </div>
      <ul className="list-disc ml-6 mb-6">
        <li className="text-gray-700 mb-2">Identify and assess potential risks associated with the business idea.</li>
        <li className="text-gray-700 mb-2">Develop contingency plans to mitigate risks and challenges.</li>
        <li className="text-gray-700 mb-2">
          Evaluate financial implications, legal requirements, and other potential obstacles.
        </li>
      </ul>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Upload Lean Canvas Template</h3>
        <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileUpload} />
        {uploadedFile && <p className="mt-4">File uploaded: {uploadedFile.name}</p>}
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded mt-4"
          onClick={openModal}
          disabled={!uploadedFile}
        >
          Evaluate Idea
        </button>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Processing Complete!</h3>
            <p className="text-gray-700">
              You will receive a detailed email report about the idea analysis soon.
            </p>
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaEvaluation;
