import React, { useEffect, useRef, useState } from 'react';
import './StatsDashboard.css';

const StatsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const savedStarred = localStorage.getItem('starredProjects');
    if (savedStarred) {
      const starredIds = JSON.parse(savedStarred);
      // Map starred IDs to project data (in a real app, you'd fetch this data)
      const projects = [
        {
          id: 1,
          name: 'E-Commerce Platform',
          stars: 15,
          type: 'software',
          description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB'
        },
        {
          id: 2,
          name: 'Task Management App',
          stars: 8,
          type: 'software',
          description: 'Productivity application with drag-and-drop functionality'
        },
        {
          id: 3,
          name: 'Weather Dashboard',
          stars: 12,
          type: 'software',
          description: 'Interactive weather application with 5-day forecast'
        },
        {
          id: 4,
          name: 'Portfolio Website',
          stars: 22,
          type: 'software',
          description: 'Responsive portfolio with animations and dark/light mode'
        },
        {
          id: 5,
          name: 'Recipe Finder',
          stars: 7,
          type: 'software',
          description: 'Application that suggests recipes based on ingredients'
        },
        {
          id: 6,
          name: 'Fitness Tracker',
          stars: 14,
          type: 'software',
          description: 'Mobile-first fitness application for workout tracking'
        }
      ];
      setFeaturedProjects(projects.filter(project => starredIds.includes(project.id)));
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const statsData = {
    overview: {
      yearsExperience: 4,
      projectsCompleted: 19,
      technologiesUsed: 12,
      contributions: 147,
      roboticsProjects: 5,
    },
    languages: [
      { name: 'JavaScript', percentage: 40, color: '#f1e05a' },
      { name: 'Python', percentage: 15, color: '#3572A5' },
      { name: 'c', percentage: 30, color: '#3178c6' },
      { name: 'Arduino', percentage: 15, color: '#00979D' },
    ],
    skills: {
      software: ['React', 'TensorFlow', 'OpenCV', 'Node.js'],
      hardware: ['PCB Design', '3D Printing', 'Soldering', 'ROS'],
      tools: ['Git', 'Docker', 'KiCad', 'Fusion 360']
    }
  };

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const currentValue = Math.floor(progress * value);
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      if (isVisible) {
        window.requestAnimationFrame(step);
      }
    }, [value, duration, isVisible]);

    return <>{displayValue.toLocaleString()}</>;
  };

  return (
    <div className="stats-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Developer Insights</h1>
        <p className="dashboard-subtitle">Quantifying my coding journey</p>
      </header>
      
      <div className="overview-grid" ref={containerRef}>
        {[
          { 
            title: 'Years Coding', 
            value: statsData.overview.yearsExperience,
            suffix: '+',
            icon: '⏳' 
          },
          { 
            title: 'Projects', 
            value: statsData.overview.projectsCompleted,
            subtext: (
              <>
                <span className="software-badge">{statsData.overview.projectsCompleted - statsData.overview.roboticsProjects} Software</span>
                <span className="hardware-badge">{statsData.overview.roboticsProjects} Hardware</span>
              </>
            ),
            icon: '🚀'
          },
          { 
            title: 'Technologies', 
            value: statsData.overview.technologiesUsed, 
            icon: '🛠️' 
          },
          { 
            title: 'Contributions', 
            value: statsData.overview.contributions, 
            icon: '💻' 
          },
        ].map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <div className="stat-value">
              {isVisible ? (
                <>
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix || ''}
                </>
              ) : (
                '0' + (stat.suffix || '')
              )}
            </div>
            {stat.subtext && <div className="stat-subtext">{stat.subtext}</div>}
          </div>
        ))}
      </div>

      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(statsData.skills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="skill-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-bullet">•</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="language-section">
        <h2 className="section-title">Language Distribution</h2>
        <div className="language-chart">
          {statsData.languages.map((lang, index) => (
            <div 
              key={index}
              className="language-bar"
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: lang.color,
              }}
              title={`${lang.name}: ${lang.percentage}%`}
            >
              <span className="language-label">{lang.name} ({lang.percentage}%)</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">
          <svg viewBox="0 0 24 24" width="24" height="24" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
            <path 
              fill="#FFD700" 
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          Featured Projects
        </h2>
        {featuredProjects.length > 0 ? (
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`project-card ${project.type}`}>
                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <div className="project-stars">
                      <span className="star-icon">★</span>
                      {project.stars}
                    </div>
                    <span className="project-type">
                      {project.type === 'hardware' ? '🤖 Hardware' : '💻 Software'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-featured">
            <p>No projects have been starred yet. Star projects to feature them here.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default StatsDashboard;