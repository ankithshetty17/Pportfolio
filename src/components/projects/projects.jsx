import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Projects() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='mt-14 justify-center items-center'>
      <div className='block text-center'>
        <h5 className='font-sans font-semibold text-blue-300'>My Recent Works</h5>
        <p className='font-sans font-semibold text-3xl'>Projects</p>
      </div>

      <div className='relative w-full overflow-hidden'>
        {/* <MdOutlineKeyboardArrowLeft
          onClick={scrollLeft}
          className='hidden md:block absolute left-0 text-[55px] mt-[180px] mx-8 cursor-pointer text-black'
        />
        <MdOutlineKeyboardArrowRight
          onClick={scrollRight}
          className='hidden md:block absolute right-0 text-[55px] mt-[180px] mx-8 cursor-pointer text-black'
        /> */}
        <div
          ref={scrollContainerRef}
          className='flex gap-6 w-full p-6 overflow-x-auto scrollbar-hide scroll-smooth'
        >
          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>Attendance Management App</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Firebase (Firestore, Authentication)</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/Clockin.git'>Github</a>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>NewsFeed App</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Dart, Flutter, Firebase (Firebase Authentication), NewsAPI</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/News-Feed.git'>Github</a>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>Venue App</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Firebase (Firestore, Authentication)</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/venue.git'>Github</a>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>Video Conference App</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, ZEGO Cloud API</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/Videocalling-App.git'>Github</a>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>Coffee Store App UI</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Dart, Provider</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/Cofee-UI.git'>Github</a>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer rounded-3xl transition-all duration-100 ease-in'>
            <div className='w-full h-52 bg-white rounded-3xl'>
              <img src='' alt='Project Thumbnail'/>
            </div>
            <div className='text-center'>
              <p className='mt-2 font-sans font-semibold text-xl'>Spotify App UI</p>
              <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Dart, Provider</p>
            </div>
            <div className='flex items-center border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
              <a className='text-white hover:text-white w-full h-full flex items-center justify-center' href='https://github.com/ankithshetty17/Spotify-UI.git'>Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
