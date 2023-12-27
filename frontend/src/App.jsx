import React from 'react';
import "./App.css";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from './components/Projects';

export default function App() {
  return (
    <div className='bg-[#272626] '>
      <Navbar/>
      <Header/>
      {/* <Skills/> */}
      {/* <Projects/> */}
    </div>
  )
}
