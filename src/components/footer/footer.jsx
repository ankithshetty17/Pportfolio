import React, {useRef} from 'react';
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

function Footer ({ scrollToSection, homeRef,aboutRef,experienceRef,projectsRef,skillsRef,contactsRef}) {
  

  return (
    <div className='flex mt-14 justify-center items-center w-full md:h-52 h-[590px] bg-blue-400'>
      <footer className='flex justify-center items-center w-full h-full'>
        <div className='text-center font-sans font-semibold'>
          <p className='text-3xl text-black'>ANKITH SHETTY</p>
          <p className='text-gray-600'>ankishetty2002@gmail.com</p>
          <div className='flex flex-col md:flex-row gap-12 mt-5'>
            <a  onClick={() => scrollToSection(homeRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>Home</a>
            <a  onClick={() => scrollToSection(aboutRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>About</a>
            <a  onClick={() => scrollToSection(experienceRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>Experience</a>
            <a  onClick={() => scrollToSection(projectsRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>Projects</a>
            <a onClick={() => scrollToSection(skillsRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>Skills</a>
            <a onClick={() => scrollToSection(contactsRef)} className='hover:text-white text-gray-600 cursor-pointer scroll-smooth'>Contacts</a>
          </div>

          <div className='flex  justify-center gap-5 mt-5'>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href="https://github.com/ankithshetty17" target="_blank" rel="noopener noreferrer" className='text-blue-300 flex justify-center items-center w-full h-full '>
              <LuGithub className='hover:text-white cursor-pointer'/>
              </a>
            </div>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href='https://www.instagram.com/aankii_th/'target="_blank" rel='noopener noreferrer' className='text-blue-300 flex items-center justify-center w-full h-full'>  
            <LuInstagram className='hover:text-white cursor-pointer'/>
            </a>
            </div>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href='https://www.linkedin.com/in/ankith-shetty-1babb924b/' target="_blank" rel='noopener noreferrer' className='text-blue-300 flex items-center justify-center w-full h-full'>
             <LuLinkedin className='hover:text-white cursor-pointer' />
             </a>
           </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
