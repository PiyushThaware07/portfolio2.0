import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from "../static/img/2.png";
import bg2 from "../static/img/4.png";

export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,  // Animation duration in milliseconds
            easing: 'ease-in-out',  // Easing function
            offset: 50,  // Offset (in px) from the original trigger point
            once: true,  // Only animate once
        });
    }, []);

    return (
        <div className='header text-white px-10 max-w-[1600px] mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <div className="content  md:px-7">
                <div className="headings mb-2 text-white">
                    <h1 className='text-xl' style={{ fontFamily: "'Pacifico', cursive" }}>This is</h1>
                    <h1 className='text-5xl font-semibold' data-aos="fade-up">About<span className='text-[#47fffc]'> Me</span></h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 items-center bg-[#00000081]">
                    <div className="col h-[300px] md:h-[400px] relative hidden sm:block bg-cover md:bg-contain"
                        style={{ backgroundImage: `url('${bg1}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                        <div className="hidden sub-image h-[200px] w-[200px] absolute bottom-[10%] right-[10%]"
                            style={{ backgroundImage: `url('${bg2}')`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                        </div>
                    </div>
                    <div className="col">
                        <p className='mb-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsam corporis quis aperiam officia autem enim. Deleniti eligendi nostrum nobis fuga iusto cupiditate eveniet esse, totam est consectetur, minus debitis.
                        </p>
                        <button type='button' className='mt-3 text-sm font-semibold tracking-[1.2px] px-5 py-3 bg-[#47fffcbb] text-[white] rounded-lg'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
