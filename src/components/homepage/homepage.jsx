import React, { useState, useEffect, useRef } from 'react';
import BrainConcept from '../BrainConcept.jsx';
import ResumePage from '../StatsDashboard.jsx'; // Add this import
import './homepage.css'; // Changed from app.css to homepage.css

function homepage() { // Changed from app to Homepage
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Homepage"> {/* Changed from App to Homepage */}
      {/* Dynamic Header (appears solid on scroll) */}
      <header className={`invisible-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="name-logo">
          <h1> Prashan</h1>
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
          {['Home', 'About', 'Porjects', 'Experience', 'Contact'].map((item) => ( // Added Resume to menu
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
            <div className="hero-text">
              <h1>Yasith Prashan</h1>
              <p> Computer Science Undergraduate </p>
              <h2> Bridging software and hardware through innovative solutions</h2>
            </div>
            <div className="profile-photo">
              <img
                src="src/assets/profile.png"
                alt="Profile"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <h3>Hi, I'm Yasith Prashan, a Computer Science undergraduate passionate about systems-level innovation. I specialize in building solutions where software meets hardware, from embedded programming to full-stack development, with a strong foundation in algorithms and system design.
While my core focus is technical problem-solving, I occasionally channel creativity into multimedia projects, applying the same analytical approach to video production and digital design. This interdisciplinary perspective helps me build more intuitive and visually engaging technical solutions.</h3>
<h4>Core Technical Skills</h4>
<p>  C, C++, Java, Python, JavaScript</p>
<p>  Embedded Development, Linux, Computer Architecture</p>
<p>  React, Node.js, Android Development</p>
<p>  Git, Docker, CI/CD Pipelines</p>
          </div>
        </section>

        {/* New Brain Concept Section */}
        <BrainConcept />

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

        {/* New Resume Section */}
        <section id="resume" className="section">
          <div className="container">
            <ResumePage />
          </div>
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

export default homepage; // Changed from App to Homepage