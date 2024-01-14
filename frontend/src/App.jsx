import React from 'react';
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



export default function App() {
  return (
    <div className='main min-h-screen min-w-screen  ' style={{ fontFamily: "'Poppins', sans-serif" }} >
      <Navbar />
      <Header />
      <TechStack />
      <Projects />
      {/* <Services/> */}
      <Experience />
      <Resume />
      <Footer />
    </div >
  )
}
