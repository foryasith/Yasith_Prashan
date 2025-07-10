import React from 'react';
import './StatsDashboard.css';

const StatsDashboard = () => {
  // Sample data - replace with your actual stats
  const statsData = {
    overview: {
      yearsExperience: 4,
      projectsCompleted: 19,
      technologiesUsed: 12,
      contributions: 147,
      roboticsProjects: 5,
      hardwareSkills: ['Arduino', 'Raspberry Pi', 'ESP32'],
    },
    education: {
      degree: "B.Sc Computer Science",
      university: "Your University",
      gpa: "3.7/4.0",
      courses: ["Embedded Systems", "Algorithms", "Computer Architecture", "Robotics"]
    },
    activity: {
      commitsPerDay: [2, 5, 3, 7, 4, 6, 1], // Last 7 days
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
      <h2 className="dashboard-title">My Development Metrics</h2>
      
      {/* Overview Cards */}
      <div className="overview-grid">
        <div className="stat-card">
          <h3>Years Coding</h3>
          <div className="stat-value">{statsData.overview.yearsExperience}+</div>
        </div>
        <div className="stat-card">
          <h3>Projects</h3>
          <div className="stat-value">{statsData.overview.projectsCompleted}</div>
          <div className="stat-subtext">
            <span className="software-badge">{statsData.projects.filter(p => p.type === 'software').length} Software</span>
            <span className="hardware-badge">{statsData.projects.filter(p => p.type === 'hardware').length} Hardware</span>
          </div>
        </div>
        <div className="stat-card">
          <h3>Technologies</h3>
          <div className="stat-value">{statsData.overview.technologiesUsed}</div>
        </div>
        <div className="stat-card">
          <h3>Contributions</h3>
          <div className="stat-value">{statsData.overview.contributions}</div>
        </div>
      </div>

      {/* Education Section */}
      <div className="section-container education-section">
        <h3>Education</h3>
        <div className="education-content">
          <div className="education-main">
            <div className="education-degree">{statsData.education.degree}</div>
            <div className="education-university">{statsData.education.university}</div>
            <div className="education-gpa">GPA: {statsData.education.gpa}</div>
          </div>
          <div className="education-courses">
            <h4>Key Courses:</h4>
            <ul>
              {statsData.education.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section-container skills-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Software</h4>
            <ul>
              {statsData.skills.software.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h4>Hardware</h4>
            <ul>
              {statsData.skills.hardware.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <ul>
              {statsData.skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Language Distribution */}
      <div className="chart-container">
        <h3>Language Distribution</h3>
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
              <span className="language-label">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Graphs */}
      <div className="activity-grid">
        {/* Commits Per Day */}
        <div className="chart-container">
          <h3>Weekly Activity</h3>
          <div className="bar-chart">
            {statsData.activity.commitsPerDay.map((count, index) => (
              <div key={index} className="bar-container">
                <div 
                  className="bar" 
                  style={{ height: `${count * 15}px` }}
                ></div>
                <div className="bar-label">{['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Time of Day */}
        <div className="chart-container">
          <h3>Coding Time Distribution</h3>
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
            <div className="pie-center"></div>
          </div>
          <div className="pie-legend">
            {Object.keys(statsData.activity.timeOfDay).map(time => (
              <div key={time} className="legend-item">
                <span className={`legend-color ${time}`}></span>
                <span className="legend-label">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak Counter */}
      <div className="streak-container">
        <h3>Coding Streak</h3>
        <div className="streak-display">
          <div className="streak-current">
            <span className="streak-number">{statsData.activity.streak.current}</span>
            <span className="streak-label">days current streak</span>
          </div>
          <div className="streak-divider"></div>
          <div className="streak-record">
            <span className="streak-number">{statsData.activity.streak.longest}</span>
            <span className="streak-label">days longest streak</span>
          </div>
        </div>
      </div>

      {/* Top Projects */}
      <div className="projects-container">
        <h3>Top Projects</h3>
        <div className="projects-list">
          {statsData.projects.map((project, index) => (
            <div key={index} className={`project-card ${project.type}`}>
              <div className="project-name">{project.name}</div>
              <div className="project-stars">
                <span className="star-icon">★</span>
                {project.stars}
              </div>
              <span className={`project-type ${project.type}`}>
                {project.type === 'hardware' ? '🤖' : '💻'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;