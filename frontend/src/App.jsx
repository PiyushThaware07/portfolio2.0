import React from 'react';
// CSS
import "./App.css";
// Components
import Navbar from './components/Navbar';
import Header from "./components/Header";
import TechStack from './components/TechStack';
import Projects from "./components/Projects";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className='main min-h-screen min-w-screen  ' style={{ fontFamily: "'Poppins', sans-serif" }} >
      <Navbar />
      <Header />
      <TechStack />
      <Projects />
      <Footer />
    </div >
  )
}
