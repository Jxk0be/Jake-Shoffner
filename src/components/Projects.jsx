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
  /* All relevant states and their setting functions */
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

          {/* Grid of all my projects, changing the amount of rows depending on the width of the browser */}
          <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-10 md:gap-y-20 md:w-4/5 w-4/5 gap-y-10 gap-x-10 lg:w-3/5'>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Anomie} alt='anomie project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setAnInfo(!anomieInfo)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://github.com/Jxk0be/Anomie-Web-App" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Github</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Site} alt='personal site project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setpersWeb(!persWeb)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <a href="https://jxk0be.me/Jake-Shoffner" target="_blank" rel="noreferrer" className="md:my-5 my-1 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Here</a>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Letter} alt='letter project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setDice(!letterDice)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <h1 className="md:my-5 my-1">Private</h1>              
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={City} alt='city project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setCity(!cityMap)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <h1 className="md:my-5 my-1">Private</h1>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Maze} alt='maze project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setMaze(!randMaze)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <h1 className="md:my-5 my-1">Private</h1>
              </div>
            </div>

            <div className='bg-[#1d1d1d] hover:scale-105 transition ease-in-out duration-250 rounded-md shadow-md shadow-[#00C896]'>
              <img src={Superball} alt='superball project'/>
              <div className='flex flex-row justify-around'>
                <h1 onClick={() => setSB(!sprBall)} className="eww hidden md:flex md:my-5 hover:text-[#00C896] cursor-pointer transition ease-in-out duration-250">Info</h1>
                <h1 className="md:my-5 my-1">Private</h1>
              </div>
            </div>

          </div>

            {/* 
                Everything from here onward is saying: 
                "if the Info button is hit, we need to display info" 
                "if the Exit button is hit, we need to close the info display"
            */}
            {!anomieInfo ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0000:</span> Anomie Project</h1>
                    <BiX onClick = {() => setAnInfo(!anomieInfo)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
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
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0001:</span> Personal Website</h1>
                    <BiX onClick = {() => setpersWeb(!persWeb)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>React and TailwindCSS</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                    My personal website! Created mainly with React and TailwindCSS, with some additional packages such as:
                      <a href="https://www.npmjs.com/package/react-typed" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> React-Typed</a>, 
                      <a href="https://react-icons.github.io/react-icons" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> React-Icons</a>, and
                      <a href="https://www.npmjs.com/package/react-scroll" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> React-Scroll</a>.
                    </p>
                    <p className='mt-8'>
                      This was my first time ever using <span className='font-semibold'>React</span> or <span className='font-semibold'>Tailwind</span>. I mostly aimed at learning the 
                      basics of React, thus I took advantage of Tailwind’s easy-to-use styling to put my 
                      major focus on the mechanics of React. From this, I was able to learn a great deal about 
                      React, and still have a fairly flashy UI without having to spend hours using regular CSS.
                    </p>
                    <p className='my-8'>
                      I learned to take advantage of the React library to create a web application 
                      very quickly and easily. I learned about the structure of a React app and then 
                      some more library-specific functionalities such as hooks.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!letterDice ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0010:</span> Letter Dice Program</h1>
                    <BiX onClick = {() => setDice(!letterDice)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>C++ 98</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                      A small algorithmic program focusing on network flow. Written 
                      entirely in C++ 98 for my data structures and algorithms course.
                    </p>
                    <p className='mt-8'>
                      During my course on algorithms, I was taught about <span className='font-semibold'>network flow</span>. 
                      I needed to create a program that would take in a dice with x-sides. 
                      Each side would represent a letter. I then would take in words and see 
                      if they could be spelled, making sure to not use a side more than once 
                      per word. I did this by using a <span className='font-semibold'>modified version of Dijkstra’s algorithm</span>.
                    </p>
                    <p className='my-8'>
                      I learned a lot about network flow, and how it can be used to solve 
                      problems one might not think of when first learning the algorithm. 
                      This was a very difficult, yet rewarding project.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!cityMap ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0011:</span> City Map Route Solver</h1>
                    <BiX onClick = {() => setCity(!cityMap)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>C++ 98</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                      A program that takes in a city’s intersections and stop lights, then finds the 
                      shortest time-specific path from start to finish. Written in C++ 98.
                    </p>
                    <p className='mt-8'>
                      For my algorithms course, this project was to learn <span className='font-semibold'>Dijkstra’s algorithm</span> and see 
                      how it could be implemented in a real-world scenario. This program resembles how a 
                      GPS might find the <span className='font-semibold'>shortest path</span> and calculate ETAs.
                    </p>
                    <p className='my-8'>
                      I learned about Dijkstra’s algorithm, a modified version of breadth-first 
                      search (BFS). This also forced me to learn about how to keep track of weighted 
                      paths during a search of a graph.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!randMaze ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0100:</span> Maze Solving Program</h1>
                    <BiX onClick = {() => setMaze(!randMaze)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>C++ 98</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                      A fun little program that takes a randomly generated maze of walls and finds a valid 
                      path from the start to finish. Completely coded in C++ 98.
                    </p>
                    <p className='mt-8'>
                      The first algorithm I learned, when being introduced to <span className='font-semibold'>graphs</span>, was <span className='font-semibold'>depth-first search (DFS)</span>. 
                      I had to figure out how to read-in walls of a given maze and create the graph and corresponding 
                      edges accordingly. Then, I was able to implement DFS to find a valid path from the beginning of the 
                      maze to the end.
                    </p>
                    <p className='my-8'>
                      I was able to learn how to represent a graph with code. I also learned how to traverse the graph until 
                      we reach the desired endpoint by using DFS. This was a great introduction to the more important algorithms 
                      I’ve learned.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {!sprBall ? '' : (
              <div className='md:flex flex-row justify-center items-center absolute h-screen w-full left-0 z-10 hidden'>
                <div className='cret bg-[#121614] rounded-lg absolute hover:scale-105 transition ease-in-out duration-250 xlg:w-3/12 xlg:h-3/5 lg:w-1/2 lg:h-8/12 md:w-8/12 md:h-8/12'>
                  <div className='flex flex-row justify-between'>
                    <h1 className='mt-9 mx-7 text-3xl lg:text-4xl font-bold'><span className='text-[#00C896]'>0101:</span> Superball Challenge</h1>
                    <BiX onClick = {() => setSB(!sprBall)} className='text-[#00C896] text-[60px] cursor-pointer m-5 hover:text-[#14a883]'/>
                  </div>
                  <div className='flex flex-row justify-start items-center mx-8 text-red-500 text-xl font-medium lg:text-2xl'>
                    <h1>C++ 98</h1>
                  </div>
                  <div className='flex flex-col justify-center items-center mx-10 my-8 lg:text-2xl'>
                    <p>
                      A C++ CLI program that represents an old windows game “Superball”. The assignment from my algorithms 
                      course, we were to code a program that would go for high scores.
                    </p>
                    <p className='mt-8'>
                      The goal of the game was to score as many times as possible, but certain things must be true for a player 
                      to have the ability to score. It was super fun to get creative and try to understand the best way to get 
                      consistent high scores. I was able to make this program by using a <a href="https://bitbucket.org/jimplank/plank-disjoint-sets/src/master/" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250">disjoint sets</a> data structure from my professor.
                    </p>
                    <p className='my-8'>
                      I really liked this project as an introduction to algorithms. I was able to sharpen my problem-solving skills by 
                      having to think of the most effective ways to get the highest score possible for any given game board.
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