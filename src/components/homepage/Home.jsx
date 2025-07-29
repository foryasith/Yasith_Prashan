import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import BrainConcept from '../BrainConcept.jsx';
import ResumePage from '../StatsDashboard.jsx';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "Yasith Prashan";
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Home">
      <Header scrolled={scrolled} />

      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Prashan Karunarathna</h1>
              <p>Undergraduate in Computer Science </p>
              <h2>Bridging software and hardware through innovative solutions</h2>
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
            <h3>
              Hi, I'm Yasith Prashan, a Computer Science undergraduate passionate about systems-level innovation. 
              I specialize in building solutions where software meets hardware, from embedded programming to 
              full-stack development, with a strong foundation in algorithms and system design.
            </h3>
            <h4>Core Technical Skills</h4>
            <p>C, C++, Java, Python, JavaScript</p>
            <p>Embedded Development, Linux, Computer Architecture</p>
            <p>React, Node.js, Android Development</p>
            <p>Git, Docker, CI/CD Pipelines</p>
          </div>
        </section>

        {/* Brain Concept Section */}
        <BrainConcept />

        {/* Resume Section */}
        <section id="resume" className="section">
          <div className="container">
            <ResumePage />
          </div>
        </section>

        {/* Social Links Section */}
        <section id="social" className="sections">
          <div className="container">
            <div className="social-links">
              <a href="https://github.com/foryasith" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yasith-prashan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/yasith_prashan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:yasithprashan@gamil.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;