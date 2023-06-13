import React from 'react'
import { biHero } from '../assets'
import Footer from './Footer'

export default function AboutUs() {
  return (
    <div className='bg-slate-200 pt-24 mx-auto max-w-full h-full' >
      <h1 className='text-7xl text-gray-900 font-bold text-center pb-12'>Who are we?</h1>
      <div className='flow root'>
          <h4 className='mx-20 text-[18px] pb-20'>
            Introducing <b>Infinity Business Incubator</b>: Elevate Your Entrepreneurial Potential
            <br/>
            <br/>
            Are you ready to unleash the infinite possibilities of your business idea? Welcome to Infinity Business Incubator, the groundbreaking web app designed to empower aspiring entrepreneurs with mentorship, exclusive resources, signature programs, and so much more.
            Infinity Business Incubator is your gateway to realizing your entrepreneurial dreams. Connect with seasoned mentors, access a wealth of exclusive resources, and enroll in signature programs tailor-made to accelerate your business journey.
            <br/>
            <br/>
            Fuel your ambition by joining our mentorship program, where industry experts and successful entrepreneurs provide invaluable guidance, support, and practical advice. Benefit from their wisdom, avoid common pitfalls, and gain the confidence to navigate the business landscape with finesse.
            Experience the power of limitless resources through Infinity Business Incubator. Our curated library offers an extensive array of exclusive tools, from comprehensive business templates to market research reports, financial planning guides, and cutting-edge marketing strategies. Harness the knowledge that will help you strategize, innovate, and conquer the market.
            <br/>
            <br/>
            Elevate your potential with our signature programs, designed to cater to entrepreneurs at every stage of their journey. Whether you're refining your business plan, seeking funding opportunities, or scaling up your operations, our programs provide actionable insights, hands-on workshops, and networking opportunities with industry leaders.
            Infinity Business Incubator fosters a vibrant community of like-minded individuals who understand that entrepreneurship thrives in collaboration. Engage in thought-provoking discussions, participate in interactive webinars, and forge meaningful connections that will support your success.
            <br/>
            <br/>
            It's time to transcend limits and unlock the infinite possibilities of your business. Join Infinity Business Incubator today and elevate your entrepreneurial potential with unparalleled mentorship, exclusive resources, signature programs, and a world of possibilities. Get ready to ignite your entrepreneurial journey like never before.
          </h4>

          <img src={biHero} className='' alt='imagehero'></img>
      </div>
    </div>
  )
}
