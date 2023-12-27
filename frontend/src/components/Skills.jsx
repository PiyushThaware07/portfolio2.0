import React from 'react'

export default function Skills() {
    return (
        <div>
            <div className='main-skills text-white px-10 pb-5 max-w-[1600px] mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="content md:p-7">
                    <h1 className='text-3xl font-semibold'>Tech <span className='text-[#47fffc]'>Stack</span></h1>
                    <div className="stamp-1 ps-2 flex flex-nowrap items-center">
                        <div className="line flex flex-nowrap gap-2 h-[250px] sm:h-[200px] md:h-[150px] lg:h-[130px]">
                            <div className="line-1  w-[3px] bg-white"></div>
                            <div className="line-2  w-[3px] bg-[#47fffc]"></div>
                        </div>
                        <div className="md:flex flex-nowrap items-center gap-5">
                            <div className="ml-[-14px] "><button type='button' className='px-3 py-2 border-[3px] border-l-white border-[#47fffc] bg-[#272626]'>FRONTEND</button></div>
                            <div className="sm:ps-5">
                                <ul className='flex flex-wrap items-center justify-end mt-5 md:mt-0 gap-2 text-sm font-[500] tracking-[2px] ps-5'>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>HTML</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>CSS</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Javascript</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Bootstrap</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Tailwind CSS</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="stamp-2 ps-2 flex flex-nowrap items-center">
                        <div className="line flex flex-nowrap gap-2 h-[250px] sm:h-[200px] md:h-[150px] lg:h-[130px]">
                            <div className="line-1  w-[3px] bg-white"></div>
                            <div className="line-2  w-[3px] bg-[#47fffc]"></div>
                        </div>
                        <div className="md:flex flex-nowrap items-center gap-5">
                            <div className="ml-[-14px] "><button type='button' className='px-3 py-2 border-[3px] border-l-white border-[#47fffc] bg-[#272626]'>BACKEND</button></div>
                            <div className="sm:ps-5">
                                <ul className='flex flex-wrap items-center justify-end mt-5 md:mt-0 gap-2 text-sm font-[500] tracking-[2px] ps-5'>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Python</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Django</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Flask</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Node</li>
                                    <li className='px-4 py-2 bg-[black] border-0 rounded-md'>Express</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="stamp-3 ps-2 flex flex-nowrap items-center">
                        <div className="line flex flex-nowrap gap-2 h-[250px] sm:h-[200px] md:h-[150px] lg:h-[130px]">
                            <div className="line-1  w-[3px] bg-white"></div>
                            <div className="line-2  w-[3px] bg-[#47fffc]"></div>
                        </div>
                        <div className="md:flex flex-nowrap items-center gap-5">
                            <div className="ml-[-14px] "><button type='button' className='px-3 py-2 border-[3px] border-l-white border-[#47fffc] bg-[#272626]'>DATABASES & OTHERS</button></div>
                            <div className="sm:ps-5">
                                <ul className='flex flex-wrap items-center justify-end mt-5 md:mt-0 gap-2 text-sm font-[500] tracking-[2px] ps-5'>
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
            </div>
        </div>
    )
}
