import React from 'react';
// ICONS
import { BiUser } from "react-icons/bi";
import { FcEngineering } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  return (
    <>
     <nav className='flex flex-nowrap items-center justify-between px-8 md:px-10 py-3 bg-white sticky top-0 left-0 w-full shadow-sm z-[9999]' >
        <div className="section-1 flex flex-nowrap items-center gap-5">
          <div className="logo flex flex-nowrap items-center gap-1"><h1 className='font-medium cursor-pointer'>CSE</h1> <FcEngineering className='animate-spin text-orange-500' /></div>
          {/* Design,Develop,Deploy */}

        </div>
        <div className="section-2">
          <button type='button' className='flex flex-nowrap items-center gap-1 bg-blue-500 text-white px-4 py-2 rounded-md'>
            <h1 className='text-[13px] tracking-[1px]'>Contact Me </h1>
            <BiUser />
          </button>
        </div>
      </nav>
      <div className="flex flex-nowrap items-center justify-center bg-gray-100 text-gray-500 text-sm gap-4 p-5 font-[500]">
        <h1>Design</h1>
        <IoIosArrowForward />
        <h1>Develop</h1>
        <IoIosArrowForward />
        <h1>Deploy</h1>
      </div> 
    </>
  )
}
