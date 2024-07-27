
import React from 'react'

function Skills() {
  return (
    <section id='skills'>
    <div className='mt-14 p-4'>
      <div className='text-center'>
        <h5 className='font-sans font-semibold text-blue-300'>Get To Know</h5>
        <p className='font-sans font-semibold text-3xl'>My Skills</p>
      </div>
      <div className='flex flex-wrap items-center justify-center space-x-0 space-y-4 md:space-x-10 md:space-y-4 mt-6'>
        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-full md:w-96 h-52 rounded-3xl p-4'>
          <div className='text-start'>
            <div className='font-sans font-semibold mt-5'>
              <p className='text-white text-lg underline'>Programming Languages</p>
              <ul className='list-disc list-inside mt-4 text-white'>
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>Dart</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-full md:w-96 h-52 rounded-3xl p-4'>
          <div className='text-start'>
            <div className='font-sans font-semibold mt-5'>
              <p className='text-white text-lg underline'>Frameworks</p>
              <ul className='list-disc list-inside mt-4 text-white'>
                <li>React.js</li>
                <li>Flutter</li>
                <li>Vite.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center cursor-pointer bg-blue-900 hover:bg-transparent hover:border border-blue-900 w-full md:w-96 h-52 rounded-3xl p-4'>
          <div className='text-start'>
            <div className='font-sans font-semibold mt-5'>
              <p className='text-white text-lg underline'>Other Tools</p>
              <ul className='list-disc list-inside mt-4 text-white'>
                <li>Git</li>
                <li>GitHub</li>
                <li>Firebase</li>
                <li>Figma</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills;
