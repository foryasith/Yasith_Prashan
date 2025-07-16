import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure you have the appropriate CSS for styling

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (sectionId) => {
    toggleMenu();
    if (sectionId.startsWith('#')) {
      setTimeout(() => {
        const element = document.getElementById(sectionId.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header className={`invisible-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="name-logo">
          <h1>Prashan</h1>
        </div>
        <button 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link 
              to="/" 
              onClick={() => handleNavigation('#home')}
              className="menu-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              onClick={() => handleNavigation('#about')}
              className="menu-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              onClick={toggleMenu}
              className="menu-link"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/experience" 
              onClick={toggleMenu}
              className="menu-link"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={toggleMenu}
              className="menu-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      />
    </>
  );
};

export default Header;