import cplusplus from '../images/C++.png'
import JS from '../images/JS.png'
import R from '../images/R.png'
import TW from '../images/tailwind.png'
import React from '../images/react.png'
import Python from '../images/python.png'

const Skills = () => {
  return (
    <div className='cret'>
      <div id='skills' className='text-white w-full h-screen'>
        <div className='w-full h-screen flex text-[#dad8d8] flex-col text-lg md:text-2xl justify-center items-center z-1'>
          <div className='md:text-4xl uppercase font-semibold mb-12 text-3xl'><h1><span className='text-[#00C896]'>0011:</span> Skills</h1></div>

          {/* Same as the "Projects" section, I am displaying a grid of skills that changes 
              based on the width of the browser 
          */}
          <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:w-7/12 w-8/12 gap-y-10 gap-x-10 lg:w-5/12 xlg:w-1/3'>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#659ad2] px-10'>
              <a href="https://devdocs.io/cpp/" target="_blank" rel="noreferrer">
                <img src={cplusplus} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://devdocs.io/cpp/" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#659ad2] cursor-pointer transition ease-in-out duration-250 font-semibold">C++</a>
                </div>
              </a>
            </div>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#ffd83a] px-10'>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src={JS} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#ffd83a] cursor-pointer transition ease-in-out duration-250 font-semibold">JavaScript</a>
                </div>
              </a>
            </div>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#ffd140] px-10'>
              <a href="https://docs.python.org/3/" target="_blank" rel="noreferrer">
                <img src={Python} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://docs.python.org/3/" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#ffd140] cursor-pointer transition ease-in-out duration-250 font-semibold">Python</a>
                </div>
              </a>
            </div>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#53c1de] px-10'>
              <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                <img src={React} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#53c1de] cursor-pointer transition ease-in-out duration-250 font-semibold">React</a>
                </div>
              </a>
            </div>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#07b6d5] px-10'>
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                <img src={TW} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#07b6d5] cursor-pointer transition ease-in-out duration-250 font-semibold">Tailwind</a>
                </div>
              </a>
            </div>

            <div className='bg-[#121614] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#2167ba] px-10'>
              <a href="https://www.r-project.org/other-docs.html" target="_blank" rel="noreferrer">
                <img src={R} alt='anomie project' className='md:pt-5 py-2'/>
                <div className='flex flex-row justify-around mb-2'>
                  <a href="https://www.r-project.org/other-docs.html" target="_blank" rel="noreferrer" className="md:flex mt-2 hover:text-[#2167ba] cursor-pointer transition ease-in-out duration-250 font-semibold no_wrap">R Project</a>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills