import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import BrainConcept from '../BrainConcept.jsx';
import ResumePage from '../StatsDashboard.jsx';
import './Home.css';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
              <h1>Yasith Prashan</h1>
              <p>Computer Science Undergraduate</p>
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

        {/* Resume Section */}
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
              <Link to="/contact" className="contact-btn">Contact Page</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;