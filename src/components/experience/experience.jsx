import React from 'react'

function Experience() {
  return (
    <section id='experience'>
    <div className=' block  justify-center items-center mt-14'>
      <div className='text-center'>
        <p className='font-sans font-semibold text-3xl'>My Experience</p>
      </div>

      <div className='flex items-center justify-center mt-6 '>
        <div className='flex w-[350px] h-[750px] justify-center text-center p-5 items-center md:w-[700px] md:h-[450px] cursor-pointer bg-blue-900 hover:bg-transparent hover:border rounded-3xl'>
        <div className=''> 
                <p className=' text-center font-sans font-semibold text-2xl'>Ganglia Technologies,Manipal</p>
                <p className='text-center underline mt-3 font-sans font-semibold text-xl'>Flutter Developer</p>
                <li className='text-start font-sans font-semibold mt-2 '>Developed and maintained attendance management and script evaluation applications using Flutter.</li>
                <li className='text-start font-sans font-semibold mt-2 '>Implemented intuitive user interfaces and efficient data management functionalities.</li>
                <li className='text-start font-sans font-semibold mt-2 '>Collaborated with team members to ensure seamless integration with back-end services.</li>
                
                
                <p className='text-center underline mt-10 font-sans font-semibold text-xl'>ReactJS FrontEnd Developer and FastAPI Deployment on AWS</p>
                <li className='text-start font-sans font-semibold mt-2 '>Deployed ReactJS and FastAPI projects on Amazon Web Services (AWS) infrastructure.</li>
                <li className='text-start font-sans font-semibold mt-2 '>Utilized AWS services for scalable and reliable deployment of web applications</li>
                <li className='text-start font-sans font-semibold mt-2 '>Implemented front-end design for websites using React.js and Tailwind CSS.</li>

        </div>
              
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience