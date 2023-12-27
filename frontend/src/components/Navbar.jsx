import React, { useState } from 'react';
import { Link } from "react-router-dom";
// IMPORT ICONS
import { LuServerCog } from "react-icons/lu";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { BiLogoGraphql } from "react-icons/bi";


export default function Navbar(props) {
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!menu)
    }

    function handleContactWithMenu() {
        setMenu(false);
        props.toggleContactModel();
    }

    return (
        <div className='navbar  text-white p-4' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <nav className='md:flex flex-nowrap items-center justify-between sm:px-6'>
                <div className="section-1 flex flex-nowrap items-center justify-between">
                    <div className="logo">
                        <h1 className='text-xl flex flex-nowrap items-center justify-center border-2 border-[#ffffff2b]  h-[40px] w-[40px] rounded-full shadow-sm shadow-slate-500' style={{ fontFamily: "'Pacifico', cursive" }}>pt</h1>
                    </div>
                    <div className="md:hidden menu text-2xl bg-[#414141] p-2 rounded-full cursor-pointer" onClick={toggleMenu}><HiMenuAlt2 /></div>
                </div>
                <div className="section-2">
                    <ul className={` ${menu ? '' : 'hidden'} md:flex flex-nowrap items-center gap-4 mt-3 md:mt-0`}>
                        {/* <li className='flex flex-nowrap items-center gap-1 uppercase text-sm'><LuPackageOpen/> About me</li> */}
                        <li><Link className='flex flex-nowrap items-center gap-1 uppercase text-sm hover:text-[#47fffc] transition-all font-medium p-5 md:p-0'><BiLogoGraphql /> Tech Stack</Link></li>
                        <li><Link className='flex flex-nowrap items-center gap-1 uppercase text-sm hover:text-[#47fffc] transition-all font-medium p-5 md:p-0'><LuPackageOpen /> Projects</Link></li>
                        <li className='hidden md:flex flex-nowrap items-center justify-center gap-2 border-2 border-[#47fffc] ps-3 pe-1 py-1 rounded-full cursor-pointer' onClick={() => props.toggleContactModel()}>
                            <h1>Contact</h1>
                            <div className="bg-[#47fffca9] p-2 rounded-full"><FaHeadphonesAlt /></div>
                        </li>
                        <li><Link className='flex md:hidden flex-nowrap items-center gap-1 uppercase text-sm hover:text-[#47fffc] transition-all font-medium p-5 md:p-0 cursor-pointer' onClick={handleContactWithMenu} ><FaHeadphonesAlt /> Contact me</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
