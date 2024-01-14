import React from 'react';
// ICONS
import { MdCardTravel } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



export default function Experience() {
    return (
        <>
            <div className="px-6 sm:px-10 md:px-16  pb-10">
                <div className="mb-5 flex flex-nowrap items-center gap-3">
                    <div className="line-before h-[1.5px] w-full bg-slate-300"></div>
                    <h1 className=' text-lg font-bold text-center uppercase text-slate-500'>Experience</h1>
                    <div className="line-after h-[1.5px] w-full bg-slate-300"></div>
                </div>

                <div className="timelineContainer w-full h-[100%] flex flex-nowrap items-center justify-center relative z-2 after:bg-slate-900">
                    <ul className="timeline-items w-[100%] md:w-[80%] mx-auto ps-10 md:ps-0">

                        <li className="timeline-item w-[100%]  md:w-[50%] shadow-md bg-slate-100 rounded-lg px-5 py-10 mb-5 text-slate-800 relative z-10 my-8 ">
                            <h1 className='font-bold capitalize'>@Bootcoding PVT LTD</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>Software Developer Intern (MERN)</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>6 Months</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>~ Currently working on codelab</h1>
                            <span className='location bg-white text-slate-900 px-2 py-1 rounded-lg text-sm font-semibold inline-flex items-center absolute bottom-2 right-2'
                            style={{boxShadow:"inset 0 0 4px rgba(0, 0, 0, 0.2)"}}>
                                <FaLocationDot className='' />
                                <span className='text-[13px] font-semibold'>Nagpur</span>
                            </span>
                            <span className="circle w-32 absolute flex flex-nowrap items-center justify-center gap-2 bg-slate-900 px-3 py-1 rounded-full">
                                <span className='icon text-white rounded-full '><MdCardTravel /></span>
                                <span className='duration text-sm text-white font-semibold' >2020 - 2021</span>
                            </span>
                        </li>
                        <li className="timeline-item w-[100%]  md:w-[50%] shadow-md bg-slate-100 rounded-lg px-5 py-10 mb-5 text-slate-800 relative z-10 my-8 ">
                            <h1 className='font-bold capitalize'>@Bootcoding PVT LTD</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>Software Developer Intern (MERN)</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>6 Months</h1>
                            <h1 className='font-semibold text-[13px] text-slate-600'>~ Currently working on codelab</h1>
                            <span className='location bg-white text-slate-900 px-2 py-1 rounded-lg text-sm font-semibold inline-flex items-center absolute bottom-2 right-2'
                            style={{boxShadow:"inset 0 0 4px rgba(0, 0, 0, 0.2)"}}>
                                <FaLocationDot className='' />
                                <span className='text-[13px] font-semibold'>Nagpur</span>
                            </span>
                            <span className="circle w-32 absolute flex flex-nowrap items-center justify-center gap-2 bg-slate-900 px-3 py-1 rounded-full">
                                <span className='icon text-white rounded-full '><MdCardTravel /></span>
                                <span className='duration text-sm text-white font-semibold' >2020 - 2021</span>
                            </span>
                        </li>
                       
                        










                    </ul>
                </div>

            </div>
        </>
    )
}
