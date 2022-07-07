import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='cret'>
      <div className="text-white" id="/">
        <div className="w-full h-screen flex text-[#dad8d8] flex-col text-2xl justify-center items-center text-center z-0 font-semibold">
          <h1 className='uppercase md:text-6xl text-4xl'>Jake Shoffner</h1>
          <h1 className='text-[#00C896] md:text-4xl text-2xl font-medium'><Typed strings={['computer science', 'statistics']} typeSpeed={110} backSpeed={90} loop/></h1>
        </div>
      </div>
    </div>

  )
}

export default Hero