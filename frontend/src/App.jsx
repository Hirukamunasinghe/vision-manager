import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './sections/Home';
import Dashboard from './sections/Dashboard';

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
