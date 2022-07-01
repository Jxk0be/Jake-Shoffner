import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-5 my-10 flex justify-between justify-items-center flex-row'>
      <h1 className='mx-20 text-[#00C896] text-sm'>Logo</h1>
      <ul className='flex mx-20 text-[#dad8d8] flex-nowrap shrink-0 text-sm'>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0000: </span>Home</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0001: </span>About</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0010: </span>Projects</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0011: </span>Skills</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0100: </span>Courses</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0101: </span>Resume</li>
        <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0110: </span>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar