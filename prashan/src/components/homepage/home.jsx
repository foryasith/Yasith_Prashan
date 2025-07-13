import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import BrowserRouter, Routes, and Route
import './homepage.css'; // Ensure the CSS file is imported

const home = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      <h1>Home Page Content</h1>
    </div>
  );
};

export default home; // Must match import name