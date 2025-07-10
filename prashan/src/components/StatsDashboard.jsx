import React from 'react';
import './StatsDashboard.css';

const StatsDashboard = () => {
  const statsData = {
    overview: {
      yearsExperience: 4,
      projectsCompleted: 19,
      technologiesUsed: 12,
      contributions: 147,
      roboticsProjects: 5,
    },
    activity: {
      commitsPerDay: [2, 5, 3, 7, 4, 6, 1],
      timeOfDay: {
        morning: 15,
        afternoon: 35,
        evening: 40,
        night: 10,
      },
      streak: {
        current: 14,
        longest: 42,
      },
    },
    languages: [
      { name: 'JavaScript', percentage: 45, color: '#f1e05a' },
      { name: 'Python', percentage: 25, color: '#3572A5' },
      { name: 'TypeScript', percentage: 15, color: '#3178c6' },
      { name: 'C++', percentage: 10, color: '#f34b7d' },
      { name: 'Arduino', percentage: 5, color: '#00979D' },
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

  return (
    <div className="stats-dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Developer Insights</h1>
        <p className="dashboard-subtitle">Quantifying my coding journey</p>
      </header>
      
      <div className="overview-grid">
        {[
          { title: 'Years Coding', value: `${statsData.overview.yearsExperience}+`, icon: '⏳' },
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
          { title: 'Technologies', value: statsData.overview.technologiesUsed, icon: '🛠️' },
          { title: 'Contributions', value: statsData.overview.contributions, icon: '💻' },
        ].map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
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

      <div className="activity-grid">
        <section className="activity-section">
          <h2 className="section-title">Weekly Activity</h2>
          <div className="bar-chart">
            {statsData.activity.commitsPerDay.map((count, index) => (
              <div key={index} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${count * 15}px` }}
                  data-count={count}
                ></div>
                <div className="bar-label">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="time-section">
          <h2 className="section-title">Coding Time</h2>
          <div className="pie-chart-container">
            <div className="pie-chart">
              {Object.entries(statsData.activity.timeOfDay).map(([time, percent], index) => (
                <div 
                  key={time}
                  className="pie-segment"
                  style={{
                    '--percentage': percent,
                    '--color': `var(--${time}-color)`,
                    '--start': index === 0 ? 0 : `calc(var(--start-prev) + var(--percentage-prev))`,
                  }}
                  title={`${time}: ${percent}%`}
                ></div>
              ))}
            </div>
            <div className="pie-legend">
              {Object.entries(statsData.activity.timeOfDay).map(([time, percent]) => (
                <div key={time} className="legend-item">
                  <span className={`legend-color ${time}`}></span>
                  <span className="legend-label">{time} ({percent}%)</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="streak-section">
        <h2 className="section-title">Coding Streak</h2>
        <div className="streak-display">
          <div className="streak-card">
            <div className="streak-number">{statsData.activity.streak.current}</div>
            <div className="streak-label">Current streak</div>
          </div>
          <div className="streak-card">
            <div className="streak-number">{statsData.activity.streak.longest}</div>
            <div className="streak-label">Longest streak</div>
          </div>
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