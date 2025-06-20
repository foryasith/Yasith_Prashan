import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderContent = () => {
    switch(currentSection) {
      case 'home':
        return (
          <div className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-content">
              <div className="hero-container">
                <div className="profile-image-container">
                  <img 
                    src="./src/assets/profile.jpg"
                    alt="Profile"
                    className="profile-image"
                  />
                </div>
                
                <h1 className="hero-title">
                  Your Name Here
                </h1>
                
                <h2 className="hero-subtitle">
                  Web Developer & Designer
                </h2>
                
                <p className="hero-description">
                  Welcome to my digital space! I'm passionate about creating beautiful, 
                  functional websites and applications. Let's build something amazing together.
                </p>
                
                <div className="hero-buttons">
                  <button 
                    onClick={() => setCurrentSection('about')}
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                  <button 
                    onClick={() => setCurrentSection('contact')}
                    className="btn btn-secondary"
                  >
                    Get In Touch
                  </button>
                </div>
                
                <div className="social-links">
                  <a href="https://linkedin.com/in/yourprofile" className="social-link">
                    <div className="social-icon">Li</div>
                  </a>
                  <a href="https://github.com/yourprofile" className="social-link">
                    <div className="social-icon">Gh</div>
                  </a>
                  <a href="https://twitter.com/yourprofile" className="social-link">
                    <div className="social-icon">Tw</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'about':
        return (
          <div className="about-section">
            <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-image-container">
                  <img 
                    src="./src/assets/about-image.jpg"
                    alt="About"
                    className="about-image"
                  />
                </div>
                <div className="about-text">
                  <h3 className="about-heading">My Story</h3>
                  <p className="about-paragraph">
                    I'm a passionate developer with a love for creating digital experiences 
                    that make a difference. With expertise in modern web technologies, 
                    I enjoy turning complex problems into simple, beautiful solutions.
                  </p>
                  <p className="about-paragraph">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or enjoying a good cup of coffee 
                    while planning my next adventure.
                  </p>
                  <div className="skills-tags">
                    {['React', 'JavaScript', 'Node.js', 'Python', 'CSS', 'MongoDB'].map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="skills-section">
            <div className="container">
              <h2 className="section-title">Skills & Expertise</h2>
              <div className="skills-grid">
                {[
                  { title: 'Frontend', skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'], color: 'blue' },
                  { title: 'Backend', skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL'], color: 'green' },
                  { title: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'], color: 'purple' }
                ].map((category, index) => (
                  <div key={index} className={`skill-category ${category.color}`}>
                    <h3 className="skill-category-title">{category.title}</h3>
                    <ul className="skill-list">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="skill-item">
                          <div className="skill-dot"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="projects-section">
            <div className="container">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-grid">
                {[1, 2, 3, 4, 5, 6].map((project) => (
                  <div key={project} className="project-card">
                    <div className="project-image">
                      <img 
                        src={`./src/assets/project-${project}.jpg`}
                        alt={`Project ${project}`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="project-placeholder">Project ${project}</div>`;
                        }}
                      />
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">Project {project}</h3>
                      <p className="project-description">
                        A brief description of this amazing project and what it accomplishes.
                      </p>
                      <div className="project-footer">
                        <div className="project-tags">
                          <span className="project-tag blue">React</span>
                          <span className="project-tag green">Node.js</span>
                        </div>
                        <button className="project-link">View →</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="contact-section">
            <div className="container">
              <h2 className="section-title">Get In Touch</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3 className="contact-heading">Let's Work Together</h3>
                  <p className="contact-description">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hi, I'd love to hear from you!
                  </p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-icon email">@</div>
                      <span>your.email@example.com</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon phone">📱</div>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-item">
                      <div className="contact-icon location">📍</div>
                      <span>Your City, Country</span>
                    </div>
                  </div>
                </div>
                <div className="contact-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Your message here..."></textarea>
                  </div>
                  <button 
                    onClick={() => alert('Message sent! (This is a demo)')}
                    className="btn btn-primary full-width"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">Portfolio</div>
            <div className="nav-links">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <div className="nav-mobile">
              <button className="mobile-menu-btn">
                <div className="hamburger">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Your Name</h3>
              <p className="footer-description">
                Creating digital experiences that inspire and engage.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-links">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className="footer-link"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-links">
                <a href="https://linkedin.com/in/yourprofile" className="footer-link">LinkedIn</a>
                <a href="https://github.com/yourprofile" className="footer-link">GitHub</a>
                <a href="https://twitter.com/yourprofile" className="footer-link">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;