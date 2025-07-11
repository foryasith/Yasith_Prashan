import React, { useEffect, useRef, useState } from 'react';
import './NumberIncreaser.css';

const NumberIncreaser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  // Final numbers and their labels
  const stats = [
    { value: 508, label: 'Years of coding' },
    { value: 1060, label: 'Transit Points' },
    { value: 100000, label: 'Transit Operators' },
    { value: 12073, label: 'Happy Customers' }
  ];

  // Animation duration in milliseconds
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-container" ref={containerRef}>
      <div className="stats-title">EXPANDING RAPIDLY</div>
      <div className="stats-subtitle">COMPANY IN NUMBERS</div>
      
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">
              {isVisible ? <AnimatedNumber value={stat.value} duration={duration} /> : 0}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper component for animating numbers
const AnimatedNumber = ({ value, duration }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const currentValue = Math.floor(progress * value);
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <>{displayValue.toLocaleString()}</>;
};

export default NumberIncreaser;