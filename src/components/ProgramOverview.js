import React from 'react'
import Footer from './Footer'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function ProgramOverview() {
  return (
    <div className='bg-slate-200'>
      <h1 className='text-gray-900 font-bold text-7xl text-center py-24'>Our Programs</h1>

      <div className='bg-gray-900 flow-root px-20'>
        <h1 className='text-slate-200 font-bold text-6xl py-24 float-left max-w-[50%] '>Startup Accelerator Bootcamp

          <br />
          <span className='text-[24px] text-white font-normal'>Program Cost: $500</span>
        </h1>
        <h2 className='text-[18px] text-slate-200 py-24'>The Startup Accelerator Bootcamp is an intensive 12-week program that equips aspiring entrepreneurs with the skills, knowledge, and network they need to launch successful startup ventures. Participants will learn from experienced industry mentors and receive hands-on training in key areas such as business model development, market research, funding strategies, and investor pitch preparation. Through a combination of workshops, seminars, and networking events, this program aims to accelerate the growth of early-stage startups and help entrepreneurs navigate the challenges of the startup ecosystem.</h2>
      </div>

      <div className='bg-slate-200 flow-root px-20'>
        <h1 className='text-gray-900 font-bold text-6xl py-24 float-left max-w-[50%] '>Tech Innovators Fellowship

          <br />
          <span className='text-[24px] text-gray-700 font-normal'>Program Cost: $1000</span>
        </h1>
        <h2 className='text-[18px] text-gray-700 py-24'> The Tech Innovators Fellowship is a year-long program designed for tech-savvy entrepreneurs who are looking to leverage emerging technologies to drive innovation in their startup ventures. This highly selective fellowship provides participants with access to cutting-edge resources, including mentorship from industry experts, technical workshops, and state-of-the-art prototyping facilities. Over the course of the program, fellows will receive guidance on areas such as artificial intelligence, blockchain, Internet of Things (IoT), and cybersecurity, enabling them to develop groundbreaking solutions and gain a competitive edge in the startup landscape.</h2>
      </div>

      <div className='bg-gray-900 flow-root px-20'>
        <h1 className='text-slate-200 font-bold text-6xl py-24 float-left max-w-[50%] '>Social Impact Startup Lab

          <br />
          <span className='text-[24px] text-white font-normal'>Program Cost: $750</span>
        </h1>
        <h2 className='text-[18px] text-slate-200 py-24'>The Social Impact Startup Lab is a unique program dedicated to supporting entrepreneurs who are passionate about creating positive social change through their startup ventures. This intensive six-month lab offers a comprehensive curriculum that covers topics such as social entrepreneurship, impact measurement, sustainable business models, and community engagement strategies. Participants will work closely with industry experts, impact investors, and successful social entrepreneurs, gaining invaluable insights and guidance to scale their startups while making a meaningful difference in society. By fostering a collaborative and supportive environment, the lab empowers entrepreneurs to build sustainable businesses that address pressing social challenges.</h2>
      </div>
      <div className="text-center mt-10">
      </div>
      <div className="text-center mt-10 py-6">
        <div className="flex justify-center">
          <Link to="/application">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md relative overflow-hidden flex items-center">
              Start your application today
              <FaArrowAltCircleRight className="ml-2" />

              <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 transform scale-x-0 origin-left transition-transform duration-300"></span>
              <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-25 transform scale-x-0 origin-right transition-transform duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
