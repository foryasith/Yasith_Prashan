import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import './Project.css';

const Projects = () => {
  const location = useLocation();
  const [starredProjects, setStarredProjects] = useState(new Set());

  useEffect(() => {
    document.title = "Projects - Yasith Prashan";
    
    // Scroll to ongoing project if coming from home page link
    if (location.hash === '#ongoing-project') {
      const element = document.getElementById('ongoing-project');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  // Load starred projects from localStorage
  useEffect(() => {
    const savedStarred = localStorage.getItem('starredProjects');
    if (savedStarred) {
      setStarredProjects(new Set(JSON.parse(savedStarred)));
    }
  }, []);

  const toggleStar = (projectId) => {
    const newStarred = new Set(starredProjects);
    if (newStarred.has(projectId)) {
      newStarred.delete(projectId);
    } else {
      newStarred.add(projectId);
    }
    setStarredProjects(newStarred);
    localStorage.setItem('starredProjects', JSON.stringify(Array.from(newStarred)));
  };

  const ongoingProject = {
    id: 0,
    title: "My Current Focus Project",
    description: "This is my main ongoing project where I'm currently focusing my efforts. It showcases my latest work and the technologies I'm mastering right now.",
    imageUrl: "./assets/shot.jpg",
    link: "#",
    status: "ongoing",
    type: "software",
    progress: 65
  };

  const finishedProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product filtering, cart system, and Stripe payment integration.",
      imageUrl: "https://via.placeholder.com/400x250/1a0638/ffffff?text=E-Commerce",
      link: "#",
      status: "finished",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "software"
    },
    // ... other finished projects remain the same ...
  ];

  useEffect(() => {
    const projectCount = {
      total: finishedProjects.length + 1,
      software: finishedProjects.filter(p => p.type === 'software').length + 1,
      hardware: finishedProjects.filter(p => p.type === 'hardware').length
    };
    localStorage.setItem('projectCount', JSON.stringify(projectCount));
  }, [finishedProjects]);

  return (
    <div className="projects-page">
      <Header />
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        {/* Ongoing Project Card with ID for deep linking */}
        <div className="ongoing-project-card" id="ongoing-project">
          <div className="ongoing-project-badge">Ongoing Project</div>
          <div className="ongoing-project-image-container">
            <img 
              src={ongoingProject.imageUrl} 
              alt={ongoingProject.title} 
              className="ongoing-project-image" 
              loading="lazy"
            />
          </div>
          <div className="ongoing-project-content">
            <h3 className="ongoing-project-title">{ongoingProject.title}</h3>
            <p className="ongoing-project-description">{ongoingProject.description}</p>
            <div className="ongoing-project-footer">
              <a href={ongoingProject.link} className="ongoing-project-link">
                Learn More →
              </a>
              <div className="progress-indicator">
                <div className="progress-bar" style={{ width: `${ongoingProject.progress}%` }}></div>
                <span>{ongoingProject.progress}% Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Finished Projects Section */}
        <h2 className="finished-projects-title">Finished Projects</h2>
        <div className="projects-grid">
          {finishedProjects.map((project) => (
            <div key={project.id} className={`project-card ${starredProjects.has(project.id) ? 'starred' : ''}`}>
              <div className="star-button-container">
                <button 
                  className={`star-button ${starredProjects.has(project.id) ? 'starred' : ''}`}
                  onClick={() => toggleStar(project.id)}
                  aria-label={starredProjects.has(project.id) ? 'Unstar project' : 'Star project'}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path 
                      fill="currentColor" 
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                </button>
              </div>
              
              <div className="project-content-wrapper">
                <div className="project-image-container">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image" 
                    loading="lazy"
                  />
                  <div className="project-tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link">View Details →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;