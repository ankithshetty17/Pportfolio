import React from 'react';
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

function Footer() {
  return (
    <div className='flex mt-14 justify-center items-center w-full md:h-52 h-[590px] bg-blue-400'>
      <footer className='flex justify-center items-center w-full h-full'>
        <div className='text-center font-sans font-semibold'>
          <p className='text-3xl text-black'>ANKITH SHETTY</p>
          <p className='text-gray-600'>ankishetty2002@gmail.com</p>
          <div className='flex flex-col md:flex-row gap-12 mt-5'>
            <a  href='#home' className='hover:text-white text-gray-600 cursor-pointer'>Home</a>
            <a  href='#about' className='hover:text-white text-gray-600 cursor-pointer'>About</a>
            <a  href='#experience' className='hover:text-white text-gray-600 cursor-pointer'>Experience</a>
            <a  href='#projects'className='hover:text-white text-gray-600 cursor-pointer'>Projects</a>
            <a href='#skills' className='hover:text-white text-gray-600 cursor-pointer'>Skills</a>
            <a href='#contacts' className='hover:text-white text-gray-600 cursor-pointer'>Contacts</a>
          </div>

          <div className='flex  justify-center gap-5 mt-5'>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href="https://github.com/ankithshetty17" target="_blank" rel="noopener noreferrer" className='text-blue-300 '>  <LuGithub className='hover:text-white cursor-pointer'/></a>
            </div>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href='https://www.instagram.com/'target="_blank" rel='noopener noreferrer' className='text-blue-300'>  <LuInstagram className='hover:text-white cursor-pointer'/></a>
            </div>
            <div className='flex items-center justify-center h-9 w-9 hover:bg-transparent hover:border-black hover:border-2 cursor-pointer bg-black rounded-xl'>
            <a href='https://www.linkedin.com/in/ankith-shetty-1babb924b/'target="_blank" rel='noopener noreferrer' className='text-blue-300'>  <LuLinkedin className='hover:text-white cursor-pointer'/></a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
