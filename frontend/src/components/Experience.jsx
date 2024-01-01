import React from 'react';
// ICONS
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Experience() {
  return (
    <div className="timeline-section px-10">
      <div className="timeline-items">
        <div className="timeline-card mb-12 first:mt-5 last:mb-0 text-white bg-[#04fffb1a] border-2 border-[#03fffb] rounded-lg px-6 py-8">
          <h1 className='text-md font-semibold mb-3 capitalize'>crescent web technology</h1>
          <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Python Intern</h1>
          <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Nagpur , Maharashtra</h1>
          <span className='circle h-3 w-3 rounded-full bg-[#47fffc]'></span>
          <span className='date text-sm font-medium text-[#47fffc]'>6 Months</span>
        </div>
        <div className="timeline-card mb-12 first:mt-5 last:mb-0 text-white bg-[#04fffb1a] border-2 border-[#03fffb] rounded-lg px-6 py-8">
          <h1 className='text-md font-semibold mb-3 capitalize'>Prodigy Infotech</h1>
          <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Web developer intern</h1>
          <h1 className='text-[13px] font-medium leading-6 flex flex-nowrap items-start md:items-center capitalize'><MdKeyboardDoubleArrowRight className='text-xl text-[#47fffc]' /> Nagpur , Maharashtra</h1>
          <span className='circle h-3 w-3 rounded-full bg-[#47fffc]'></span>
          <span className='date text-sm font-medium text-[#47fffc]'>1 Month</span>
        </div>

      </div>
    </div>
  )
}
