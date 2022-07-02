import React from 'react'
import { BiMenuAltRight, BiArrowBack } from "react-icons/bi";
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div>
      <div className='fixed w-full z-10'>
        <div className='m-8 flex justify-between justify-items-center flex-row top-0 left-0'>
            <h1 className='tlogo text-[#00C896] text-sm'>Jake Shoffner</h1>

            <div className='hidden md:flex'>
              <ul className='flex text-[#dad8d8] flex-nowrap shrink-0 text-sm'>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0000: </span>Home</li>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0001: </span>About</li>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0010: </span>Projects</li>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0011: </span>Skills</li>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0100: </span>Resume</li>
                <li className='mx-7 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'><span className='text-[#00C896]'>0101: </span>Contact</li>
              </ul>
            </div>

            <div className='md:hidden flex' onClick={() => {setNav(!nav)}}>
              {nav ? <BiArrowBack className='text-[#00C896] text-[40px] cursor-pointer'/> : <BiMenuAltRight className='text-[#00C896] text-[40px] cursor-pointer'/>}
            </div>
        </div>
      </div>

      {!nav ? '' : (
              <ul className='flex text-[#dad8d8] flex-col text-3xl uppercase justify-center text-center h-screen w-screen md:hidden bg-black/40'>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0000: </span>Home</li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0001: </span>About</li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0010: </span>Projects</li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0011: </span>Skills</li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0100: </span>Resume</li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-10'><span className='text-[#00C896]'>0101: </span>Contact</li>
          </ul>
      )}
    </div>
  )
}

export default Navbar