import image from '../images/Theodore_Kaczynski_2.jpg'

const About = () => {
  return (
    <div className='cret'>
      <div id="about" className="w-full h-screen text-white text-2xl flex flex-col justify-center items-center">
        <div className='md:text-4xl uppercase font-semibold mb-12 text-3xl'><h1><span className='text-[#00C896]'>0001:</span> About Me</h1></div>
        <div className="grid grid-cols-2 gap-x-20 w-3/5 ">
          <div className='flex flex-row justify-center items-center'>
            <img src={image} alt="about me" className='w-full'/>
          </div>

          <div className='cret'>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde beatae vero earum vel 
              possimus magni tempore dignissimos ducimus facere modi voluptates labore ea sapiente aperiam, 
              accusantium quidem magnam iste! Aliquid similique exercitationem assumenda.
            </p>
            <p className='mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde beatae vero earum vel 
              possimus magni tempore dignissimos ducimus facere modi voluptates labore ea sapiente aperiam, 
              accusantium quidem magnam iste! Aliquid similique exercitationem assumenda.
            </p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default About