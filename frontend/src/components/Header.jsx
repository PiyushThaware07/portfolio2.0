import React, { useEffect } from 'react'
// IMPORT ICONS
import { FaPlay } from "react-icons/fa";


export default function Header() {

    return (
        <div className='header text-white p-10 min-h-[100vh] w-full max-w-[1600px] mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content grid grid-cols-1 md:grid-cols-2  md:p-7">
                <div className="h-auto md:h-[300px] flex flex-col flex-nowrap items-center justify-center mb-8 md:mb-0">
                    <div className="">
                        <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Hello there 👋,</h1>
                        <h1 className='text-5xl font-semibold'>My name is <br /><span className='text-[#47fffc]'>Piyush Thaware.</span></h1>
                        <h1 className='text-sm my-2'> I am an enthusiastic and dedicated individual, eager to utilize my skills and knowledge to create meaningful and impactful projects.</h1>
                        <button className='py-2 px-4 bg-[#47fffc] text-white rounded-lg font-bold'>Explore</button>
                    </div>
                </div>
                <div className="h-[400px] md:px-5">
                    <div className="h-full border-2 border-[#ffffff2c] rounded-lg">
                        <div className="flex flex-nowrap items-center gap-2 border-b-2 border-[#ffffff2c] p-2">
                            <div className="circle-1 w-[10px] h-[10px] bg-[#ffffff2c] rounded-full"></div>
                            <div className="circle-2 w-[10px] h-[10px] bg-[#47fffc] rounded-full"></div>
                            <div className="circle-3 w-[10px] h-[10px] bg-[#ffffff2c] rounded-full"></div>
                            <div className="circle-4 text-[#47fffc] rounded-full ms-auto text-sm flex flex-nowrap items-center gap-1 cursor-pointer">Run<FaPlay /></div>
                        </div>

                        <div className="flex flex-nowrap items-center bg-[#ffffff15]">
                            <div id='lineNumbers' className="line-number h-[360px] w-[10%] ps-3 text-[#ffffff2c]">1.</div>
                            <textarea id="textArea" className='h-[360px] w-[90%] rounded-b-lg focus:outline-none bg-transparent'></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


