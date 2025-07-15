import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './components/homepage/Home';
import Test from './components/experiencepage/Test';
import Animation from './Animation';


function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/animation" element={<Animation />} />
          
        </Routes>
      <h1>home from comp      onent</h1>
    </div>
    
    
  )
}

export default App;