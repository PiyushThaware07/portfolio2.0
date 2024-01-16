import React, { useState, useEffect } from 'react';
// HOST
const backendURL = import.meta.env.VITE_REACT_APP_HOST_ENV == "production" ? import.meta.env.VITE_REACT_APP_BACKEND_ONLINE : import.meta.env.VITE_REACT_APP_BACKEND_OFFLINE

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
        showContactModel && <Contact backendURL={backendURL} toggleContactForm={toggleContactForm} />
      }
      <Footer />
    </div >
  )
}
