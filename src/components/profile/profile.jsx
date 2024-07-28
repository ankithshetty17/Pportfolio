import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import picture from '../../assets/images/picture.png';


function Profile() {
  return (
    <div>
     <div className='flex justify-center items-center  mt-4  '>
        <div className=' mt-3 w-50 h-60 md:w-80 md:h-96 bg-gradient-to-b from-blue-700  
        to-transparent  rounded-t-full'>
           <img src={picture} alt="Profile" className='w-full h-full object-cover 
           rounded-t-full shadow-black shadow-lg'/>
        </div>
       <div className='hidden lg:block absolute space-y-5 text-1xl text-blue-300 mr-[100vh] mt-16'>
         <div className='mb-3'>
           <a href="https://github.com/ankithshetty17" target="_blank" rel="noopener noreferrer" className='text-blue-300 '> 
           <LuGithub className='hover:text-white cursor-pointer'/>
           </a>
         </div>
         <div className='mb-3'>
           <a href='https://www.instagram.com/aankii_th/'target="_blank" rel='noopener noreferrer' className='text-blue-300'>  <LuInstagram className='hover:text-white cursor-pointer'/></a>
         </div>
         <div className='mb-3'>
           <a href='https://www.linkedin.com/in/ankith-shetty-1babb924b/'target="_blank" rel='noopener noreferrer' className='text-blue-300'>  <LuLinkedin className='hover:text-white cursor-pointer'/></a>
         </div>
       </div>
    </div>
    </div>
  )
}

export default Profile