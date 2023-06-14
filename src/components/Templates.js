import React from 'react';

const Templates = () => {
  const templates = [
    { title: 'Lean Canvas', description: 'A one-page business plan template that helps you define your business model and focus on key elements.' },
    { title: 'SWOT Analysis', description: 'An analysis framework to identify the strengths, weaknesses, opportunities, and threats of your business.' },
    { title: 'Sales Funnel', description: 'A visual representation of the customer journey, outlining the steps from lead generation to conversion.' },
    { title: 'Marketing Plan', description: 'A comprehensive plan outlining marketing strategies, goals, target audience, and tactics.' },
    { title: 'Financial Projections', description: 'A template to project your business\'s financial performance, including revenue, expenses, and profitability.' },
    { title: 'Business Model Canvas', description: 'A strategic management tool that helps you describe, design, challenge, and pivot your business model.' },
    { title: 'Product Roadmap', description: 'A visual representation of your product\'s strategic direction, timeline, and key milestones.' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Templates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-2">{template.title}</h3>
            <p className="text-gray-700">{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
