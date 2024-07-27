import React from 'react'
import { IoIosMailOpen } from "react-icons/io";

function Contact() {
  return (
    <section id='contacts'>
    <div className='mt-14 justify-center items-center'>
      <div className='block text-center'>
       <h5 className='font-sans font-semibold text-blue-300'>Get In Touch</h5>
       <p className='font-sans font-semibold text-3xl'>Contact Me</p>
      </div>

      <div className='flex-wrap flex items-center  justify-center space-x-10 mt-6'>
            <div className='flex items-center justify-center  cursor-pointer bg-blue-900  hover:border  w-80 h-48 rounded-3xl'>
              <div className='text-center'>
              <IoIosMailOpen className='inline-block text-blue-200 size-[35px]'/>
              <div className='font-sans font-semibold mt-5'>
                <p>E-mail</p>
                <p>ankishetty2002@gmail.com</p>
                <a className='hover:text-white text-blue-300 text-sm underline'>Send a Message</a>
               </div>
              </div>
            </div>
             <div className='block space-y-10 mt-5'>
            <div className='bg-transparent w-96 h-14 border-2 border-blue-600 rounded-md'>
              <input className='text-gray-100 font-bold text-sm bg-transparent w-full h-full border-none
              focus:outline-none p-4'
              type='text'
              placeholder='Enter Your Mail'/>
            </div>
            <div className='bg-transparent w-96 h-14 border-2 border-blue-600 rounded-md'>
            <input className='text-gray-100 font-bold text-sm bg-transparent w-full h-full border-none
              focus:outline-none p-4'
              type='text'
              placeholder='Enter Subject'/>
            </div>
            <div className='bg-transparent w-96 h-44 border-2 border-blue-600 rounded-md p-2'>
            <input
              className='text-gray-50 w-full border-none focus:outline-none p-2 text-sm font-bold bg-transparent'
             type='text'
             placeholder='Content Here'
            />
            </div>
            <div className='flex justify-center items-center w-32 h-14 bg-blue-900 rounded-lg hover:border-white hover:border-2 cursor-pointer'>
                <p className='font-sans font-semibold cursor-pointer'>Send Message</p>
            </div>
            </div>
     </div>


    </div>
    </section>
  )
}

export default Contact