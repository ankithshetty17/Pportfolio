import React from 'react'

function Header() {
  return (
    <div className=' pt-24  justify-center items-center'>
        <div className='  text-center font-sans font-semibold space-y-4'>
        <h5>Hello I'm</h5>
        <h1>Ankith Shetty</h1>
        <h5>Software Developer</h5>
        
        <div className='flex gap-7  justify-center '>
            <div className='flex items-center justify-center mt-5 w-[150px] h-[50px] bg-transparent hover:border-blue-400 border-2 rounded-md cursor-pointer'>
                <a className='text-white hover:text-white text-sm font-sans'>
                    DOWNLOAD CV
                </a>
            </div>
            <div className='flex items-center justify-center mt-5 w-[150px] h-[50px] bg-blue-600  rounded-md hover:bg-transparent hover:border-white hover:border-2 cursor-pointer'>
                <a className='text-white text-sm font-sans hover:text-white '>
                    CONTACT ME
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header