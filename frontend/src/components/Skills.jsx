import React from 'react'

export default function Skills() {
    return (
        <div className='main-skills text-[white] px-10 pb-10'>
            <div className="relative pb-5 flex flex-nowrap items-center">
                <h1 className='bg-[#272626]  font-semibold uppercase text-nowrap py-2 px-5 border-2 border-[#47fffc] rounded-full flex flex-nowrap items-center gap-1'>What i know</h1>
                <div className="w-full h-[3px] bg-[#36fffc]"></div>
            </div>
            <div className="ms-auto w-full sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-7 mt-3">
                <div className="col bg-[#0000007a] rounded-lg p-5">
                    <h1 className='font-semibold text-sm pb-2  border-b-2 border-[#67676746]'>FrontEnd</h1>
                    <div className="tags text-[12px] font-semibold pt-5 flex flex-wrap">
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>HTML</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>CSS</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Javascript</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Bootstrap</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Tailwind CSS</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>React Js</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Redux</span>
                    </div>
                </div>
                <div className="col bg-[#0000007a] rounded-lg p-5">
                    <h1 className='font-semibold text-sm pb-2  border-b-2 border-[#67676746]'>BackEnd</h1>
                    <div className="tags text-[12px] font-semibold pt-5 flex flex-wrap">
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Python</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Django</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Flask</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Node Js</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Express Js</span>
                    </div>
                </div>
                <div className="col bg-[#0000007a] rounded-lg p-5">
                    <h1 className='font-semibold text-sm pb-2  border-b-2 border-[#67676746]'>Databases & Others</h1>
                    <div className="tags text-[12px] font-semibold pt-5 flex flex-wrap">
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>MongoDB</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Git</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Github</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Replit</span>
                        <span className='p-2 bg-[#2c2c2cfe] m-2 rounded-md hover:bg-[#47fffc] transition-all'>Figma</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
