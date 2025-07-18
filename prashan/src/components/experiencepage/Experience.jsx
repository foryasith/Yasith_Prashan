import React, { useState, useEffect } from 'react';
import Header from '../Header';
import './Experience.css';

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="experience-page">
      <Header />
      <div className="experience-container">
        <h1 className="experience-title">My Experience</h1>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              {[...Array(4)].map((_, i) => (
                <div key={i} style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
            <p className="loading-text">Loading experience...</p>
          </div>
        ) : (
          <div className="update-notice">
            <div className="update-icon">⏳</div>
            <p>Experience section will be updated soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;