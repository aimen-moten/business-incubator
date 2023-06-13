import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <section className="hero">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Infinity Business Incubator</h1>
          <p className="mt-4 text-lg text-gray-700">Transforming ideas into successful businesses</p>
        </div>
      </section>

      <section className="services">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="card">
              <Link to="/services/business-development" className="card-link">
                <h3 className="text-xl font-bold mb-2">Business Development</h3>
                <p className="text-gray-700">Strategic planning and growth strategies</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/services/mentorship" className="card-link">
                <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                <p className="text-gray-700">Expert guidance and industry mentorship</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/services/funding" className="card-link">
                <h3 className="text-xl font-bold mb-2">Funding Assistance</h3>
                <p className="text-gray-700">Access to funding opportunities and investors</p>
              </Link>
            </div>
            <div className="card">
              <Link to="/services/networking" className="card-link">
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-700">Connect with industry professionals and peers</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="testimonial">
              <p className="text-lg text-gray-700 mb-2">"The support and guidance provided by Infinity Business Incubator have been instrumental in our success. Highly recommended!"</p>
              <p className="text-gray-500">- John Doe, CEO of ABC Company</p>
            </div>
            <div className="testimonial">
              <p className="text-lg text-gray-700 mb-2">"Thanks to the mentorship and resources offered by Infinity Business Incubator, we were able to scale our startup to new heights."</p>
              <p className="text-gray-500">- Jane Smith, Founder of XYZ Startup</p>
            </div>
            <div className="testimonial">
              <p className="text-lg text-gray-700 mb-2">"Infinity Business Incubator provided us with valuable connections and helped us secure the funding needed to launch our product."</p>
              <p className="text-gray-500">- Alex Johnson, Co-founder of DEF Ventures</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resources">
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="resource">
              <Link to="/resources/articles" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Articles</h3>
                <p className="text-gray-700">Read informative articles on business strategies</p>
              </Link>
            </div>
            <div className="resource">
              <Link to="/resources/templates" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Templates</h3>
                <p className="text-gray-700">Download useful templates for business planning</p>
              </Link>
            </div>
            <div className="resource">
              <Link to="/resources/videos" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Videos</h3>
                <p className="text-gray-700">Watch video tutorials on entrepreneurial skills</p>
              </Link>
            </div>
            <div className="resource">
              <Link to="/resources/tools" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Tools</h3>
                <p className="text-gray-700">Discover helpful tools and software for startups</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
