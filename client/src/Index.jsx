import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// & RRD =================================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './dashboard/Dashboard.jsx';

const backendURL = import.meta.env.VITE_REACT_APP_HOST_ENV == "production" ? import.meta.env.VITE_REACT_APP_BACKEND_ONLINE : import.meta.env.VITE_REACT_APP_BACKEND_OFFLINE


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/' element={<Dashboard backendURL={backendURL} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
