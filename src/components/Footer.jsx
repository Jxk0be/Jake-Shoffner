import React from 'react'

const Footer = () => {
  return (
    <div className='cret'>
      <div className="w-full h-[10vh] text-white text-2xl flex flex-col justify-center items-center bg-[#1d1d1d]">
        <div className='w-full flex text-[#dad8d8] flex-col text-xl justify-center items-center z-1'>
          <div className='grid grid-cols-1 w-full lg:w-7/12 md:text-base md:w-3/5 text-center text-base'>
            <div>
              Created by Jake Shoffner.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer