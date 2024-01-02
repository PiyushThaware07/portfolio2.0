import React from 'react';


export default function Hero() {
    return (
        <>
            <div className="hero-section">
                <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-[#47fffc] relative z-1">
                    <div className="px-10 md:px-20 pt-16 pb-5 md:pt-24 ">
                        <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>Hello there 👋,</h1>
                        <h1 className='text-4xl sm:text-5xl font-bold sm:font-semibold'>My <span className=''>name</span> is <br /><span className=''>Piyush Thaware.</span></h1>
                        <h1 className='text-sm my-3 font-[500]'> I am an enthusiastic and dedicated individual, eager to utilize my skills and knowledge to create meaningful and impactful projects.</h1>
                        <button className='py-2 px-4 border-2 border-[black] relative z-[99] bg-[#000000] text-white rounded-lg font-bold'>Explore</button>
                    </div>
                    <div className=""></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mt-[-10px] md:mt-[-45px] relative z-0'>
                    <path fill="#47fffc" fillOpacity="100" d="M0,192L24,192C48,192,96,192,144,197.3C192,203,240,213,288,234.7C336,256,384,288,432,266.7C480,245,528,171,576,128C624,85,672,75,720,85.3C768,96,816,128,864,149.3C912,171,960,181,1008,160C1056,139,1104,85,1152,101.3C1200,117,1248,203,1296,218.7C1344,235,1392,181,1416,154.7L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
                </svg>
            </div>
        </>
    )
}
