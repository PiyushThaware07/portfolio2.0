import React, { useEffect, useState } from 'react';
import "./App.css";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Skills from './components/Skills';

export default function App() {

  const [showContactModel, setShowContactModel] = useState(false);
  function toggleContactModel() {
    setShowContactModel(!showContactModel);
  }
  useEffect(() => {
    document.body.style.overflowY = showContactModel ? "hidden" : "scroll";
  }, [showContactModel])



  return (
    // // bg-gray-950 
    <div className='bg-[#272626] '>
      <Navbar toggleContactModel={toggleContactModel} />
      <Header />
      {/* <Projects/> */}
      {
        showContactModel ? <Contact toggleContactModel={toggleContactModel} /> : ''
      }
      <Skills/>
    </div>
  )
}
