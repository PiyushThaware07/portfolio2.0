import React from 'react';
// ICONS
import { MdOutlineDisplaySettings } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbDatabaseStar } from "react-icons/tb";
// SKILLS ICONS
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPython, FaNode, FaGitAlt, FaGithub, FaWordpress } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss, SiDjango, SiFlask, SiExpress, SiMongodb, SiReplit, SiPhp, SiPostman, SiVisualstudio } from "react-icons/si";

export default function Skills() {
    return (
        <div id='skills' className='skills text-white px-5 md:px-10 max-w-[1600px] mx-auto ' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content md:h-auto w-[100%] md:w-auto md:px-7">
                <div className="section-1">
                    <div className="header grid justify-center">
                        <h1 className='  inline text-xl text-white p-5'>What I Know ?</h1>
                    </div>
                    <div className="line h-[2px] w-full bg-[#47fffc]"></div>
                </div>
                <div className="section-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start justify-center gap-8 mt-4 p-3 sm:p-5">
                    <div className="col">
                        <h1 className='text-[#47fffc] flex flex-nowrap items-center gap-2'><MdOutlineDisplaySettings />Front-End</h1>
                        <div className="my-5 flex flex-wrap gap-3">
                            {/* <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 even:border-[#47fffc] even:text-[#47fffc] odd:border-gray-500 odd:text-gray-400'><FaHtml5 className='text-red-500' />HTML</button> */}
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaHtml5 className='text-[red] text-lg' />HTML</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaCss3Alt className='text-[#3fa9ff] text-lg' />CSS</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><DiJavascript1 className='text-[yellow] text-lg' />Javascript</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaBootstrap className='text-[#9500ff] text-lg' />Bootstrap</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiTailwindcss className='text-[#38fff5] text-lg' />Tailwind CSS</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaReact className='text-[#00a6ff] text-lg' />React Js</button>
                        </div>
                    </div>
                    <div className="col">
                        <h1 className='text-[#47fffc] flex flex-nowrap items-center gap-2'><IoSettingsOutline />Back-End</h1>
                        <div className="my-5 flex flex-wrap gap-3">
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaPython className='text-[#00a6ff] text-lg' />Python</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiDjango className='text-[#3fd96d] text-lg' />Django</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiFlask className='text-[#ffffff8f] text-lg' />Flask</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaNode className='text-[#ffd500] text-lg' />Node Js</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiExpress className='text-[#ff9900] text-lg' />Express Js</button>

                        </div>
                    </div>
                    <div className="col">
                        <h1 className='text-[#47fffc] flex flex-nowrap items-center gap-2'><TbDatabaseStar />Databases & Other Tools</h1>
                        <div className="my-5 flex flex-wrap gap-3">
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiMongodb className='text-[#3cca7c] text-lg' />MongoDB</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaGitAlt className='text-[#ff0000] text-lg' />Git</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaGithub className='text-[#626262] text-lg' />Github</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiReplit className='text-[#ff9900] text-lg' />Replit</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><FaWordpress className='text-[#4a86ff] text-lg' />Wordpress</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiPhp className='text-[#9900ff] text-2xl' />Php</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiPostman className='text-[#ff9900] text-lg' />Postman</button>
                            <button className='text-sm rounded-md border-2  px-3 py-2 flex flex-nowrap items-center gap-1 border-gray-500 text-gray-400'><SiVisualstudio className='text-[#4a86ff] text-lg' />Vs Code</button>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
