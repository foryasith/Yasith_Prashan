import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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

  const handleHomeClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`invisible-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="name-logo">
          <Link 
            to="/" 
            onClick={handleHomeClick}
            className="home-link"
            style={{ textDecoration: 'none' }}
          >
            <h1>Prashan</h1>
          </Link>
        </div>
        <button 
          className="menu-button" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </header>

      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
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
        role="button"
        tabIndex={0}
        aria-label="Close menu"
      />
    </>
  );
};

export default Header;