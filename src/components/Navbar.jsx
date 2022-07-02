import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='mx-5 my-10 flex justify-between justify-items-center flex-row'>
          <h1 className='tlogo mx-10 text-[#00C896] text-sm'>Jake Shoffner</h1>

          <div className='hidden md:flex'>
            <ul className='flex mx-10 text-[#dad8d8] flex-nowrap shrink-0 text-sm'>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0000: </span>Home</li>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0001: </span>About</li>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0010: </span>Projects</li>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0011: </span>Skills</li>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0100: </span>Resume</li>
              <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0101: </span>Contact</li>
            </ul>
          </div>
        </div>

        <div className='md:hidden flex flex-col'>
        <ul className='flex text-[#dad8d8] flex-col text-xl uppercase'>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>Home</li>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>About</li>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>Projects</li>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>Skills</li>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>Resume</li>
            <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>Contact</li>
          </ul>
        </div>

    </div>

  )
}

export default Navbar