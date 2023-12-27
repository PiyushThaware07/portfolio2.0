import React from 'react';
// IMPORT ICONS
import { LuPackageOpen } from "react-icons/lu";
import { FaLink } from "react-icons/fa6";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";


export default function Projects() {

  return (
    <>
      <div className="relative flex flex-nowrap items-center px-8 text-white">
        <h1 className='bg-[#272626]  font-semibold uppercase py-2 px-5 border-2 border-[#47fffc] rounded-full flex flex-nowrap items-center gap-1'><LuPackageOpen /> Projects</h1>
        <div className="w-full h-[3px] bg-[#36fffc]"></div>
      </div>
      <div className="main-projects text-white flex flex-nowrap flex-col items-center justify-center p-[40px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="cardWrapper w-[95%] relative">
          <button type='button' className='h-[40px] w-[40px] bg-[white] text-black font-bold rounded-full text-2xl flex flex-nowrap items-center justify-center absolute left-[-20px] top-[50%] translate-y-[-80%]'><MdNavigateBefore /></button>
          <div className="cardItems gap-8 overflow-x-auto" style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>

            <div className="cardItem text-black w-[270px]">
              <img className='h-[200px] w-full object-cover rounded-t-lg' src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.webp" alt="img-1" />
              <div className="content bg-white rounded-b-lg p-2">
                <h1 className='flex flex-nowrap items-center gap-1 text-sm font-semibold my-3 cursor-pointer'><FaLink /> ShopNow</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
              </div>
            </div>
            <div className="cardItem text-black w-[270px]">
              <img className='h-[200px] w-full object-cover rounded-t-lg' src="https://wallpapers.com/images/hd/youtube-logo-hd-oz9kmxwt1y1ucwt5.webp" alt="img-1" />
              <div className="content bg-white rounded-b-lg p-2">
                <h1 className='flex flex-nowrap items-center gap-1 text-sm font-semibold my-3 cursor-pointer'><FaLink /> FreeTube</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
              </div>
            </div>
            <div className="cardItem text-black w-[270px]">
              <img className='h-[200px] w-full object-cover rounded-t-lg' src="https://wallpapers.com/images/high/instagram-cartoon-art-4jrnp52eyr1ifrxx.webp" alt="img-1" />
              <div className="content bg-white rounded-b-lg p-2">
                <h1 className='flex flex-nowrap items-center gap-1 text-sm font-semibold my-3 cursor-pointer'><FaLink /> ChatNow</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
              </div>
            </div>
            <div className="cardItem text-black w-[270px]">
              <img className='h-[200px] w-full object-cover rounded-t-lg' src="https://wallpapers.com/images/high/sad-employees-unemployment-vector-art-l7i226qy8dhdwx3w.webp" alt="img-1" />
              <div className="content bg-white rounded-b-lg p-2">
                <h1 className='flex flex-nowrap items-center gap-1 text-sm font-semibold my-3 cursor-pointer'><FaLink /> Employee Record Manager</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
              </div>
            </div>
            <div className="cardItem text-black w-[270px]">
              <img className='h-[200px] w-full object-cover rounded-t-lg' src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img-1" />
              <div className="content bg-white rounded-b-lg p-2">
                <h1 className='flex flex-nowrap items-center gap-1 text-sm font-semibold my-3 cursor-pointer'><FaLink /> StoryTeller Blogs</h1>
                <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.</p>
              </div>
            </div>



          </div>
          <button type='button' className='h-[40px] w-[40px] bg-[white] text-black font-bold rounded-full text-2xl flex flex-nowrap items-center justify-center absolute right-[-20px] top-[50%] translate-y-[-80%]'><MdNavigateNext /></button>

        </div>
      </div>
    </>
  )
}




{/* <div className='main-projects text-[white] px-10 pb-10'>
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
        <div className="col  border-2 border-[#36fffc] rounded-lg">
          <div className="thumbnail h-[150px] w-full rounded-t-lg"
            style={{
              backgroundImage: "url('https://wallpapers.com/images/high/bright-youtube-background-tghdwhgg9rq9a0cb.webp')"
              , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"
            }}></div>
          <div className="content p-3">
            <h1 className='text-md font-bold text-[#36fffc]'>FreeTube</h1>
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
    </div> */}