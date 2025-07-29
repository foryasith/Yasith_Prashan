import React, { useEffect } from 'react';
import Header from '../Header';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    document.title = "Experience";
  }, []);

  return (
    <div className="experience-page">
      <Header />
      <div className="experience-container">
        <h1 className="experience-title">My Experience</h1>
        
        <div className="update-notice">
          <div className="update-icon">⏳</div>
          <p>Experience section will be updated soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;