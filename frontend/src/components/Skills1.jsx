import React from 'react'

export default function Skills() {
    return (
        <div className='main-skills text-white px-10 pb-5 max-w-[1600px] mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content md:p-7">
                <h1 className='text-3xl font-semibold'>Tech <span className='text-[#47fffc]'>Stack</span></h1>
                <div className="ps-2">
                    <div className="road-1 flex flex-nowrap items-center gap-2">
                        <div className="line-1 h-[40px] w-[3px] bg-white"></div>
                        <div className="line-2 h-[40px] w-[3px] bg-[#47fffc]"></div>
                    </div>
                    <div className="md:flex flex-nowrap items-center gap-4">
                        <button type='button' className='text-sm font-semibold p-2 border-[3.5px] border-t-[#47fffc] border-r-[#47fffc] border-b-white border-l-white '>FRONTEND</button>
                        <ul className="mt-5 md:mt-0 flex flex-wrap items-center justify-end gap-5 text-sm font-[500] tracking-[2px] ps-5">
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>HTML</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>CSS</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Javascript</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Bootstrap</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Tailwind CSS</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>React</li>
                        </ul>
                    </div>
                </div>
                <div className="ps-2">
                    <div className="road-1 flex flex-nowrap items-center gap-2">
                        <div className="line-1 h-[40px] w-[3px] bg-white"></div>
                        <div className="line-2 h-[40px] w-[3px] bg-[#47fffc]"></div>
                    </div>
                    <div className="md:flex flex-nowrap items-center gap-4">
                        <button type='button' className='text-sm font-semibold p-2 border-[3.5px] border-t-[#47fffc] border-r-[#47fffc] border-b-white border-l-white '>BACKEND</button>
                        <ul className="mt-5 md:mt-0 flex flex-wrap items-center justify-end gap-5 text-sm font-[500] tracking-[2px] ps-5">
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Python</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Django</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Flask</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Node</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Express</li>
                        </ul>
                    </div>
                </div>
                <div className="ps-2">
                    <div className="road-1 flex flex-nowrap items-center gap-2">
                        <div className="line-1 h-[40px] w-[3px] bg-white"></div>
                        <div className="line-2 h-[40px] w-[3px] bg-[#47fffc]"></div>
                    </div>
                    <div className="md:flex flex-nowrap items-center gap-4">
                        <button type='button' className='text-sm font-semibold p-2 border-[3.5px] border-t-[#47fffc] border-r-[#47fffc] border-b-white border-l-white '>DATABASE & OTHERS</button>
                        <ul className="mt-5 md:mt-0 flex flex-wrap items-center justify-end gap-5 text-sm font-[500] tracking-[2px] ps-5">
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>MongoDB</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Php</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Git</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Github</li>
                            <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Replit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
