import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

// ICONS
import { IoClose } from "react-icons/io5";

export default function MessageBox(props) {
    useEffect(() => {
        AOS.init({
            duration: 800,  // Animation duration in milliseconds
            easing: 'ease-in-out',  // Easing function
            offset: 50,  // Offset (in px) from the original trigger point
            once: true,  // Only animate once
        });
    }, []);



    return (
        <div className='text-white fixed right-8 bottom-8' data-aos="fade-right">
            <div className="">
                <div className="content flex flex-nowrap items-center gap-5 px-3 py-2 bg-[#00000072]  border-0">
                    <h1 className='text-sm font-mono capitalize'>Thanks For Contacting</h1>
                    <button type='button' className='text-[#47fffc]' onClick={() => props.setMessageBox(false)}><IoClose /></button>
                </div>
                <div className="loading h-[3px] bg-[#47fffc] animate-loading"></div>
            </div>

        </div>
    )
}
