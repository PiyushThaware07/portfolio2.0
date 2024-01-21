import React from 'react';
// & UTIls ================================================================
import App from "./App";
// & RRD ===================================================================
import { Routes, Route } from "react-router-dom";

export default function Switch() {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </>
  )
}
