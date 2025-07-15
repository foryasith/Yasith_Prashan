import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/homepage/Home';
import Test from './components/experiencepage/Test';
import Animation from './Animation';
import Projectpage from './components/projectpage/Projectpage';


function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/projects" element={<Projectpage />} />
          
        </Routes>
    </div>
  )
}

export default App;