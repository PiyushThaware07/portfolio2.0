import React, { useState, useRef } from 'react';
// EMAIL JS SETUP
import emailjs from '@emailjs/browser';

// IMPORT ICONS
import { RiMailSendFill } from "react-icons/ri";
import { GrSend } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { LuLoader2 } from "react-icons/lu";



export default function Contact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [preLoader, setPreLoader] = useState(false);


    const form = useRef();
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Sending to Backend :", name, email, message);
        setPreLoader(true);
        // const addToDB = await fetch('http://localhost:3001/contactInsert', {
        const addToDB = await fetch('https://piyushthaware-server.vercel.app/contactInsert', {   // online
            method: 'post',
            body: JSON.stringify({ name, email, message }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let consoleResult = await addToDB.json();
        console.warn("Backend : ", consoleResult);


        // EMAIL JS SETUP --------------------------------------
        emailjs.sendForm('service_39791ph', 'template_o4pyc0k', form.current, '9w4QQ5g4WGLyO_IAm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Sending data from child to parent <------------------
        if (consoleResult) {
            props.toggleContactModel();
            props.setMessageBox(true);
        }
    }



    return (
        <>
            <div className='main-contact fixed top-0 bottom-0 left-0 right-0 bg-[#151515e1] z-[9999] ' style={{ fontFamily: "'Poppins', sans-serif" }}></div>
            <div className="content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999] ">
                <div className="h-auto w-[330px] sm:w-[500px] md:px-5">
                    <div className="h-full border-2 border-[#47fffc] bg-[#212121] rounded-lg shadow-md p-8">
                        <div className="flex flex-nowrap items-center justify-between">
                            <h1 className='text-lg text-white font-mono capitalize'>Get In <span className='text-[#47fffc]'>Touch</span> With Me</h1>
                            <button type='button' className='h-[30px] w-[30px] flex flex-nowrap items-center justify-center text-[#47fffc] text-2xl border-0 outline-none'><IoClose className='border-0 outline-none' onClick={() => props.toggleContactModel()} /></button>
                        </div>
                        <form className="mt-10 text-white" ref={form} onSubmit={handleSubmit}>
                            <input type="text" name="user_name" value={name} onChange={(event) => setName(event.target.value)} placeholder='FULL NAME' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-mono text-sm' required />
                            <br />
                            <input type="email" name="user_email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='@EMAIL' className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full font-mono text-sm' required />
                            <br />
                            <textarea name="user_message" value={message} onChange={(event) => setMessage(event.target.value)} className='border-b-[1.5px] border-gray-200/20 bg-transparent focus:outline-none ps-2 pb-3 mb-7 w-full h-[80px] font-mono text-sm' placeholder='MESSAGE'></textarea>
                            {
                                preLoader ?
                                    <button type='submit' className='px-3 py-2 bg-[#47fffccf] rounded-sm text-sm font-mono flex flex-nowrap items-center gap-2 '>Sending <LuLoader2 className='text-lg animate-spin' /></button>
                                    :
                                    <button type='submit' className='px-3 py-2 bg-[#47fffccf] rounded-sm text-sm font-mono flex flex-nowrap items-center gap-2 '>Send Message <GrSend className='text-lg' /></button>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </>

    )
}
