import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub} from "react-icons/go";
import { AiFillMail } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className='cret'>
      <div id="contact" className="w-full h-[90vh] text-white text-2xl flex flex-col justify-center items-center">
        <div className='w-full h-[90vh] flex text-[#dad8d8] flex-col text-xl justify-center items-center z-1'>
          <div className='md:text-4xl uppercase font-semibold mb-2 text-3xl'><h1><span className='text-[#00C896]'>0100:</span> Contact</h1></div>
          <div className='md:text-3xl font-semibold mb-12 text-xl text-center'>
            <h1>Wanna get into contact with me? No problem.</h1>
          </div>
          <div className='grid grid-cols-4 md:grid-cols-4 md:gap-y-20 w-4/5 gap-y-5 lg:w-1/3 md:text-2xl md:w-3/5'>
            <div className='flex flex-row items-center justify-center text-6xl'>
              <a href="https://www.linkedin.com/in/jacobshoffner/" target="_blank" rel="noreferrer"><BsLinkedin className='hover:text-[#00C896] text-[#dad8d8] hover:scale-110 transition ease-in-out duration-250 cursor-pointer'></BsLinkedin></a>
            </div>
            <div className='flex flex-row items-center justify-center text-6xl'>
              <a href="mailto:jshoffn3@vols.utk.edu" rel="noreferrer"><AiFillMail className='hover:text-[#00C896] text-[#dad8d8] hover:scale-110 transition ease-in-out duration-250 cursor-pointer'></AiFillMail></a>
            </div>
            <div className='flex flex-row items-center justify-center text-6xl'>
              <a href="https://www.instagram.com/ijxke_s/" target="_blank" rel="noreferrer"><RiInstagramFill className='hover:text-[#00C896] text-[#dad8d8] hover:scale-110 transition ease-in-out duration-250 cursor-pointer'></RiInstagramFill></a>
            </div>
            <div className='flex flex-row items-center justify-center text-6xl'>
              <a href="https://github.com/Jxk0be" target="_blank" rel="noreferrer"><GoMarkGithub className='hover:text-[#00C896] text-[#dad8d8] hover:scale-110 transition ease-in-out duration-250 cursor-pointer'></GoMarkGithub></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact