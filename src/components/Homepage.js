import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../utils/motion';
import Typewriter from 'typewriter-effect';
import {biHero, businessDevelopment, money, mentor, network, articles, templates, video, tools} from "../assets";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import Footer from './Footer';

const CarouselData = [
  {
    title: "Templates",
    text: "xys",
    link:"/resources/templates"

  }
]

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      
      <section className='pt-24' style={{ backgroundImage: `url(${biHero})`}}>
        <div className="container mx-auto items-center text-center">
        <motion.div variants={fadeIn}>
          <h1 className="text-7xl font-bold text-slate-300">Welcome to</h1> 
          <h1 className="text-8xl font-bold text-slate-300 max-w-full">Infinity Business Incubator</h1>
          <h3 className="mt-48 text-7xl font-bold text-gray-900 pb-72">Transforming ideas into successful businesses</h3> 
        </motion.div>
        </div>
      </section>

      <section className="services bg-slate-200">
        <div className="container mx-auto py-8 items-center justify-items-center text-center">
          <h2 className="text-7xl font-bold text-gray-900 mb-12 text-center pt-12">Our Services</h2>
          <div className="flex flex-wrap gap-20 mx-auto justify-center pb-24">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-125">
              <img className="w-full" src={businessDevelopment} alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a href="/services/business-development" className="text-gray-900 hover:text-blue-700">
                    Business Development
                  </a>
                </div>
                <p className="text-gray-700 text-base">Strategic planning and growth strategies</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-125">
              <img className="w-full" src={mentor} alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a href="/services/mentorship" className="text-gray-900 hover:text-blue-700">
                    Mentorship
                  </a>
                </div>
                <p className="text-gray-700 text-base">Expert guidance and industry mentorship</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-125">
              <img className="w-full" src={money} alt="" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <a href="/services/funding" className="text-gray-900 hover:text-blue-700">
                    Funding Assistance
                  </a>
                </div>
                <p className="text-gray-700 text-base">Access to funding opportunities and investors</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-125">
              <img className="w-full" src={network} alt="" />
              <div className="px-6 pt-12">
                <div className="font-bold text-xl mb-2">
                  <a href="/services/networking" className="text-gray-900 hover:text-blue-700">
                    Networking
                  </a>
                </div>
                <p className="text-gray-700 text-base">Connect with industry professionals and peers</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container mx-auto py-12 pb-24">
          <h2 className="text-7xl font-bold text-gray-900 mb-4 pt-12 text-center pb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="testimonial bg-gray-900 p-16">
              <p className="text-lg text-gray-200 mb-2">"The support and guidance provided by Infinity Business Incubator have been instrumental in our success. Highly recommended!"</p>
              <p className="text-gray-200">- John Doe, CEO of ABC Company</p>
            </div>
            <div className="testimonial bg-gray-900 p-16">
              <p className="text-lg text-gray-200 mb-2">"Thanks to the mentorship and resources offered by Infinity Business Incubator, we were able to scale our startup to new heights."</p>
              <p className="text-gray-200">- Jane Smith, Founder of XYZ Startup</p>
            </div>
            <div className="testimonial bg-gray-900 p-16">
              <p className="text-lg text-gray-200 mb-2">"Infinity Business Incubator provided us with valuable connections and helped us secure the funding needed to launch our product."</p>
              <p className="text-slate-200">- Alex Johnson, Co-founder of DEF Ventures</p>
            </div>
          </div>
        </div>
      </section>

      <section className="resources bg-slate-200 pb-12">
        <div className="container mx-auto py-8">
          <h2 className="text-7xl font-bold text-gray-900 mb-4 text-center pt-12 pb-12">Explore Our Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            <div className="resource max-w-sm rounded overflow-hidden shadow-lg bg-white p-8">
            <img src={articles} className='mb-4'></img>
              <Link to="/resources/articles" className="resource-link">
                <h3 className="text-xl font-bold mb-2 max-w-sm  ">Articles</h3>
                <p className="text-gray-700 ">Read informative articles on business strategies</p>
              </Link>
            </div>

            <div className="resource max-w-sm rounded overflow-hidden shadow-lg bg-white p-8">
            <img src={templates} className='mb-4'></img>
              <Link to="/resources/templates" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Templates</h3>
                <p className="text-gray-700">Download useful templates for business planning</p>
              </Link>
            </div>
            
            <div className="resource max-w-sm rounded overflow-hidden shadow-lg bg-white p-8">
            <img src={video} className='mb-4'></img>
              <Link to="/resources/videos" className="resource-link">
                <h3 className="text-xl font-bold mb-2">Videos</h3>
                <p className="text-gray-700">Watch video tutorials on entrepreneurial skills</p>
              </Link>
            </div>
            
            <div className="resource max-w-sm rounded overflow-hidden shadow-lg bg-white p-8">
            <img src={tools} className='mb-4'></img>
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
