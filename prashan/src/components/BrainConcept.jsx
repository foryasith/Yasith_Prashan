import { useState, useEffect, useRef } from 'react';
import './BrainConcept.css';

export default function BrainConcept() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && containerRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate progress through the animation phase (first 70% of section)
        const animationPhaseHeight = sectionHeight * 0.7;
        const progress = Math.min(1, Math.max(0, (scrollY - sectionTop) / animationPhaseHeight));
        setScrollProgress(progress);
        
        // Check if animation should be complete
        const shouldComplete = progress >= 1 || scrollY > sectionTop + animationPhaseHeight;
        setAnimationComplete(shouldComplete);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation styles
  const leftBrainStyle = {
    transform: `translateX(${-scrollProgress * 200}px) rotate(${-scrollProgress * 15}deg)`,
    opacity: scrollProgress
  };

  const rightBrainStyle = {
    transform: `translateX(${scrollProgress * 200}px) rotate(${scrollProgress * 15}deg)`,
    opacity: scrollProgress
  };

  const containerStyle = {
    position: animationComplete ? 'relative' : 'fixed',
    top: animationComplete ? 'auto' : '50%',
    transform: animationComplete ? 'none' : 'translate(-50%, -50%)'
  };

  return (
    <section ref={sectionRef} className="brain-concept-section">
      <div 
        ref={containerRef} 
        className="brain-container"
        style={containerStyle}
      >
        {/* Main Brain */}
        <div className="main-brain">
          <img 
            src="/images/brain-concept.png"
            alt="Main brain concept"
            className="base-brain"
          />
        </div>

        {/* Left Brain */}
        <div className="left-brain" style={leftBrainStyle}>
          <img src="/images/left-brain.png" alt="Creative brain" />
          {scrollProgress > 0.8 && (
            <button className="brain-button left-button">
              Creative Side
            </button>
          )}
        </div>

        {/* Right Brain */}
        <div className="right-brain" style={rightBrainStyle}>
          <img src="/images/right-brain.png" alt="Logical brain" />
          {scrollProgress > 0.8 && (
            <button className="brain-button right-button">
              Logical Side
            </button>
          )}
        </div>

        {/* Additional Content (appears after animation) */}
        {animationComplete && (
          <div className="post-animation-content">
            <h2>Unlock Your Full Potential</h2>
            <p>Discover how our approach balances both creative and logical thinking</p>
            <button className="cta-button">Learn More</button>
          </div>
        )}
      </div>
    </section>
  );
}