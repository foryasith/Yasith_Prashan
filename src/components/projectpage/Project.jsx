import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import './Project.css';

const Projects = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Projects";
    
    if (location.hash === '#ongoing-project') {
      const element = document.getElementById('ongoing-project');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const ongoingProject = {
    id: 0,
    title: "Task management web application",
    description: "A personal task manager for organizing to-dos and events, with progress tracking to streamline your productivity workflow.",
    imageUrl: "src/assets/ongoing.png",
    githubLink: "https://github.com/yourusername/current-project",
    status: "ongoing",
    type: "software",
    progress: 65
  };

  const finishedProjects = [
    {
      id: 1,
      title: " Smart Bin ",
      description: "A smart waste management system that uses image recognition to sort recyclables from waste, enhancing environmental sustainability.",
      imageUrl: "src/assets/p1.jpg",
      githubLink: "https://www.linkedin.com/in/yasith-prashan/",
      status: "ongoing",
      tech: ["Object Detection", "Raspberry PI", "Python", "Open CV"],
      type: "hardware"
    },
    {
      id: 2,
      title: "Simple Portfolio Website",
      description: "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
      imageUrl: "src/assets/p2.png",
      githubLink: "https://github.com/foryasith/Yasith_Prashan/tree/main/prashan",
      status: "finished",
      tech: ["HTML", "CSS", "JS", "Emailjs"],
      type: "software"
    },
    // {
    //   id: 3,
    //   title: "Health Fitness Tracker",
    //   description: "Mobile application that tracks workouts, nutrition, and health metrics with data visualization.",
    //   imageUrl: "https://via.placeholder.com/400x250/3b0b5a/ffffff?text=Fitness+Tracker",
    //   githubLink: "https://github.com/yourusername/fitness-tracker",
    //   status: "finished",
    //   tech: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    //   type: "software"
    // },
    // {
    //   id: 4,
    //   title: "Smart Home Dashboard",
    //   description: "IoT control panel for managing smart home devices with real-time monitoring and automation.",
    //   imageUrl: "https://via.placeholder.com/400x250/4c0c6d/ffffff?text=Smart+Home",
    //   githubLink: "https://github.com/yourusername/smart-home-dashboard",
    //   status: "finished",
    //   tech: ["React", "Python", "Raspberry Pi", "MQTT"],
    //   type: "hardware"
    // },
    // {
    //   id: 5,
    //   title: "AI Image Recognition",
    //   description: "Machine learning model that classifies images with a custom-trained convolutional neural network.",
    //   imageUrl: "https://via.placeholder.com/400x250/5d0d80/ffffff?text=AI+Image",
    //   githubLink: "https://github.com/yourusername/ai-image-recognition",
    //   status: "finished",
    //   tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    //   type: "software"
    // }
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
            <a 
              href={ongoingProject.githubLink} 
              className="project-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {/* More details */}
            </a>
          </div>
        </div>

        <h2 className="finished-projects-title">Finished Projects</h2>
        <div className="projects-grid">
          {finishedProjects.map((project) => (
            <div key={project.id} className="project-card">
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
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    More details
                  </a>
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