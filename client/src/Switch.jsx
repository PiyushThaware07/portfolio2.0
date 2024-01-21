import React from 'react';
// & UTIls ================================================================
import App from "./App";
import Dashboard from './components/admin/Dashboard';
// & RRD ===================================================================
import { Routes, Route } from "react-router-dom";

export default function Switch() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin' element={<Dashboard/>} />
      </Routes>
    </>
  )
}
