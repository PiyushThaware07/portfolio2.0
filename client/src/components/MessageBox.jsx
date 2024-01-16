import React, { useEffect } from 'react';
// ICONS ======================================
import { RiCloseCircleFill } from "react-icons/ri";


export default function MessageBox(props) {
    useEffect(() => {
        setTimeout(() => {
            props.setShowMessageBox(false);
        }, 5200);
    }, [])
    return (
        <>
            <div className="fixed bottom-5 right-5 z-[99] ">
                <div className='bg-green-100 flex flex-nowrap items-center gap-2 p-2 rounded-t-md rounded-x-md rounded-b-0 text-sm font-semibold shadow-md'>
                    <h1>Thank You For Contacting</h1>
                    <button type='button' className='text-lg' onClick={() => props.setShowMessageBox(false)} ><RiCloseCircleFill className='text-green-500' /></button>
                </div>
                <div className="load bg-green-500 w-full h-[2px] animate-loading"></div>
            </div>
        </>
    )
}
