import React from 'react';
import "../static/css/About.css";

export default function About() {


    return (
        <div className='about  px-5 md:px-10 max-w-[1600px] mx-auto pb-10' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content">
                <div className="p-0 md:px-5  rounded-xl">
                    <div className="flex flex-nowrap items-end gap-2">
                        <div className="headings mb-2 text-white ps-5">
                            <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Something</h1>
                            <h1 className='text-4xl md:text-5xl font-semibold whitespace-nowrap'>About<span className='text-[#47fffc]'> Me</span></h1>
                        </div>
                        <div className="line flex flex-col flex-nowrap flex-1 mb-[25px] ">
                            <div className="line-1 w-full h-[1.4px] bg-[white] mb-1"></div>
                            <div className="line-2 w-full h-[1.4px] bg-[#47fffc] "></div>
                        </div>
                    </div>



                    <div className="flex flex-col items-center">
                        <div className="btn-groups flex flex-nowrap gap-3 items-center justify-center w-full mb-10 mt-5">
                            <button type='button' className='px-5 py-2 border-2 border-[#47fffc] bg-[#47fffc] text-sm font-semibold'>Education</button>
                            <button type='button' className='px-5 py-2 border-2 border-[white] text-[white] text-sm font-semibold'>Experience</button>
                        </div>

                        <div className="timeline-section px-10">
                            <div className="timeline-items">

                                <div className="timeline-card first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg p-5">
                                    <h1 className='text-md font-semibold'>B.Tech3</h1>
                                    <h1 className='text-sm'>KDK College Of Engineering , Nagpur</h1>
                                    <span className='circle h-3 w-3 rounded-full bg-[white]'></span>
                                    <span className='date text-sm font-mono text-[#47fffc]'>2001-2023</span>
                                </div>
                                <div className="timeline-card first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg p-5">
                                    <h1 className='text-md font-semibold'>B.Tech3</h1>
                                    <h1 className='text-sm'>KDK College Of Engineering , Nagpur</h1>
                                    <span className='circle h-3 w-3 rounded-full bg-[white]'></span>
                                    <span className='date text-sm font-mono text-[#47fffc]'>2001-2023</span>
                                </div>
                                <div className="timeline-card first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg p-5">
                                    <h1 className='text-md font-semibold'>B.Tech3</h1>
                                    <h1 className='text-sm'>KDK College Of Engineering , Nagpur</h1>
                                    <span className='circle h-3 w-3 rounded-full bg-[white]'></span>
                                    <span className='date text-sm font-mono text-[#47fffc]'>2001-2023</span>
                                </div>
                                <div className="timeline-card first:mt-5 last:mb-0 text-white bg-[#272727] border-2 border-[#4f4f4f] rounded-lg p-5">
                                    <h1 className='text-md font-semibold'>B.Tech3</h1>
                                    <h1 className='text-sm'>KDK College Of Engineering , Nagpur</h1>
                                    <span className='circle h-3 w-3 rounded-full bg-[white]'></span>
                                    <span className='date text-sm font-mono text-[#47fffc]'>2001-2023</span>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
