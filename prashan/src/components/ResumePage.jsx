import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  // Sample resume data - replace with your actual data
  const resumeData = {
    name: "Your Name",
    title: "Your Profession",
    contact: {
      email: "your.email@example.com",
      phone: "(123) 456-7890",
      location: "City, Country"
    },
    summary: "Brief professional summary highlighting your skills and experience.",
    skills: {
      languages: ["JavaScript", "Python", "Java", "C++"],
      tools: ["React", "Node.js", "Git", "Docker", "VS Code"],
      other: ["Agile Development", "UI/UX Design", "Data Structures"]
    },
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University Name",
        year: "2020 - 2024",
        coursework: ["Data Structures", "Algorithms", "Database Systems", "Web Development"],
        achievements: ["Dean's List", "Honors Program"]
      }
    ],
    experience: [
      {
        role: "Software Engineering Intern",
        company: "Tech Company",
        duration: "Summer 2023",
        description: "Developed features for web applications using React and Node.js"
      },
      {
        role: "Hackathon Participant",
        event: "Local Hack Day",
        duration: "2022",
        description: "Built a productivity app that won 2nd place out of 50 teams"
      }
    ],
    contests: [
      {
        name: "Google Code Jam",
        year: "2022",
        achievement: "Qualified for Round 2"
      }
    ]
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>{resumeData.name}</h1>
        <h2>{resumeData.title}</h2>
        <div className="contact-info">
          <span>{resumeData.contact.email}</span>
          <span>{resumeData.contact.phone}</span>
          <span>{resumeData.contact.location}</span>
        </div>
      </div>

      <div className="resume-section">
        <h3>Summary</h3>
        <p>{resumeData.summary}</p>
      </div>

      <div className="resume-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div>
            <h4>Languages</h4>
            <ul>
              {resumeData.skills.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Tools & Technologies</h4>
            <ul>
              {resumeData.skills.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Other Skills</h4>
            <ul>
              {resumeData.skills.other.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.degree}</h4>
            <div className="sub-header">
              <span className="institution">{edu.institution}</span>
              <span className="duration">{edu.year}</span>
            </div>
            <div className="coursework">
              <h5>Relevant Coursework:</h5>
              <ul>
                {edu.coursework.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="achievements">
                <h5>Achievements:</h5>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4>{exp.role}</h4>
            <div className="sub-header">
              <span className="company">{exp.company || exp.event}</span>
              <span className="duration">{exp.duration}</span>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3>Coding Contests</h3>
        {resumeData.contests.map((contest, index) => (
          <div key={index} className="contest-item">
            <h4>{contest.name}</h4>
            <div className="sub-header">
              <span className="year">{contest.year}</span>
            </div>
            <p>{contest.achievement}</p>
          </div>
        ))}
      </div>

      <div className="resume-actions">
        <button className="download-btn" onClick={() => window.print()}>
          Download as PDF
        </button>
        <button className="view-inline-btn">
          View Inline Version
        </button>
      </div>
    </div>
  );
};

export default ResumePage;