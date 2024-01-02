import React, { useState } from 'react';
// ICONS
import { HiMenuAlt3 } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { FaCodeBranch } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";

export default function Navbar(props) {

    // HANDLE SMOOTH SCROLL -------------------------------------------
    const [showNav, setShowNav] = useState(false);
    var lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            setShowNav(true)
        }
        else {
            setShowNav(false);
        }
        lastScrollTop = scrollTop;
    })

    // HANDLE RESPONSIVE MENU -------------------------------------------
    const [menu, setMenu] = useState(false);
    function toggleMenu() {
        setMenu(!menu)
    }
    function handleContactWithMenu() {
        setMenu(false);
        props.toggleContactModel();
    }

    return (
        <>
            {/* NAVBAR START ============================================================================== */}
            <div className={`navbar ${showNav ? '' : 'hidden'} transition-all ease-in-out duration-300 animate-navbar`}>
                <nav id='navbar' className={` fixed top-0 w-full z-[99999] bg-[#181818] text-white px-10 py-3  md:flex flex-nowrap items-center justify-between`}>
                    <div className="section-1 flex flex-nowrap items-center justify-between">
                        <h1 className=' cursor-pointer text-md ' style={{ fontFamily: "'Pacifico', cursive" }}>Code</h1>
                        <h1 className='md:hidden h-[40px] w-[40px] cursor-pointer bg-[black]   text-[#47fffc] rounded-full flex flex-nowrap items-center justify-center' onClick={toggleMenu}><HiMenuAlt3 className='text-xl' /></h1>
                    </div>
                    <div className="section-2">
                        <ul className={`${menu ? '' : 'hidden'}  md:flex flex-nowrap items-center gap-6 text-md font-semibold`}>
                            <li><a href="#about" className='flex flex-nowrap items-center gap-1 py-5 md:p-0 hover:text-[#47fffc] cursor-pointer hover:translate-y-[-2px] transition-transform'><GrProjects /> Projects</a></li>
                            <li><a href="" className='flex flex-nowrap items-center gap-1 md:gap-0 py-5 md:p-0 hover:text-[#47fffc] cursor-pointer hover:translate-y-[-2px] transition-transform'><FaCodeBranch className='text-xl' />Tech Stack</a></li>
                            <li className='hidden md:flex flex-nowrap items-center gap-1 border-2 border-[#47fffc]  bg-[transparent] rounded-full ps-3 pe-1 py-1 cursor-pointer' onClick={() => props.toggleContactModel()}>
                                <h1>Contact</h1>
                                <h1 className='h-[30px] w-[30px] rounded-full flex flex-nowrap items-center justify-center bg-[#47fffc] text-white '>
                                    <ImHeadphones className='text-sm' />
                                </h1>
                            </li>
                            <li className='flex md:hidden flex-nowrap items-center gap-1 py-5 md:p-0 hover:text-[#47fffc] cursor-pointer hover:translate-y-[-2px] transition-transform' onClick={handleContactWithMenu}><ImHeadphones className='text-md' />Contact</li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* NAVBAR ENDS ============================================================================== */}
        </>

    )
}
