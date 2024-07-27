import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function Projects() {
//    function Slider() {
//       const [movieList,setmovieList]= useState([]);
//       useEffect(()=>{
//           getTrendingMovies();
//       },[])
//       const getTrendingMovies = ()=>{
//          globalapi.getTrendingVideos.then(resp=>{
//           console.log(resp.data.results);
//           setmovieList(resp.data.results);
//          }) 
//       }
//       const elementRef=useRef();
  
//       const sliderRight= (element)=>{
//       element.scrollLeft+=screenWidth-110;
//   }
//   const sliderLeft= (element)=>{
//       element.scrollLeft-=screenWidth-110;
//   }
//   const screenWidth = window.innerWidth;
  return (
   <section id='projects'>
    <div className='mt-14  justify-center items-center'>
            <div className='block text-center'>
            <h5 className='font-sans font-semibold text-blue-300'>My Recent Works</h5>
            <p className='font-sans font-semibold text-3xl'>Projects</p>
            </div> 

     
            <div className='w-full overflow-x-auto scrollbar-hide scroll-smooth'>
           
              <div className='flex gap-6  w-max  p-6 '>
              <MdOutlineKeyboardArrowLeft className='hidden md:block absolute  text-[35px] mt-[180px] mx-8 cursor-pointer scroll-smooth text-black' />
                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Attendence Management App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used: Flutter, Firebase (Firestore, Authentication)</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Weather Webapp</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used: Reactjs,OpenweatherAPI</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Video Conference App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter,ZEGO cloud API</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Venue App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter, Firebase (Firestore, Authentication)</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>
                
                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Venue App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter, Firebase (Firestore, Authentication)</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>

                <div className='flex flex-col  items-center justify-center w-96 h-96 p-4 bg-blue-900 hover:bg-transparent hover:border cursor-pointer  rounded-3xl'>
                   <div className='w-full h-52 bg-white rounded-3xl'>
                    <img src=''/>
                   </div>
                   <div className='text-center'>
                    <p className='mt-2 font-sans font-semibold text-xl'>Venue App</p>
                    <p className='mt-2 font-sans font-semibold'>Technologies Used:Flutter, Firebase (Firestore, Authentication)</p>
                   </div>
                   <div className='flex items-center  border-white border-2 justify-center mt-4 h-12 w-28 rounded-md hover:bg-transparent hover:border-blue-900'>
                    <a className='text-white hover:text-white' href=''>Github</a>
                   </div>
                </div>

              </div>
              
            </div>
   </div>
   </section>
  )

}
// }

export default Projects