import React from 'react'
// IMPORT ICONS
import { LuPackageOpen } from "react-icons/lu";


export default function Projects() {
  return (
    <div className='main-projects text-[white] px-10 pb-10'>
      <div className="relative pb-5 flex flex-nowrap items-center">
        <h1 className='bg-[#272626]  font-semibold uppercase py-2 px-5 border-2 border-[#47fffc] rounded-full flex flex-nowrap items-center gap-1'><LuPackageOpen/> Projects</h1>
        <div className="w-full h-[3px] bg-[#36fffc]"></div>
      </div>
      <div className="ms-auto w-full sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-7 mt-3">
        <div className="col  border-2 border-[#36fffc] rounded-lg">
          <div className="thumbnail h-[150px] w-full rounded-t-lg"
            style={{
              backgroundImage: "url('https://wallpapers.com/images/featured-full/amazon-npcp6jc782ixp9zs.jpg')"
              , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"
            }}></div>
          <div className="content p-3">
            <h1 className='text-md font-bold text-[#36fffc]'>Shopnow</h1>
            <p className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
          </div>
        </div>
        <div className="col  bg-white text-black rounded-lg">
          <div className="thumbnail h-[150px] w-full rounded-t-lg"
            style={{
              backgroundImage: "url('https://wallpapers.com/images/high/bright-youtube-background-tghdwhgg9rq9a0cb.webp')"
              , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"
            }}></div>
          <div className="content p-3">
            <h1 className='text-md font-bold text-black'>FreeTube</h1>
            <p className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
          </div>
        </div>
        <div className="col  border-2 border-[#36fffc] rounded-lg">
          <div className="thumbnail h-[150px] w-full rounded-t-lg"
            style={{
              backgroundImage: "url('https://wallpapers.com/images/featured-full/amazon-npcp6jc782ixp9zs.jpg')"
              , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"
            }}></div>
          <div className="content p-3">
            <h1 className='text-md font-bold text-[#36fffc]'>Chatnow</h1>
            <p className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
          </div>
        </div>
        <div className="col  border-2 border-[#36fffc] rounded-lg">
          <div className="thumbnail h-[150px] w-full rounded-t-lg"
            style={{
              backgroundImage: "url('https://wallpapers.com/images/high/bright-youtube-background-tghdwhgg9rq9a0cb.webp')"
              , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"
            }}></div>
          <div className="content p-3">
            <h1 className='text-md font-bold text-[#36fffc]'>StoryTeller</h1>
            <p className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
          </div>
        </div>
       

      </div>
    </div>
  )
}
