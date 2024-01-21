import React from 'react';
// & RRD ===============================================
import { Link } from "react-router-dom";
// & ICONS =============================================
import { MdCardTravel } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { PiHeadphonesFill } from "react-icons/pi";
import { BiUser } from "react-icons/bi";
import { PiIdentificationCard } from "react-icons/pi";



export default function NavigationDashboard(props) {
    return (
        <>
            <div className="md:min-h-screen w-full md:w-48 bg-slate-950 text-white fixed left-0 bottom-0 md:top-0 z-[99]">
                <nav className='flex flex-nowrap flex-row md:flex-col items-center py-2 md:py-5' >
                    <div className="h-[100px] w-[100px] hidden md:inline">
                        <lord-icon
                            src="https://cdn.lordicon.com/ffpklhrd.json"
                            trigger="loop"
                            delay="2000"
                            style={{ height: "100%", width: "100%" }}>
                        </lord-icon>
                    </div>

                    <h1 className='px-5 py-3 border-b-2 border-blue-500 mb-5 hidden md:inline'>Dashboard</h1>
                    <ul className='flex flex-nowrap flex-row md:flex-col justify-around flex-1'>
                        <li className={`py-3 md:ps-4 rounded-full hover:text-blue-500 ${props.template === "Experience" && "text-blue-500"} `}>
                            <Link className='flex flex-nowrap items-center gap-2' onClick={() => props.setTemplate("Experience")} >
                                <MdCardTravel className='text-xl' />
                                <h1 className='text-sm font-medium hidden sm:inline'>Experiences</h1>
                            </Link>
                        </li>
                        <li className={`py-3 md:ps-4 rounded-full hover:text-blue-500 ${props.template === "Project" && "text-blue-500"} `}>
                            <Link className='flex flex-nowrap items-center gap-2' onClick={() => props.setTemplate("Project")}>
                                <GoProjectSymlink className='text-xl' />
                                <h1 className='text-sm font-medium hidden sm:inline'>Projects</h1>
                            </Link>
                        </li>
                        <li className={`py-3 md:ps-4 rounded-full hover:text-blue-500 ${props.template === "Contact" && "text-blue-500"} `}>
                            <Link className='flex flex-nowrap items-center gap-2' onClick={() => props.setTemplate("Contact")}>
                                <PiHeadphonesFill className='text-xl' />
                                <h1 className='text-sm font-medium hidden sm:inline'>Contacts</h1>
                            </Link>
                        </li>
                        <li className={`py-3 md:ps-4 rounded-full hover:text-blue-500 ${props.template === "Profile" && "text-blue-500"} `}>
                            <Link className='flex flex-nowrap items-center gap-2'>
                                <BiUser className='text-xl' />
                                <h1 className='text-sm font-medium hidden sm:inline'>Profile</h1>
                            </Link>
                        </li>
                        <li className={`py-3 md:ps-4 rounded-full hover:text-blue-500 ${props.template === "Portfolio" && "text-blue-500"} `}>
                            <Link to="/" className='flex flex-nowrap items-center gap-2'>
                                <PiIdentificationCard className='text-xl' />
                                <h1 className='text-sm font-medium hidden sm:inline'>Portfolio</h1>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
