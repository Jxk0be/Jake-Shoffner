import React from 'react'
import { BiMenuAltRight, BiArrowBack } from "react-icons/bi";
import { useState} from 'react';
import {Link} from 'react-scroll'
import res from '../JS_Resume_22.pdf'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div>
      <div className='fixed w-full bg-gradient-to-r from-[#070b0a] to-[#141515] z-20'>
        <div className='mx-10 my-8 flex justify-between justify-items-center flex-row top-0 left-0 '>
          <Link className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer tlogo text-white text-sm z-0 uppercase font-semibold' to="/" spy={true} smooth={true} duration={500}>Jake Shoffner</Link>
            <div className='hidden md:flex lg:flex'>
              <ul className='flex text-[#dad8d8] flex-nowrap shrink-0 text-sm'>
                <li className='mx-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <Link onClick={() => {setNav(!nav)}} to="/" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0000: </span>Home</Link>
                </li>
                <li className='mx-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <Link onClick={() => {setNav(!nav)}} to="about" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0001: </span>About</Link>
                </li>
                <li className='mx-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <Link onClick={() => {setNav(!nav)}} to="projects" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0010: </span>Projects</Link>
                </li>
                <li className='mx-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <Link onClick={() => {setNav(!nav)}} to="skills" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0011: </span>Skills</Link>
                </li>
                <li className='mx-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <Link onClick={() => {setNav(!nav)}} to="contact" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0100: </span>Contact</Link>
                </li>
                <li className='ml-4 hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer'>
                  <a href={res} target="_blank" rel="noreferrer"><span className='text-[#00C896]'>0101: </span>Resume</a>
                </li>
              </ul>
            </div>

            <div className='md:hidden flex z-10' onClick={() => {setNav(!nav)}}>
              {nav ? <BiArrowBack className='text-[#00C896] text-[40px] cursor-pointer'/> : <BiMenuAltRight className='text-[#00C896] text-[40px] cursor-pointer'/>}
            </div>
        </div>
      </div>

      {!nav ? '' : (
            <ul className='fixed top-0 left-0 w-full flex text-[#dad8d8] flex-col text-2xl uppercase justify-center items-center text-center h-screen md:hidden bg-gradient-to-r from-[#070b0a] to-[#141515] z-10'>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="/" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0000: </span>Home</Link>
              </li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="about" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0001: </span>About</Link>
              </li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="projects" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0010: </span>Projects</Link>
              </li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="skills" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0011: </span>Skills</Link>
              </li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="contact" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0100: </span>Contact</Link>
              </li>
              <li className='hover:text-[#00C896] transition ease-in-out duration-250 cursor-pointer my-6 w-auto'>
                <Link onClick={() => {setNav(!nav)}} to="" spy={true} smooth={true} duration={500}><span className='text-[#00C896]'>0101: </span>Resume</Link>
              </li>
          </ul>
      )}
    </div>
  )
}

export default Navbar