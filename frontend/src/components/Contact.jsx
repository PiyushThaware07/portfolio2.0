import React from 'react';
// IMPORT ICONS
import { RiMailSendFill } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

export default function Contact(props) {
    return (
        <>
            <div className='main-contact fixed top-0 bottom-0 left-0 right-0 bg-[#0f0f0fc8]' style={{ fontFamily: "'Poppins', sans-serif" }}></div>
            <div className="content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                <div className="h-auto w-[500px] md:px-5">
                    <div className="h-full border-2 border-[#47fffc] bg-[#212121] rounded-lg shadow-md p-8">
                        <div className="flex flex-nowrap items-center justify-between">
                            <h1 className='text-lg text-white font-mono capitalize'>Get In <span className='text-[#47fffc]'>Touch</span> With Me</h1>
                            <button type='button' className='h-[30px] w-[30px] flex flex-nowrap items-center justify-center text-[#47fffc] text-2xl border-0 outline-none'><IoClose className='border-0 outline-none' onClick={() => props.toggleContactModel()} /></button>
                        </div>
                        <div className="mt-10 text-white">
                            <input type="text" placeholder='FULL NAME' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-[600] text-sm' required />
                            <br />
                            <input type="text" placeholder='@EMAIL' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-[600] text-sm' required />
                            <br />
                            <textarea className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full h-[80px] font-[600] text-sm' placeholder='MESSAGE'></textarea>
                            <button type='submit' className='px-3 py-2 bg-[#47fffccf] rounded-sm text-sm font-mono flex flex-nowrap items-center gap-2 '>Send Message <GrSend className='text-lg' /></button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
