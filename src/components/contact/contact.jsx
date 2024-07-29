import React, { useState, useRef } from 'react';
import { IoIosMailOpen } from "react-icons/io";
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bltfthf', 'template_iiw45bf', form.current, 'vUhldUciQA33F8_6B')
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const isFormValid = name && email && message;

  return (
    <section id='contacts'>
      <div className='mt-14 justify-center items-center'>
        <div className='block text-center'>
          <h5 className='font-sans font-semibold text-blue-300'>Get In Touch</h5>
          <p className='font-sans font-semibold text-3xl'>Contact Me</p>
        </div>

        <div className='flex-wrap flex items-center justify-center space-x-10 mt-6'>
          <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:border w-80 h-48 rounded-3xl'>
            <div className='text-center'>
              <IoIosMailOpen className='inline-block text-blue-200 size-[35px]' />
              <div className='font-sans font-semibold mt-5'>
                <p>E-mail</p>
                <p>ankishetty2002@gmail.com</p>
                <p className='hover:text-white text-blue-300 text-sm'>Send a Message</p>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className='block space-y-10 mt-5'>
            <div className='bg-transparent w-96 h-14 border-2 border-blue-600 rounded-md'>
              <input
                className='text-gray-100 font-bold text-sm bg-transparent w-full h-full border-none focus:outline-none p-4'
                type='text'
                name='from_name'
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='bg-transparent w-96 h-14 border-2 border-blue-600 rounded-md'>
              <input
                className='text-gray-100 font-bold text-sm bg-transparent w-full h-full border-none focus:outline-none p-4'
                type='email'
                name='from_email'
                placeholder='Enter Your Mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='bg-transparent w-96 h-44 border-2 border-blue-600 rounded-md p-2'>
              <textarea
                className='text-gray-50 w-full h-full border-none focus:outline-none p-2 text-sm font-bold bg-transparent'
                name='message'
                placeholder='Enter Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className={`flex justify-center items-center w-32 h-14 rounded-lg cursor-pointer ${isFormValid ? 'bg-blue-900 hover:border-white hover:border-2' : 'bg-gray-500 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              <p className='font-sans font-semibold'>Send</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
