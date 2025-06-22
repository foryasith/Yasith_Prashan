import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Your Name</h1>
        <p>Web Developer | Designer | Creator</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate web developer with experience in React,
          JavaScript, and modern web technologies. I enjoy creating beautiful
          and responsive web applications.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Project One</h3>
            <p>A web app that does amazing things.</p>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>An innovative tool for productivity.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourname</p>
        <p>GitHub: github.com/yourusername</p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
