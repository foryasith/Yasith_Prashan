import React, { useState } from 'react';
import Header from '../Header';
import './Project.css';

const Projects = () => {
  const [starredProjects, setStarredProjects] = useState(new Set());

  const toggleStar = (projectId) => {
    const newStarred = new Set(starredProjects);
    if (newStarred.has(projectId)) {
      newStarred.delete(projectId);
    } else {
      newStarred.add(projectId);
    }
    setStarredProjects(newStarred);
  };

  const ongoingProject = {
    id: 0,
    title: "My Current Focus Project",
    description: "This is my main ongoing project where I'm currently focusing my efforts. It showcases my latest work and the technologies I'm mastering right now.",
    imageUrl: "https://via.placeholder.com/1200x400",
    link: "#",
    status: "ongoing"
  };

  const finishedProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product filtering, cart system, and Stripe payment integration.",
      imageUrl: "https://via.placeholder.com/400x250/1a0638/ffffff?text=E-Commerce",
      link: "#",
      status: "finished",
      tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application with drag-and-drop functionality, team collaboration features, and real-time updates using Firebase.",
      imageUrl: "https://via.placeholder.com/400x250/140326/ffffff?text=Task+App",
      link: "#",
      status: "finished",
      tech: ["React", "Firebase", "Material UI"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Interactive weather application with 5-day forecast, location search, and animated weather icons using OpenWeather API.",
      imageUrl: "https://via.placeholder.com/400x250/050e37/ffffff?text=Weather",
      link: "#",
      status: "finished",
      tech: ["JavaScript", "API Integration", "CSS3"]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, dark/light mode toggle, and project showcase section.",
      imageUrl: "https://via.placeholder.com/400x250/8e44ad/ffffff?text=Portfolio",
      link: "#",
      status: "finished",
      tech: ["React", "GSAP", "SCSS"]
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "Application that suggests recipes based on ingredients you have, with nutritional information and step-by-step instructions.",
      imageUrl: "https://via.placeholder.com/400x250/667eea/ffffff?text=Recipes",
      link: "#",
      status: "finished",
      tech: ["Vue.js", "Spoonacular API", "Vuex"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-first fitness application that tracks workouts, progress, and provides exercise demonstrations with video.",
      imageUrl: "https://via.placeholder.com/400x250/ff4757/ffffff?text=Fitness",
      link: "#",
      status: "finished",
      tech: ["React Native", "Firebase", "Expo"]
    }
  ];

  return (
    <div className="projects-page">
      <Header />
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        {/* Ongoing Project Card */}
        <div className="ongoing-project-card">
          <div className="ongoing-project-badge">Ongoing Project</div>
          <div className="ongoing-project-image-container">
            <img src={ongoingProject.imageUrl} alt={ongoingProject.title} className="ongoing-project-image" />
          </div>
          <div className="ongoing-project-content">
            <h3 className="ongoing-project-title">{ongoingProject.title}</h3>
            <p className="ongoing-project-description">{ongoingProject.description}</p>
            <div className="ongoing-project-footer">
              <a href={ongoingProject.link} className="ongoing-project-link">View Project →</a>
              <div className="progress-indicator">
                <div className="progress-bar" style={{ width: '65%' }}></div>
                <span>65% Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Finished Projects Section */}
        <h2 className="finished-projects-title">Finished Projects</h2>
        <div className="projects-grid">
          {finishedProjects.map((project) => (
            <div key={project.id} className="project-card">
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
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-tech-tags">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link} className="project-link">View Project →</a>
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