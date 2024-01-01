import React from 'react';
// ICONS
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Education() {
    return (
        <div className="timeline-section px-10">
            <div className="timeline-items">
                <div className="timeline-card mb-12 first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg px-6 py-8">
                    <h1 className='text-md font-semibold mb-3'>B.Tech</h1>
                    <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> KDK College Of Engineering , Nagpur</h1>
                    <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Computer Science & Engineering</h1>
                    <span className='circle h-3 w-3 rounded-full bg-[#47fffc]'></span>
                    <span className='date text-sm font-medium text-[#47fffc]'>2001-2023</span>
                </div>
                <div className="timeline-card mb-5 first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg px-6 py-8">
                    <h1 className='text-md font-semibold mb-3'>B.Tech</h1>
                    <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> KDK College Of Engineering , Nagpur</h1>
                    <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Computer Science & Engineering</h1>
                    <span className='circle h-3 w-3 rounded-full bg-[#47fffc]'></span>
                    <span className='date text-sm font-medium text-[#47fffc]'>2001-2023</span>
                </div>
            </div>
        </div>
    )
}
