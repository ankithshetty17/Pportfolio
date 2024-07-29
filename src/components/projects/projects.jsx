import React from 'react'
import { MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import spotify from '../../assets/images/spotify.jpg';
import attendence from '../../assets/images/attendence.jpg';
import venue from '../../assets/images/venue.jpg';
import videocall from '../../assets/images/videocall.jpg';
import news from '../../assets/images/news.jpg';

function Projects() {
  return (
  
    <div className='mt-14  justify-center items-center'>
            <div className='block text-center'>
            <h5 className='font-sans font-semibold text-blue-300'>My Recent Works</h5>
            <p className='font-sans font-semibold text-3xl'>Projects</p>
            </div> 

     
            <div className='w-full overflow-x-auto scrollbar-hide scroll-smooth'>
           
              <div className='flex gap-6  w-max  p-6 '>
               <div className=' h-[50px] w-[50px] bg-blue-300 hidden opacity-45 md:flex justify-center items-center
               rounded-md absolute  text-[55px] mt-[180px] mx-8 cursor-pointer scroll-smooth'>
              <MdOutlineKeyboardArrowLeft className='text-white'/>
              </div>
              <div className='h-[50px] w-[50px] bg-blue-300 opacity-45 hidden md:flex  absolute justify-center items-center
               text-[55px] mt-[180px] mx-8  right-0 cursor-pointer rounded-md
               scroll-smooth'>
              <MdOutlineKeyboardArrowRight className=' text-white'/></div>
                <div className='flex flex-col  items-center justify-center w-96 h-96 px-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl  transition-all duration-100 ease-in'>
                   <div className='w-full h-52 bg-white rounded-3xl overflow-hidden'>
                    <img src={attendence} className='w-full h-full object-cover'/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Attendence Management App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Firebase (Firestore, Authentication)</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/Clockin.git'>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl overflow-hidden'>
                    <img src={news} className='w-50 h-50 object-cover'/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>NewsFeed-App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies  Used:Dart,Flutter,FireBase,NewsAPI</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/News-Feed.git'>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl overflow-hidden'>
                    <img src={venue} className='h-full w-full object-cover'/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Venue App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter, Firebase (Firestore, Authentication)</p>
                   </div>

                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/venue.git'>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl  transition-all duration-100 ease-in'>
                   <div className='w-full h-52 bg-white rounded-3xl overflow-hidden'>
                    <img src={videocall} className='h-80 w-full object-cover'/>
                   </div>
                   
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Video Conference App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter,ZEGO cloud API</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/Videocalling-App.git'>Github</a>
                   </div>
                </div>
                
                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl  transition-all duration-100 ease-in'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>CofeeStoreapp-UI</p>
                    <p className='mt-2 font-sans font-semibold'>TechnologiesUsed:Flutter,Dart,Provider.</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/Cofee-UI.git'>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl  transition-all duration-100 ease-in'>
                   <div className='w-full h-52 bg-white rounded-3xl overflow-hidden'>
                    <img src={spotify} className='w-50 h-50 object-cover'/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>SpotifyApp-UI</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter,Dart,Provider</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white flex items-center justify-center w-full h-full' href='https://github.com/ankithshetty17/Spotify-UI.git'>Github</a>
                   </div>
                </div>

              </div>
              
            </div>
   </div>
  
  )

}


export default Projects