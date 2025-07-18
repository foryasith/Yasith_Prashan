import React from 'react';
import Header from '../Header';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
      description: [
        "Developed responsive web applications using React.js and Next.js",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Optimized application performance, reducing load times by 40%"
      ],
      skills: ["React", "TypeScript", "Redux", "CSS Modules"]
    },
    {
      id: 2,
      role: "UI Developer",
      company: "Digital Creations",
      duration: "Mar 2020 - Dec 2021",
      description: [
        "Built reusable component libraries for company projects",
        "Implemented accessibility standards across all products",
        "Mentored junior developers in frontend best practices"
      ],
      skills: ["JavaScript", "SASS", "Bootstrap", "Web Accessibility"]
    },
    {
      id: 3,
      role: "Web Development Intern",
      company: "StartUp Ventures",
      duration: "Jun 2019 - Feb 2020",
      description: [
        "Assisted in building company website and admin dashboard",
        "Fixed bugs and improved existing features",
        "Participated in code reviews and team meetings"
      ],
      skills: ["HTML5", "CSS3", "jQuery", "Git"]
    }
  ];

  return (
    <div className="experience-page">
      <Header />
      <div className="experience-container">
        <h1 className="experience-title">My Experience</h1>
        
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <div className="experience-company">{exp.company}</div>
                <div className="experience-duration">{exp.duration}</div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;