import React  from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";

function About() {
  
  return (
    
    <div className='flex flex-col justify-center items-center p-4'>
      <div className='block mt-14 text-center'>
        <h5 className='font-sans font-semibold text-blue-300'>Get To Know</h5>
        <p className='font-sans font-semibold text-3xl'>About Me</p>
      </div>

      <div className='flex flex-wrap items-center justify-center space-x-0 space-y-6 md:space-x-10 md:space-y-2 mt-6'>
        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-80 h-48 rounded-3xl'>
          <div className='text-center'>
            <FaGraduationCap className='inline-block text-blue-200 text-3xl' />
            <div className='font-sans font-semibold mt-5'>
              <p>Bachelor's Degree</p>
              <p>Computer Science</p>
              <p>Poornaprajna College, Udupi</p>
              <p>2019-2022</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-80 h-48 rounded-3xl'>
          <div className='text-center'>
            <FaBookmark className='inline-block text-blue-200 text-3xl' />
            <div className='font-sans font-semibold mt-5'>
              <p>Bachelor's Degree CGPA</p>
              <p>7.2</p>
              <p>2019-2022</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-80 h-48 rounded-3xl'>
          <div className='text-center'>
            <RiGlobalFill className='inline-block text-blue-200 text-3xl' />
            <div className='font-sans font-semibold mt-5'>
              <p>Domains</p>
              <p>Mobile Application Development</p>
              <p>Web Development</p>
              <p>Frontend Development</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full mt-5 px-4'>
        <p className='font-sans font-semibold text-center max-w-screen-lg'>
          I'm a BSc Graduate from Poornaprajna College, Udupi. I'm an enthusiastic and driven student seeking a challenging job opportunity to
          apply and expand my technical skills. With a strong academic foundation in software engineering and 
          hands-on experience in various programming languages, I am eager to contribute to innovative projects 
          and learn from experienced professionals in the industry. I am a quick learner who is always ready to 
          face challenges.
        </p>
      </div>
    </div>
  
  )
}

export default About
