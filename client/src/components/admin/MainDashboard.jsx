import React, { useState } from 'react'

export default function MainDashboard(props) {

    return (
        <div className='flex-1 pt-10 pb-20 md:py-10 md:ps-48'>
            {props.template === "Experience" && <Experience />}
            {props.template === "Project" && <Project />}
            {props.template === "Contact" && <Contact />}
        </div>

    )
}



function Experience() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            {/* // * EXPERIENCE SETUP STARTS =========================================================================================================== */}
            <div className="px-5 sm:px-10 ">
                <div className="bg-slate-950 rounded-lg">
                    <div className="py-3  text-white px-5 flex flex-nowrap items-center justify-between">
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[1.5px]'>Experience</h1>
                        <button className=' bg-green-400 py-2 sm:py-2 rounded-md ms-auto w-20 sm:w-24' onClick={() => setToggleMenu(!toggleMenu)}>Add</button>
                    </div>
                    <div className={`w-full p-5 ${toggleMenu || "hidden"} `}>
                        <form action="">
                            <input type="text" placeholder='Company Name' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Position' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Description' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Start Year' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Leave Year' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Duration' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Location' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Responsibility' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <button type='button' className='px-5 py-2 rounded-md bg-green-500 text-white font-semibold'>Upload</button>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-5">
                    {
                        new Array(5).fill().map((item, index) => (
                            <div key={index} className="card bg-blue-100 text-black border-2 border-slate-950 rounded-lg relative">
                                <div className="counter absolute -top-4 -right-4 bg-slate-950 text-white h-[40px] w-[40px] rounded-full flex flex-nowrap items-center justify-center text-xl font-bold border-[3px] border-white">{index + 1}</div>
                                <div className="p-5">
                                    <h1 className='text-sm font-bold capitalize'>Company : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Position : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Description : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Start Date : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Leave Date : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Duration : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Location : <span className='text-slate-600 text-md font-medium' >Python Intern</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Responsibility </h1>
                                    <ul className='list-disc ps-5'>
                                        <li><span className='text-slate-600 text-sm font-medium' >Python Intern</span></li>
                                        <li><span className='text-slate-600 text-sm font-medium' >Python Intern</span></li>
                                        <li><span className='text-slate-600 text-sm font-medium' >Python Intern</span></li>
                                    </ul>
                                    <br />
                                    <button type='button' className='px-4 py-1 bg-[red] rounded-full text-white font-semibold text-sm'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* // * EXPERIENCE SETUP ENDS =========================================================================================================== */}
        </>
    )
}


function Project() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            {/* // & Projects SETUP Starts ============================================================================================================= */}
            <div className="px-5 sm:px-10 ">
                <div className="bg-slate-950 rounded-lg">
                    <div className="py-3  text-white px-5 flex flex-nowrap items-center justify-between">
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-[1.5px]'>Projects</h1>
                        <button className=' bg-green-400 py-2 sm:py-2 rounded-md ms-auto w-20 sm:w-24' onClick={() => setToggleMenu(!toggleMenu)}>Add</button>
                    </div>
                    <div className={`w-full p-5 ${toggleMenu || "hidden"} `}>
                        <form action="">
                            <input type="text" placeholder='Project Title' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Project URL' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <input type="text" placeholder='Project Duration' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2' />
                            <textarea placeholder='Project Summary' className='w-full bg-slate-100 p-2 rounded-md mb-3 first:mt-2 h-[100px]' />
                            <button type='button' className='px-5 py-2 rounded-md bg-green-500 text-white font-semibold'>Upload</button>
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-5">
                    {
                        new Array(5).fill().map((item, index) => (
                            <div key={index} className="card bg-blue-100 border-2 border-slate-950 rounded-lg relative">
                                <div className="counter absolute -top-4 -right-4 bg-slate-950 text-white h-[40px] w-[40px] rounded-full flex flex-nowrap items-center justify-center text-xl font-bold border-[3px] border-white">{index + 1}</div>
                                <img className='h-36 w-full object-cover rounded-t-md' src="https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Loading..." />
                                <div className="p-5">
                                    <h1 className='text-sm font-bold capitalize'>Name : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>URL : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Duration : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Summary :
                                        <br />
                                        <span className='text-slate-600 text-md font-medium ' >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque repellat, culpa delectus aspernatur hic repellendus ipsa vitae dolore, porro natus quae eveniet! Suscipit reiciendis minus beatae.
                                        </span>
                                    </h1>
                                    <br />
                                    <button type='button' className='px-4 py-1 bg-[red] rounded-full text-white font-semibold text-sm'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* // & Projects SETUP ENDS ============================================================================================================= */}
        </>
    )
}









function Contact() {
    return (
        <>
            {/* // & Contacts SETUP Starts ============================================================================================================= */}
            <div className="px-5 sm:px-10">
                <h1 className='text-3xl font-bold uppercase tracking-[1.5px] py-3 bg-slate-950 rounded-lg border-[1.4px] text-white ps-5'>Contacts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 pt-5">
                    {
                        new Array(5).fill().map((item, index) => (
                            <div key={index} className="card bg-blue-100 border-2 border-slate-950 rounded-lg relative">
                                <div className="counter absolute -top-4 -right-4 bg-slate-950 text-white h-[40px] w-[40px] rounded-full flex flex-nowrap items-center justify-center text-xl font-bold border-[3px] border-white">{index + 1}</div>
                                <div className="p-5">
                                    <h1 className='text-sm font-bold capitalize'>Name : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Email : <span className='text-slate-600 text-md font-medium' >Bootcoding PVT LTD</span></h1>
                                    <h1 className='text-sm font-bold capitalize'>Message :
                                        <br />
                                        <span className='text-slate-600 text-md font-medium ' >
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque repellat, culpa delectus aspernatur hic repellendus ipsa vitae dolore, porro natus quae eveniet! Suscipit reiciendis minus beatae.
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* // & Contacts SETUP ENDS ============================================================================================================= */}
        </>
    )
}