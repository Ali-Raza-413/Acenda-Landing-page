import { useState } from 'react';
import calendar from '../../Images/calendar.png'
import profileuser from '../../Images/profileuser.png'
import location from '../../Images/location.png'




function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main-div lg:p-20  p-5">
    
    <nav className=" flex justify-between max-w-screen-lg m-auto pt-5 fixed top-0 left-0 right-0 z-50 bg-gray-600 p-5  ">
  <div>
    <h1 className="font-bold text-white text-xl">ACENDA</h1>
  </div>
  <div className="flex items-center">
    <button
      className="text-white md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
      </svg>
    </button>
    <ul className={`list flex-col gap-5 justify-center md:flex md:flex-row md:gap-[5rem] absolute md:relative bg-gray-600 md:bg-transparent w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
      <a href='#'><li className='text-white text-sm'>Home</li></a>
      <a href='#'><li className='text-white text-sm'>Destination</li></a>
      <a href='#'><li className='text-white text-sm'>Blog</li></a>
      <a href='#'><li className='text-white text-sm'>News</li></a>
      <a href='#'><li className='text-white text-sm'>Contact</li></a>
    </ul>
  </div>
</nav>


      <div className='pt-[550px] flex justify-center mb-5 '>
        <div className=" shadow-lg bg-white w-[900px] rounded-lg lg:p-5 min-[320px]: p-0 ">
          <div>
            <div className="font-bold text-blue-500 lg:text-5xl sm:text-sm mb-2 text-center">Good Morning!</div>
            <p className="text-black font-semibold mb-6 lg:text-xl sm:text-sm text-center" >
              Explore beautiful places in the world with Acenda
            </p>
          </div>
          <div className='p-5'>
          <div className=' border-2 rounded-[20px] py-2 px-2'>
            <div className="flex flex-col lg:flex-row justify-between">

              <div className='flex gap-2 w-320[px]: mb-5'>
                <div>
                  <img src={location} alt='location' className="h-5 w-5 lg:h-8 lg:w-8" ></img>
                </div>
                <div>
                  <h2 className='text-xs lg:text-lg font-bold'>Location</h2>
                  <p className=' text-xs lg:text-sm opacity-50'>Add Destination</p>
                </div>
              </div>

              <div className="flex gap-2 w-320[px]: mb-5">
                <div>
                  <img src={calendar} alt='calendar' className="h-5 w-5 lg:h-8 lg:w-8" ></img>
                </div>
                <div>
                  <h2 className='text-xs lg:text-lg font-bold'>Check In</h2>
                  <p className='text-xs lg:text-sm opacity-50'>Add dates</p>
                </div>
              </div>

              <div className="flex gap-2 w-320[px]: mb-5">
                <div>
                  <img src={calendar} alt='calendar' className="h-5 w-5 lg:h-8 lg:w-8" ></img>
                </div>
                <div>
                  <h2 className='text-xs lg:text-lg font-bold'>Check Out</h2>
                  <p className=' text-xs lg:text-sm opacity-50' >Add dates</p>
                </div>
              </div>

              <div className="flex gap-2 w-320[px]: mb-5">
                <div>
                <img src={profileuser} alt="profileuser" className="h-5 w-5 lg:h-8 lg:w-8" />
                </div>
                <div>
                  <h2 className='text-xs lg:text-lg font-bold'>Guests</h2>
                  <p className='text-xs  lg:text-sm opacity-50'>Add Guests</p>
                </div>
              </div>

              <div>
                <svg className="h-5 w-5 lg:h-10 lg:w-10" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="56" height="56" rx="28" fill="#008EC4" />
                  <path d="M27.5 37C32.7467 37 37 32.7467 37 27.5C37 22.2533 32.7467 18 27.5 18C22.2533 18 18 22.2533 18 27.5C18 32.7467 22.2533 37 27.5 37Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M38 38L36 36" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
