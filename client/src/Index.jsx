import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Switch from "./Switch.jsx";
// && RRD ====================================================
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch />
    </Router>
  </React.StrictMode>,
)
