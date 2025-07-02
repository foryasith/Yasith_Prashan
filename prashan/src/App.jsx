import React, { useState, useEffect, useRef } from 'react';
import NumberIncreaser from './components/NumberIncreaser';
import BrainVisualization from './components/BrainVisualization';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const brainSectionRef = useRef();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      setScrolled(window.scrollY > 50);
      
      // Brain rotation scroll effect
      if (brainSectionRef.current) {
        const section = brainSectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1) when section is in viewport
        const progress = Math.min(
          1, 
          Math.max(0, (scrollPosition - sectionTop + windowHeight * 0.5) / 
          (sectionHeight - windowHeight * 0.5))
        );
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Dynamic Header (appears solid on scroll) */}
      <header className={`invisible-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="name-logo">
          <h1>Yasith Prashan</h1>
        </div>
        <button 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      {/* Glassmorphism Side Menu */}
      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={toggleMenu}
                className="menu-link"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay (Darkens background when menu is open) */}
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="profile-photo">
              <img
                src="src/assets/profile.jpg"
                alt="Profile"
                loading="lazy"
              />
            </div>
            <div className="hero-text">
              <h1>Welcome to My Website</h1>
              <p>I'm a passionate developer creating amazing experiences</p>
              <button className="cta-button pulse">Get Started</button>
            </div>
          </div>
        </section>

        {/* Brain Visualization Section - Updated with scroll control */}
        <section 
          id="brain" 
          className="brain-section" 
          ref={brainSectionRef}
        >
          <div className="container">
            <h2>Interactive Brain Model</h2>
            <p>Scroll to rotate the 3D brain visualization</p>
            <div className="brain-visualization-wrapper">
              <BrainVisualization scrollProgress={scrollProgress} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p>Tell your story here. Share your background, skills, and what makes you unique.</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="section">
          <div className="container">
            <h2>My Work</h2>
            <div className="gallery">
              {[1, 2, 3].map((project) => (
                <div className="gallery-item" key={project}>
                  <img 
                    src={`https://via.placeholder.com/300x200/${project % 2 === 0 ? 'a29bfe' : '6c5ce7'}/ffffff?text=Project+${project}`} 
                    alt={`Project ${project}`} 
                    loading="lazy"
                  />
                  <h3>Project {project}</h3>
                  <p>Description of your project {project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with NumberIncreaser */}
        <section className="stats-section">
          <NumberIncreaser />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Get In Touch</h2>
            <p>Let's connect and work together!</p>
            <div className="contact-buttons">
              <button className="contact-btn">Email Me</button>
              <button className="contact-btn">LinkedIn</button>
              <button className="contact-btn">GitHub</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;