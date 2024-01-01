import React from 'react'

export default function About() {
    return (
        <div className='projects  px-5 md:px-10 max-w-[1600px] mx-auto pb-10' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content ">
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


                </div>
            </div>
        </div>
    )
}
