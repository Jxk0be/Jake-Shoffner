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
    <div className='cret'>
      <div id='projects' className='text-white w-full h-screen'>
        <div className='w-full h-screen flex text-[#dad8d8] flex-col text-2xl justify-center items-center z-1'>
        <div className='md:text-4xl uppercase font-semibold mb-12 text-3xl'><h1><span className='text-[#00C896]'>0010:</span> Projects</h1></div>
          <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:w-4/5 w-4/5 gap-y-10 gap-x-10 lg:w-3/5'>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Anomie} alt='anomie project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Anomie-Web-App" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Site} alt='personal site project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setpersWeb(!persWeb)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Here</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Letter} alt='letter project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setDice(!letterDice)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Dice-Word-Creator-Program" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={City} alt='city project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setCity(!cityMap)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/City-Route-Finding-Program" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Maze} alt='maze project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setMaze(!randMaze)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Random-Maze-Solver" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Superball} alt='superball project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setSB(!sprBall)} className="hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/SB-High-Score-Challenge" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

          </div>

            {!anomieInfo ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>Anomie Project</h1>
                    <BiX onClick = {() => setAnInfo(!anomieInfo)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>JavaScript, CSS, HTML</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                      An anime database web application that harnesses the power of the 
                      <a href="https://jikan.moe/" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> Jikan API</a>. Written solely with JavaScript, HTML, and CSS.
                    </p>
                    <p className='mt-8'>
                      This was my first project using <span className='font-semibold'>JavaScript</span> after spending a few months of
                      free time gaining proficiency with <span className='font-semibold'>CSS</span> and <span className='font-semibold'>HTML</span>. I used my background knowledge
                      from my college courses in C++ to learn the ropes of JS in a rapid manner.
                    </p>
                    <p className='my-8'>
                      I was able to learn about the Document Object Model (DOM) as well as events and how to handle them.
                      I was also able to learn about JavaScript's built-in array methods. And to top it all off,
                      was able to work with my first ever API.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!persWeb ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>Personal Website</h1>
                    <BiX onClick = {() => setpersWeb(!persWeb)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>React and TailwindCSS</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
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

            {!letterDice ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>Letter Dice Program</h1>
                    <BiX onClick = {() => setDice(!letterDice)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>Pure C++</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
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

            {!cityMap ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>City Map Route Solving Program</h1>
                    <BiX onClick = {() => setCity(!cityMap)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>Pure C++</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
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

            {!randMaze ? '' : (
              <div className='flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>Random Maze Solving Program</h1>
                    <BiX onClick = {() => setMaze(!randMaze)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>Pure C++</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
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

            {!sprBall ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-5/12 lg:h-4/5 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-[#00C896] text-3xl lg:text-4xl font-bold'>Superball Challenge Program</h1>
                    <BiX onClick = {() => setSB(!sprBall)} className='text-[#00C896] text-[60px] cursor-pointer m-5'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>Pure C++</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
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