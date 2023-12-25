import React from 'react'
// IMPORT ICONS
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { SiDjango } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export default function Header() {

    return (
        <div className='header text-white p-10 max-w-[1600px]' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content grid grid-cols-1 md:grid-cols-2  md:p-7">
                <div className="h-[300px] flex flex-col flex-nowrap items-center justify-center">
                    <div className="">
                        <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Hello there 👋,</h1>
                        <h1 className='text-5xl font-semibold'>My name is <br /><span className='text-[#47fffc]'>Piyush Thaware.</span></h1>
                        <h1 className='text-sm my-2'> I am an enthusiastic and dedicated individual, eager to utilize my skills and knowledge to create meaningful and impactful projects.</h1>
                        <button className='py-2 px-4 bg-[#47fffc] text-white rounded-lg font-bold'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
