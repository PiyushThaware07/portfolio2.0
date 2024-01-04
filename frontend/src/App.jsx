import React, { useEffect, useState } from 'react';
import "./App.css";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Contact from "./components/Contact";
import MessageBox from './components/MessageBox';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
    const [showContactModel, setShowContactModel] = useState(false);
    function toggleContactModel() {
        setShowContactModel(!showContactModel);
    }
    useEffect(() => {
        document.body.style.overflowY = showContactModel ? "hidden" : "scroll";
    }, [showContactModel])


    // MESSAGE BOX HANDLING -----------------------------(getting data from child)
    const [messageBox, setMessageBox] = useState(false);
    // console.log("APP ", messageBox);
    useEffect(() => {
        setTimeout(() => {
            setMessageBox(false);
        }, 5200);
    })


    return (
        <div className='main bg-[#181818]  mx-auto' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <Navbar toggleContactModel={toggleContactModel} />
            <Hero />
            {
                showContactModel ? <Contact toggleContactModel={toggleContactModel} setMessageBox={setMessageBox} /> : ''
            }

            {
                messageBox ? <MessageBox setMessageBox={setMessageBox} /> : ''
            }
            <About />
            <Skills />
            <Projects />
        </div>
    )
}
