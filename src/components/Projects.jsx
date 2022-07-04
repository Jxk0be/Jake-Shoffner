import React from 'react'
import Anomie from '../images/Anomie_API.png'
import City from '../images/City_Map_Route.png'
import Letter from '../images/Letter_Dice_Network_Flow.png'
import Maze from '../images/Maze_Solving.png'
import Site from '../images/Personal_Site.png'
import Superball from '../images/Superball_Challenge.png'
import { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";

const Projects = () => {
  const [anomieInfo, setAnInfo] = useState(false);

  return (
    <div>
      <div id='projects' className='text-white w-full h-screen'>
        <div className='w-full h-screen flex text-[#dad8d8] flex-col text-2xl justify-center items-center z-1'>
          <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:w-2/3 w-4/5 gap-y-10 gap-x-10 lg:w-3/5'>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Anomie} alt='anomie project' className=''/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Anomie-Web-App" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Site} alt='personal site project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Here</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Letter} alt='letter project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={City} alt='city project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Maze} alt='maze project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Maze-Solver" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Superball} alt='superball project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/SB-High-Score-Challenge" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

          </div>

          {!anomieInfo ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0'>
                <div className='bg-[#2b2b2b] md:w-1/2 md:h-1/2 w-1/2 h-1/2 rounded-lg'>
                  <div className='flex flex-row justify-end'><BiArrowBack onClick = {() => setAnInfo(!anomieInfo)} className='text-[#00C896] text-[40px] cursor-pointer my-5 mx-8'/></div>
                  <div className='flex flex-row justify-center my-[-60px] text-[#00C896] text-3xl'><h1>Anomie Project</h1></div>
                  <div className='flex flex-row justify-between'>
                    <h1>Jake Shoffner</h1>
                    <p>I am just so epic, this is so awesome</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Projects