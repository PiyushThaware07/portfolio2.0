import React, { useState, useEffect } from 'react';
// CSS
import "./App.css";
// Components
import Navbar from './components/Navbar';
import Header from "./components/Header";
import TechStack from './components/TechStack';
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";



export default function App() {
  const [showContactModel, setshowContactModel] = useState(false);
  function toggleContactForm() {
    setshowContactModel(!showContactModel);
  }
  useEffect(() => {
    document.body.style.overflowY = showContactModel ? "hidden" : "scroll";
  }, [showContactModel])


  return (
    <div className='main min-h-screen min-w-screen  ' style={{ fontFamily: "'Poppins', sans-serif" }} >
      <Navbar toggleContactForm={toggleContactForm} />
      <Header />
      <TechStack />
      <Projects />
      <Experience />
      <Resume />
      {/* <Services/> */}
      {
        showContactModel && <Contact toggleContactForm={toggleContactForm} />
      }
      <Footer />
    </div >
  )
}
