import React, { useEffect, useState } from 'react';
import "./App.css";
// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Contact from "./components/Contact";
import MessageBox from './components/MessageBox';
import Projects from './components/Projects';

export default function App() {
  // COLOR TEMPLATE GLOBAL
  const ColorTemplate = {
    textWhite: "white",
    textColor: "#47fffc",
    bgColor: "#47fffc",
    mainColor: "#000000e5"
  }


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
    // // bg-gray-950 
    <div className="bg-[#000000e5]">
      <Navbar toggleContactModel={toggleContactModel} ColorTemplate={ColorTemplate} />
      <Header />
      {
        showContactModel ? <Contact toggleContactModel={toggleContactModel} setMessageBox={setMessageBox} /> : ''
      }

      {
        messageBox ? <MessageBox setMessageBox={setMessageBox} /> : ''
      }
      <Projects/>
    </div>
  )
}
