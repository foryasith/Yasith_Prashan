import React, { useEffect, useRef, useState } from 'react';
import './StatsDashboard.css';

const StatsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
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
      // { name: 'C++', percentage: 10, color: '#f34b7d' },
      { name: 'Arduino', percentage: 15, color: '#00979D' },
    ],
    projects: [
      { name: 'Portfolio Website', stars: 22, type: 'software' },
      { name: 'E-commerce App', stars: 15, type: 'software' },
      { name: 'Autonomous Robot', stars: 18, type: 'hardware' },
      { name: 'Data Visualization', stars: 8, type: 'software' },
      { name: 'Smart Home System', stars: 12, type: 'hardware' },
    ],
    skills: {
      software: ['React', 'TensorFlow', 'OpenCV', 'Node.js'],
      hardware: ['PCB Design', '3D Printing', 'Soldering', 'ROS'],
      tools: ['Git', 'Docker', 'KiCad', 'Fusion 360']
    }
  };

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

  // Animated number component
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
                <span className="software-badge">{statsData.projects.filter(p => p.type === 'software').length} Software</span>
                <span className="hardware-badge">{statsData.projects.filter(p => p.type === 'hardware').length} Hardware</span>
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
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {statsData.projects.map((project, index) => (
            <div key={index} className={`project-card ${project.type}`}>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
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
      </section>
    </div>
  );
};

export default StatsDashboard;