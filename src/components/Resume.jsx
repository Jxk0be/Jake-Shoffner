import { useState } from "react"

const Resume = () => {

  const [DSA, setDSA] = useState(true);
  const [aDSA, setADSA] = useState(false);
  const [SC, setSC] = useState(false);
  const [DM, setDM] = useState(false);
  const [CO, setCO] = useState(false);

  // COSC 302 Menu Option
  function DSACheck() {
    /* All of these functions, are ensuring that the other states are disabled */
    if (aDSA === true) setADSA(false);
    if (SC === true) setSC(false);
    if (DM === true) setDM(false);
    if (CO === true) setCO(false);

    /* This is going to show what we want, based on this funciton being called in the first place */
    if (DSA === false) setDSA(true);
  }

  // COSC 202 Menu Option
  function aDSACheck() {
    /* All of these functions, are ensuring that the other states are disabled */
    if (DSA === true) setDSA(false);
    if (SC === true) setSC(false);
    if (DM === true) setDM(false);
    if (CO === true) setCO(false);

    /* This is going to show what we want, based on this funciton being called in the first place */
    if (aDSA === false) setADSA(true);
  }

  // COSC 370 Menu Option
  function SCCheck() {
    /* All of these functions, are ensuring that the other states are disabled */
    if (DSA === true) setDSA(false);
    if (aDSA === true) setADSA(false);
    if (DM === true) setDM(false);
    if (CO === true) setCO(false);

    /* This is going to show what we want, based on this funciton being called in the first place */
    if (SC === false) setSC(true);
  }

  // COSC 311 Menu Option
  function DMCheck() {
    /* All of these functions, are ensuring that the other states are disabled */
    if (DSA === true) setDSA(false);
    if (aDSA === true) setADSA(false);
    if (SC === true) setSC(false);
    if (CO === true) setCO(false);

    /* This is going to show what we want, based on this funciton being called in the first place */
    if (DM === false) setDM(true);
  }

  // COSC 130 Menu Option
  function COCheck() {
    /* All of these functions, are ensuring that the other states are disabled */
    if (DSA === true) setDSA(false);
    if (aDSA === true) setADSA(false);
    if (SC === true) setSC(false);
    if (DM === true) setDM(false);

    /* This is going to show what we want, based on this funciton being called in the first place */
    if (CO === false) setCO(true);
  }

  return (
    <div className="cret">
      <div className='text-white' id='resume'>
        <div className='w-full h-screen flex text-[#dad8d8] flex-row text-2xl justify-center items-center text-center z-1'>

          <div className="w-1/4 flex flex-row justify-center items-center">
            <ul className="w-fit">
              <li className="my-5 cursor-pointer hover:text-[#00C896] hover:scale-105 transition ease-in-out duration-100" onClick={() => DSACheck()}>
                <span className="text-[#00C896]">0000:</span> COSC 302
              </li>
              <li className="my-5 cursor-pointer hover:text-[#00C896] hover:scale-105 transition ease-in-out duration-100" onClick={() => aDSACheck()}>
                <span className="text-[#00C896]">0001:</span> COSC 202
              </li>
              <li className="my-5 cursor-pointer hover:text-[#00C896] hover:scale-105 transition ease-in-out duration-100" onClick={() => SCCheck()}>
                <span className="text-[#00C896]">0010:</span> COSC 370
              </li>
              <li className="my-5 cursor-pointer hover:text-[#00C896] hover:scale-105 transition ease-in-out duration-100" onClick={() => DMCheck()}>
                <span className="text-[#00C896]">0011:</span> COSC 311
              </li>
              <li className="my-5 cursor-pointer hover:text-[#00C896] hover:scale-105 transition ease-in-out duration-100" onClick={() => COCheck()}>
                <span className="text-[#00C896]">0100:</span> COSC 130
              </li>
            </ul>
          </div>
          

            {!DSA ? '' : (
              <div className="w-1/2 text-left shadow-md shadow-[#00C896] h-2/4 cret bg-[#141615] rounded-lg hover:scale-105 transition ease-in-out duration-250">
                <h1 className="mt-9 mx-7 text-3xl font-semibold"><span className="text-[#00C896]">0000:</span> Algorithms</h1>
              </div>
            )}
            {!aDSA ? '' : (
              <div className="w-1/2 text-left shadow-md shadow-[#00C896] h-2/4 cret bg-[#141615] rounded-lg hover:scale-105 transition ease-in-out duration-250">
                <h1 className="mt-9 mx-7 text-3xl font-semibold"><span className="text-[#00C896]">0001:</span> Data Structures</h1>
              </div>
            )}
            {!SC ? '' : (
              <div className="w-1/2 text-left shadow-md shadow-[#00C896] h-2/4 cret rounded-lg hover:scale-105 transition ease-in-out duration-250">
                <h1 className="mt-9 mx-7 text-3xl font-semibold"><span className="text-[#00C896]">0010:</span> Scientific Computing</h1>
                
                <div className="w-full flex flex-col mx-7 mt-7 text-xl">
                  <p className="mb-4">info</p>
                  <p className="w-11/12">
                    The design, analysis, and implementation of numerical algorithms for solving 
                    problems in science and engineering. Emphasis on program design, including data 
                    structures, computational complexity, scientific computing environments, and 
                    high-performance software packages.
                  </p>
                </div>
              </div>
            )}
           {!DM ? '' : (
              <div className="w-1/2 text-left shadow-md shadow-[#00C896] h-2/4 cret bg-[#141615] rounded-lg hover:scale-105 transition ease-in-out duration-250">
                <h1 className="mt-9 mx-7 text-3xl font-semibold"><span className="text-[#00C896]">0011:</span> Discrete Math</h1>
              </div>
            )}
            {!CO ? '' : (
              <div className="w-1/2 text-left shadow-md shadow-[#00C896] h-2/4 cret bg-[#141615] rounded-lg hover:scale-105 transition ease-in-out duration-250">
                <h1 className="mt-9 mx-7 text-3xl font-semibold"><span className="text-[#00C896]">0100:</span> Computer Organization</h1>
              </div>
            )}           
        </div>
      </div>
    </div>
  )
}

export default Resume