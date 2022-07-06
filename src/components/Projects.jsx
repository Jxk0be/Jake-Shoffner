import React from 'react'
import Anomie from '../images/Anomie_API.png'
import City from '../images/City_Map_Route.png'
import Letter from '../images/Letter_Dice_Network_Flow.png'
import Maze from '../images/Maze_Solving.png'
import Site from '../images/Personal_Site.png'
import Superball from '../images/Superball_Challenge.png'
import { useState } from 'react'
import { BiX } from "react-icons/bi";

const Projects = () => {
  const [anomieInfo, setAnInfo] = useState(false);
  const [persWeb, setpersWeb] = useState(false);
  const [letterDice, setDice] = useState(false);
  const [cityMap, setCity] = useState(false);
  const [randMaze, setMaze] = useState(false);
  const [sprBall, setSB] = useState(false);

  return (
    <div>
      <div id='projects' className='text-white w-full h-screen'>
        <div className='w-full h-screen flex text-[#dad8d8] flex-col text-2xl justify-center items-center z-1'>
          <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:w-2/3 w-4/5 gap-y-10 gap-x-10 lg:w-3/5'>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Anomie} alt='anomie project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Anomie-Web-App" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Site} alt='personal site project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setpersWeb(!persWeb)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Here</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Letter} alt='letter project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setDice(!letterDice)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Dice-Word-Creator-Program" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={City} alt='city project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setCity(!cityMap)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/City-Route-Finding-Program" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Maze} alt='maze project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setMaze(!randMaze)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Random-Maze-Solver" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md'>
              <img src={Superball} alt='superball project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setSB(!sprBall)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/SB-High-Score-Challenge" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

          </div>

            {!anomieInfo ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg absolute hover:scale-105 transition ease-in-out duration-250'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>Anomie Project</h1>
                    <BiX onClick = {() => setAnInfo(!anomieInfo)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                </div>
              </div>
            )}

            {!persWeb ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg absolute hover:scale-105 transition ease-in-out duration-250'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>Personal Website</h1>
                    <BiX onClick = {() => setpersWeb(!persWeb)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                </div>
              </div>
            )}

            {!letterDice ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg absolute hover:scale-105 transition ease-in-out duration-250'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>Letter Dice Program</h1>
                    <BiX onClick = {() => setDice(!letterDice)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                </div>
              </div>
            )}

            {!cityMap ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg absolute hover:scale-105 transition ease-in-out duration-250'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>City Map Route Solving Program</h1>
                    <BiX onClick = {() => setCity(!cityMap)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                </div>
              </div>
            )}

            {!randMaze ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg absolute hover:scale-105 transition ease-in-out duration-250'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>Random Maze Solving Program</h1>
                    <BiX onClick = {() => setMaze(!randMaze)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                </div>
              </div>
            )}

            {!sprBall ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='bg-[#121614] md:w-2/5 md:h-3/5 w-1/2 h-1/2 rounded-lg hover:scale-105 transition ease-in-out duration-250 flex flex-col'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='my-9 mx-7 text-[#00C896] text-3xl font-bold'>Superball Challenge Program</h1>
                    <BiX onClick = {() => setSB(!sprBall)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 text-xl'>
                    <p>
                      The Superball Challenge was a great experience for my coding development.
                      I was able to learn a lot about algorithms and just what that meant in the coding world.
                      Though at first, the project seemed a bit over my head, I was able to harness that feeling
                      to push through and thoroughly get my feet wet.
                    </p>
                    <p className='my-10'>
                      The Superball Challenge was a great experience for my coding development.
                      I was able to learn a lot about algorithms and just what that meant in the coding world.
                      Though at first, the project seemed a bit over my head, I was able to harness that feeling
                      to push through and thoroughly get my feet wet.
                    </p>
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