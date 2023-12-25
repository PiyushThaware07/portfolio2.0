import React from 'react';
import "./App.css";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from './components/Projects';

export default function App() {
  return (
    <div className='bg-[#272626] '>
      <Navbar/>
      <Header/>
      <Projects/>
    </div>
  )
}
