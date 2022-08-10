const About = () => {
  return (
    <div>
      <div id="about" className="w-full h-screen text-white text-2xl flex flex-col justify-center items-center">
      <div className='w-full h-screen flex text-[#dad8d8] flex-col text-xl justify-center items-center z-1'>
        <div className='md:text-4xl uppercase font-semibold mb-8 text-3xl'><h1><span className='text-[#00C896]'>0001:</span> About</h1></div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-20 md:w-4/5 w-4/5 gap-y-5 lg:w-3/5 md:text-2xl'>
          <div>
            I'm Jake. I'm a senior in computer science and statistics at the
            <a href="https://www.eecs.utk.edu/" target="_blank" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> University of Tennessee, Knoxville</a>.
            Currently, I'm learning web development by harnessing the power of React. I also am learning 
            data mining and web scraping wherever I can find the time!
          </div>
          <div>
            As I wrap up my undergraduate degree, I'm highly interested in a software
            related internship for the summer of 2023. Please contact me via
            <a href="mailto:jshoffn3@vols.utk.edu" rel="noreferrer" className="text-[#00C896] hover:text-[#14a883] cursor-pointer transition ease-in-out duration-250"> email </a>
            if interested in working with me!
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About