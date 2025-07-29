import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BrainConcept.css';

export default function BrainConcept() {
  // State for scroll animation progress
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // State to control button visibility
  const [showButtons, setShowButtons] = useState(false);
  
  // State to control section visibility (appears after profile)
  const [sectionVisible, setSectionVisible] = useState(false);
  
  // Refs for DOM elements
  const sectionRef = useRef();
  const containerRef = useRef();

  // State for image positioning - easily adjustable
  const [positions, setPositions] = useState({
    main: { x: '50%', y: '30%' },   // Center of container
    left: { x: '40%', y: '3.5%' },    // Left side
    right: { x: '40.5%', y: '3.5%' },   // Right side
    background: { x: '50%', y: '50%' } // Background position
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Show section after scrolling past profile (adjust 300px as needed)
        setSectionVisible(scrollY > 300);

        // Calculate animation progress only when section is visible
        if (scrollY > sectionTop - windowHeight * 0.7) {
          const sectionHeight = sectionRef.current.offsetHeight;
          const progress = Math.min(1, Math.max(0, 
            (scrollY - (sectionTop - windowHeight * 0.7)) / (sectionHeight * 0.1)
          ));
          setScrollProgress(progress);
          setShowButtons(progress > 0.8);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation styles with position adjustments
  const leftBrainStyle = {
    transform: `translateX(${-scrollProgress * 150}px) rotate(${-scrollProgress * 1}deg)`,
    opacity: scrollProgress,
    left: positions.left.x,
    top: positions.left.y
  };

  const rightBrainStyle = {
    transform: `translateX(${scrollProgress * 150}px) rotate(${scrollProgress * 1}deg)`,
    opacity: scrollProgress,
    right: positions.right.x,
    top: positions.right.y
  };

  const mainBrainStyle = {
    opacity: sectionVisible ? 1 : 0,
    transform: sectionVisible ? 'translate(-50%, -50%)' : 'translate(-50%, calc(-50% + 20px))',
    left: positions.main.x,
    top: positions.main.y
  };

  const backgroundBrainStyle = {
    opacity: sectionVisible ? 0.2 : 0,
    transform: 'translate(-50%, -50%)',
    left: positions.background.x,
    top: positions.background.y,
    transition: 'opacity 1s ease-in-out'
  };

  return (
    <section 
      ref={sectionRef} 
      className={`brain-concept-section ${sectionVisible ? 'visible' : ''}`}
    >
      <div ref={containerRef} className="brain-container">
        {/* Background Brain - Subtle effect behind everything */}
        <div className="background-brain" style={backgroundBrainStyle}>
          <img 
            src="/images/background.png"
            alt="Background brain concept"
            className="background-brain-image"
          />
        </div>

        {/* Main Brain - Centered by default */}
        <div className="main-brain" style={mainBrainStyle}>
          <img 
            src="/images/brain-concept.png"
            alt="Main brain concept"
            className="base-brain"
          />
        </div>

        {/* Left Brain - Animated to left side */}
        <div className="left-brain" style={leftBrainStyle}>
          <img src="/images/left-brain.png" alt="Creative brain" />
          {showButtons && (
            <a 
              href="https://instagram.com/dot__studio_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="brain-button left-button"
            >
              Creative Side
            </a>
          )}
        </div>

        {/* Right Brain - Animated to right side */}
        <div className="right-brain" style={rightBrainStyle}>
          <img src="/images/right-brain.png" alt="Logical brain" />
          {showButtons && (
            <Link 
              to="/projects" 
              className="brain-button right-button"
            >
              Logical Side
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}