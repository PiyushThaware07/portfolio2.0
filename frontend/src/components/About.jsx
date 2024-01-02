import React, { useState } from 'react';
import "../static/css/About.css";

// ICONS
import { RiGraduationCapLine } from "react-icons/ri";
import { PiIdentificationCardBold } from "react-icons/pi";

// COMPONENTS
import Education from "./Education";
import Experience from "./Experience"


export default function About() {
    const [about, setAbout] = useState(true);
    function toggleExperience() {
        setAbout(true);
    }
    function toggleEducation() {
        setAbout(false);
    }

    return (
        <>
            <div id='about' className='about  px-3 md:px-10 h-full w-full mx-auto pb-10 mt-10 md:mt-9' style={{ fontFamily: "'Poppins', sans-serif" }}>
                <div className="content w-full h-full">
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
                                <button type='button' className={`px-5 py-2 border-[1.7px]  ${about ? 'border-[#47fffc] bg-[#47fffc]' : 'border-[white] text-[white] hover:border-[#47fffc] hover:text-black hover:bg-[#47fffc]'}  text-sm font-semibold flex flex-nowrap items-center gap-1`} onClick={toggleExperience}><PiIdentificationCardBold className='text-xl' /> Experience</button>
                                <button type='button' className={`px-5 py-2 border-[1.7px]  ${!about ? 'border-[#47fffc] bg-[#47fffc]' : 'border-[white] text-[white] hover:border-[#47fffc] hover:text-black hover:bg-[#47fffc]'}  text-sm font-semibold flex flex-nowrap items-center gap-1`} onClick={toggleEducation}><RiGraduationCapLine className='text-xl' /> Education</button>
                            </div>


                            {
                                about ? <Experience /> : <Education />
                            }



                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
